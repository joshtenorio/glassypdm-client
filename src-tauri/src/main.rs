// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod config;
mod sync;
mod types;
mod util;

use sqlx::{SqlitePool, Row, Pool, Sqlite, sqlite::SqliteConnectOptions};
use sqlx::migrate::Migrator;
use tauri::{AppHandle, Manager, State};
use tauri::path::BaseDirectory;
use util::get_project_dir;
use std::path::{Path, PathBuf};
use tokio::sync::Mutex;
use crate::config::*;
use sync::update_project_info;

async fn hash_dir(pid: i32, dir_path: PathBuf, pool: &Pool<Sqlite>) {
    println!("start: {:?}", dir_path.to_str());

}

// precondition: we have a server_url
#[tauri::command]
async fn sync_changes(pid: i32, state_mutex: State<'_, Mutex<Pool<Sqlite>>>) -> Result<(), ()> {
    let pool = state_mutex.lock().await;
    println!("{}", get_project_dir(pid, &pool).await.unwrap());

    // create folder if it does not exist
    /* 
    let _ = fs::create_dir_all(&project_dir);
    println!("dir: {}", project_dir);
    hash_dir(pid, project_dir.into(), &pool).await;
    println!("hashing done");
    */

    // TODO get updated version of project
    // client should send server a filepath and the base commit
    // if there is a new version, server responds with chunk list and tracked commit
    // otherwise, response is up to date and tracked commit should be set equal to base commit
    Ok(())
}

#[tauri::command]
async fn set_local_dir(dir: String, state_mutex: State<'_, Mutex<Pool<Sqlite>>>) -> Result<(), ()> {
    let pool = state_mutex.lock().await;
    
    let _ = sqlx::query(
        "UPDATE server SET local_dir = ? WHERE active = 1"
    )
        .bind(dir)
        .execute(&*pool).await;

    Ok(())
}

fn main() {

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            sync_changes, set_local_dir, set_debug, get_server_url,
            get_server_clerk, add_server, init_settings_options, get_server_name, update_project_info
            ])
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_shell::init())
        .setup(|app| {
            tauri::async_runtime::block_on(async move {

                let db_path = app.path().app_data_dir().unwrap().join("glassypdm.db");
                let options = SqliteConnectOptions::new()
                    .filename(db_path)
                    .create_if_missing(true);
                let pool = SqlitePool::connect_with(options).await;
                match pool {
                    Ok(db) => {
                        let migrations = app.path().resolve("migrations", BaseDirectory::Resource).unwrap();
                        let m = Migrator::new(migrations).await.unwrap();
                        let res = m.run(&db).await;
                        match res {
                            Ok(()) => {},
                            Err(err) => {
                                println!("{}", err);
                            }
                        }
                        app.manage(Mutex::new(db.clone()));
                    },
                    Err(_) => {
                        // TODO what errors could we get?
                    }
                }
            });
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
