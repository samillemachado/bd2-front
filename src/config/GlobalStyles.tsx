import React from "react";
import GlobalStyles from "@mui/material/GlobalStyles";

const StylesGlobal: React.FC = () => {
  return (
    <GlobalStyles
      styles={{
        body: { margin: 0 },
        a: { textDecoration: "none", color: "inherit" },
      }}
    />
  );
};

export default StylesGlobal;
