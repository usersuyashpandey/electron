const { app, BrowserWindow, screen, autoUpdater } = require("electron");
import path from "path";
import axios from "axios";

const currentVersion = app.getVersion();
const feedURL = `https://github.com/usersuyashpandey/electron/releases/download/${currentVersion}/update.xml`;
autoUpdater.setFeedURL(feedURL);

autoUpdater.setFeedURL(feedURL);

// Disable auto downloading of updates
autoUpdater.autoDownload = false;
console.log("suyash", app.getVersion());

const checkForUpdatesAndNotify = () => {
  console.log("checkForUpdatesAndNotify");
  autoUpdater.checkForUpdates();
};

// Event listeners for autoUpdater
autoUpdater.on("update-available", () => {
  console.log("Update available. Downloading...");
  // Optionally, notify the user about the update here
});

autoUpdater.on("update-downloaded", () => {
  console.log("Update downloaded. Installing...");
  autoUpdater.quitAndInstall();
});

autoUpdater.on("error", (error: any) => {
  console.error(`Error occurred while checking for updates: ${error}`);
});

// Fetch the latest release from GitHub Releases API
const getLatestRelease = async () => {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/usersuyashpandey/electron/releases/latest",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${process.env.GH_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching latest release:", error.message);
    return null;
  }
};

const setAutoUpdaterFeedURL = async () => {
  const latestRelease = await getLatestRelease();
  if (latestRelease) {
    const feedURL = latestRelease.tarball_url;
    autoUpdater.setFeedURL({
      url: feedURL,
      provider: "generic",
    });
  }
};

const createWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const windowWidth = Math.round(width * 0.75);
  const windowHeight = Math.round(height * 0.75);

  const mainWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
    );
  }
};

app.whenReady().then(async () => {
  createWindow();

  try {
    // Set the autoUpdater feed URL initially
    await setAutoUpdaterFeedURL();

    // Check for updates every hour (you can adjust this interval)
    setInterval(async () => {
      await setAutoUpdaterFeedURL();
      checkForUpdatesAndNotify();
    }, 3600000);

    // Notify after setting up the autoUpdater feed URL
    checkForUpdatesAndNotify();

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  } catch (error) {
    console.error("Error during app initialization:", error.message);
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Optionally, handle the 'before-quit' event to check for updates before quitting
app.on("before-quit", () => {
  autoUpdater.checkForUpdates();
});
