"use strict";
const e = require("electron"),
  o = require("path");
require("electron-squirrel-startup") && e.app.quit();
const i = () => {
  const n = new e.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: o.join(__dirname, "preload.js"),
      contextIsolation: !1,
      nodeIntegration: !0,
      contentSecurityPolicy: "default-src 'self'",
    },
  });
  n.loadFile(o.join(__dirname, "../renderer/main_window/index.html")),
    n.webContents.openDevTools();
};
e.app.on("ready", i);
e.app.on("window-all-closed", () => {
  process.platform !== "darwin" && e.app.quit();
});
e.app.on("activate", () => {
  e.BrowserWindow.getAllWindows().length === 0 && i();
});
