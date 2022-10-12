import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, margin: 0 }}>
      <AppBar position="static">
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}
          >
            <TextSnippetIcon sx={{ fontSize: 40, color: "white" }} />
            <Typography variant="h4" sx={{ color: "white", marginLeft: 2 }}>
              {" "}
              <b> API - CRUD</b>
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="subtitle1" sx={{ padding: 1 }}>
              Trabalho final módulo IV
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
