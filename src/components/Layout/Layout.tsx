import React, { useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import LeftsidePanel from "./LeftsidePanel";
import getTheme from "../../style/Theme";

const Layout = () => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");
  const theme = getTheme(themeMode);
  const handleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          marginTop: -1,
          marginRight: -1,
          padding: 0,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <LeftsidePanel handleTheme={handleTheme} />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
