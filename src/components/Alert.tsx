import React from "react";
import Alert from "@mui/material/Alert";

type AlertColor = "success" | "error" | "info" | "warning";

interface AlertMessageProps {
  color: AlertColor;
  text: string;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ color, text }) => {
  return <Alert severity={color}>{text}</Alert>;
};

export default AlertMessage;
