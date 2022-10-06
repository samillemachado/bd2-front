import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00bfff",
    },
    secondary: {
      main: "#202020",
    },
  },
});

export default defaultTheme;
