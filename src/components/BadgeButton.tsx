import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import IconButton from "@mui/material/IconButton";
import { useAppDispatch } from "../store/hooks";
import { upBadgeActive } from "../store/modules/componentes/BadgeSlice";
import { Grid } from "@mui/material";

interface BadgeButtonProps {
  isClicked: boolean;
  numEmblema: number;
}

const BadgeButton: React.FC<BadgeButtonProps> = ({ isClicked, numEmblema }) => {
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState<boolean>(false);

  const mostrarArquivados = () => {
    setIsActive(!isActive);
    dispatch(upBadgeActive());
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        m: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton onClick={() => mostrarArquivados()}>
        <Badge badgeContent={numEmblema} color="primary">
          <SaveAltIcon
            color={isActive === true ? "primary" : "action"}
            fontSize="large"
          />
        </Badge>
        <Typography
          variant="body1"
          sx={{ mx: 1 }}
          color={isActive === true ? "primary" : "action"}
        >
          {isActive === true ? "ARQUIVADOS" : "NÃO ARQUIVADOS"}
        </Typography>
      </IconButton>
    </Grid>
  );
};

export default BadgeButton;
