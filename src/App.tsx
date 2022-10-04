import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import ThemeDefault from "./config/theme/Default";

import AppRoutes from "./routes/AppRoutes";
import StylesGlobal from "./config/GlobalStyles";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={ThemeDefault}>
      <StylesGlobal />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
