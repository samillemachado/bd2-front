import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import IconButton from "@mui/material/IconButton";
import { useAppDispatch } from "../store/hooks";
import { upBadgeActive } from "../store/modules/componentes/BadgeSlice";

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
    <>
      <IconButton onClick={() => mostrarArquivados()}>
        <Badge badgeContent={numEmblema} color="primary">
          <SaveAltIcon
            color={isActive === true ? "primary" : "action"}
            fontSize="large"
          />
        </Badge>
      </IconButton>
      <Typography>
        {isActive === true ? "ARQUIVADOS" : "NÃO ARQUIVADOS"}
      </Typography>
    </>
  );
};

export default BadgeButton;
