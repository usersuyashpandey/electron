import React from "react";
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/material";

const Forecast: React.FC = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <h1 style={{ color: theme.palette.text.primary }}>Welcome To Forecast</h1>
    </Container>
  );
};

export default Forecast;
