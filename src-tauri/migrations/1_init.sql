CREATE TABLE server (url TEXT NOT NULL PRIMARY KEY, name TEXT, clerk_publickey TEXT, local_dir TEXT, active INTEGER, debug_url TEXT, debug_active INTEGER);
CREATE TABLE project (pid INTEGER NOT NULL PRIMARY KEY, url TEXT NOT NULL, base_commit INTEGER, tracked_commit INTEGER);
CREATE TABLE file (
    filepath TEXT NOT NULL,
    pid INTEGER NOT NULL,
    num_chunks INTEGER,
    size INTEGER,
    tracked_commit INTEGER DEFAULT -1,
    change_type INTEGER DEFAULT 1,
    in_fs INTEGER DEFAULT 1,
    PRIMARY KEY (filepath, pid));
CREATE TABLE chunk (
    filepath TEXT NOT NULL,
    chunk_num INTEGER NOT NULL,
    tracked_commit INTEGER DEFAULT -1,
    curr_hash TEXT DEFAULT "",
    base_hash TEXT DEFAULT "",
    tracked_hash TEXT DEFAULT "",
    PRIMARY KEY (filepath, chunk_num));