import React from "react";
import { createRoot } from "react-dom/client";
import AppRoute from "./AppRoute";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Could not find container element");
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>
);
