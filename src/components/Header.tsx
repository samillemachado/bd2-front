import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

export default function Header() {
  return (
    <Grid container xs={12} sx={{ flexGrow: 1, margin: 0 }}>
      <AppBar position="static">
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}
        >
          <TextSnippetIcon
            sx={{ marginRight: 2, fontSize: 40, color: "white", p: 0 }}
          />
          <Typography variant="h5" sx={{ color: "white" }}>
            CRUD DE RECADOS
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="subtitle1" sx={{ padding: 1 }}>
            Trabalho Final de Módulo - Back End I - API
          </Typography>
        </Grid>
      </AppBar>
    </Grid>
  );
}
