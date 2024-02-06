import React, { useState } from 'react'
import { Box, ThemeProvider } from '@mui/system'
import { Outlet } from 'react-router-dom'
import LeftsidePanel from './LeftsidePanel'
import lightTheme from '../../style/LightTheme';
import darkTheme from '../../style/DarkTheme';

const Layout: React.FC = () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')

  const handleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }
  const theme = themeMode === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          marginTop: -1,
          marginRight: -1,
          padding: 0,
          backgroundColor: theme.palette.background.screen,
        }}
      >
        <LeftsidePanel handleTheme={handleTheme} />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
