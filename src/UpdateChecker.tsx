import React, { useEffect, useState } from "react";
import { ipcRenderer } from "electron";

const UpdateChecker = () => {
  const [updateStatus, setUpdateStatus] = useState("");

  useEffect(() => {
    ipcRenderer.on("update-available", () => {
      setUpdateStatus("Update available. Downloading...");
    });

    ipcRenderer.on("update-not-available", () => {
      setUpdateStatus("No updates available.");
    });

    ipcRenderer.on("update-downloaded", () => {
      setUpdateStatus("Update downloaded. Restart to apply.");
    });

    return () => {
      ipcRenderer.removeAllListeners("update-available");
      ipcRenderer.removeAllListeners("update-not-available");
      ipcRenderer.removeAllListeners("update-downloaded");
    };
  }, []);

  return (
    <div>
      <p>{updateStatus}</p>
    </div>
  );
};

export default UpdateChecker;
