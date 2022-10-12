import React from "react";
import Badge from "@mui/material/Badge";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

const Arquivo: React.FC = () => {
  return (
    <Badge badgeContent={4} color="primary">
      <SaveAltIcon color="action" fontSize="large" />
    </Badge>
  );
};

export default Arquivo;
