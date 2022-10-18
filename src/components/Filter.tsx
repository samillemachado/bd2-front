import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { FiltroRecado } from "../types/Types";
import { useAppDispatch } from "../store/hooks";
import { filterRecado } from "../store/modules/recados/RecadosSlice";
import TextField from "@mui/material/TextField";
import { create } from "../store/modules/componentes/FilterSlice";

const valuesCampos = [
  {
    value: "TÍTULO",
    label: "TÍTULO",
  },
  {
    value: "DESCRIÇÃO",
    label: "DESCRIÇÃO",
  },
  {
    value: "TUDO",
    label: "TUDO",
  },
];

const valuesStatus = [
  {
    value: "TODO",
    label: "TODO",
  },
  {
    value: "DOING",
    label: "DOING",
  },
  {
    value: "DONE",
    label: "DONE",
  },
  {
    value: "TUDO",
    label: "TUDO",
  },
];

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleChangeCampos = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCampo(event.target.value);
  };

  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatusRecado(event.target.value);
  };

  const [filtro, setFiltro] = useState<string>("");
  const [campo, setCampo] = useState<string>("");
  const [statusRecado, setStatusRecado] = useState<string>("");

  const aplicarFiltro = () => {
    const novoFiltro: FiltroRecado = {
      filtro,
      campo,
      statusRecado,
    };
    dispatch(filterRecado(novoFiltro));
    console.log("aqui");
    dispatch(create(novoFiltro));
  };
  return (
    <Grid
      item
      xs={12}
      sm={8}
      sx={{
        display: "flex",
        alignContent: "center",
        flexDirection: "row",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          alignContent: "center",
          flexDirection: "row",
          alignItems: "end",
          justifyContent: "center",
          "& .MuiTextField-root": { m: 1, width: "20ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Filtrar por:"
          variant="standard"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Campo"
            value={campo}
            onChange={handleChangeCampos}
            variant="standard"
          >
            {valuesCampos.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Status"
            value={statusRecado}
            onChange={handleChangeStatus}
            variant="standard"
          >
            {valuesStatus.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
      <Button variant="outlined" size="large" onClick={() => aplicarFiltro()}>
        FILTRAR
      </Button>
    </Grid>
  );
};

export default Filter;
