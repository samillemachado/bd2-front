import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <Grid container xs={12} sx={{ flexGrow: 1, margin: 0 }}>
      <AppBar position="static">
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", paddingY: 2 }}
        >
          <Typography variant="h5" sx={{ color: "white" }}>
            Olá {location.state.name}!
          </Typography>
        </Grid>
      </AppBar>
    </Grid>
  );
}
