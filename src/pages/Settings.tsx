import { clearLocalData, cn } from "@/lib/utils";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { open } from "@tauri-apps/api/dialog";
import { Separator } from "../components/ui/separator";
import { SettingsLoaderProps } from "../lib/SettingsLoader";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useToast } from "../components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface SettingsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Settings({ className }: SettingsProps) {
  const defaults: SettingsLoaderProps = useLoaderData() as SettingsLoaderProps;
  const [serverURL, setServerURL] = useState(defaults.serverURL);
  const [projDir, setProjDir] = useState(defaults.projectDir);
  const { toast } = useToast();
  const [deleteDisabled, setDeleteDisabled] = useState(false);
  const [alertText, setAlertText] = useState("Delete Local Data");
  const navigate = useNavigate();

  async function findProjectDir() {
    const selected = await open({
      multiple: false,
      directory: true,
    });

    if (selected !== null) {
      setProjDir(selected as string);
      await invoke("update_project_dir", { dir: selected as string });
      toast({
        title: "Project Directory saved.",
      });
    }
  }

  async function saveChanges() {
    let newUrl: string = serverURL;
    newUrl.trim();
    newUrl.toLowerCase();
    if (newUrl.endsWith("/")) {
      newUrl = serverURL.substring(0, serverURL.length - 1);
    }

    if (newUrl.includes(" ") || !newUrl.startsWith("http")) {
      toast({
        title: "server URL invalid, try again.",
      });
      return;
    }

    setServerURL(newUrl);
    await invoke("update_server_url", { newUrl: newUrl });

    toast({
      title: "Server URL saved.",
    });
  }

  function resetAlert() {
    setDeleteDisabled(false);
    setAlertText("Delete Local Data");
  }

  async function deleteLocalData() {
    setDeleteDisabled(true);

    await clearLocalData();

    setAlertText("Done");
    navigate(0);
  }

  return (
    <div className={cn("", className)}>
      <h1 className="text-2xl">Client Settings</h1>
      <h2 className="text-xl">Set Project Directory</h2>
      <p>Selected Project Directory: {projDir}</p>
      <Button onClick={findProjectDir}>Set Project Directory</Button>
      <Separator className="my-5" />
      <h2 className="text-xl">Set Server URL</h2>
      <Input
        className="w-3/4"
        id="server_url"
        onChange={(e: any) => setServerURL(e.target.value)}
        value={serverURL}
      />
      <Separator className="my-5" />
      <div className="space-x-4">
        <Button onClick={saveChanges}>Save Changes</Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" onClick={resetAlert}>
              Delete Local Data
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Local Data</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. You will need to reconfigure your
                client settings.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Button
                variant="destructive"
                disabled={deleteDisabled}
                onClick={deleteLocalData}
              >
                {alertText}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
