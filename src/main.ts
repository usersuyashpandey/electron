const { app, BrowserWindow, screen } = require("electron");
import path from "path";
const { updateElectronApp, UpdateSourceType } = require("update-electron-app");

updateElectronApp({
  updateSource: {
    type: UpdateSourceType.ElectronPublicUpdateService,
    repo: "usersuyashpandey/electron",
  },
  updateInterval: "5 minutes",
  logger: require("electron-log"),
});

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

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
