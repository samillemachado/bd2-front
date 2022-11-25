import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Header() {
  return (
    <Grid container xs={12} sx={{ flexGrow: 1, margin: 0 }}>
      <AppBar position="static">
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}
        >
          <Typography variant="h5" sx={{ color: "white" }}>
            CRUD DE USUARIOS E RECADOS
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="subtitle1" sx={{ padding: 1 }}>
            Trabalho Final de Módulo - Back End II - API
          </Typography>
        </Grid>
      </AppBar>
    </Grid>
  );
}
