import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
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

  const [filtro, setFiltro] = useState<string>("");
  const [campo, setCampo] = useState<string>("");
  const [statusRecado, setStatusRecado] = useState<string>("");

  const handleChangeCampos = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCampo(event.target.value);
  };

  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatusRecado(event.target.value);
  };

  const aplicarFiltro = () => {
    const novoFiltro: FiltroRecado = {
      filtro,
      campo,
      statusRecado,
    };
    if (novoFiltro.campo === "TUDO") {
      novoFiltro.campo = "";
    }
    if (novoFiltro.statusRecado === "TUDO") {
      novoFiltro.statusRecado = "";
    }
    dispatch(filterRecado(novoFiltro));
    dispatch(create(novoFiltro));
    limpaFiltro();
  };

  const limpaFiltro = () => {
    setFiltro("");
    setCampo("");
    setStatusRecado("");
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        m1: 1,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={12}
        component="form"
        sx={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          "& .MuiTextField-root": { m: 1, width: "20ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignContent: "center",
            alignItems: "end",
            justifyContent: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Filtrar por:"
            variant="standard"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          my: 1,
          display: "flex",
          alignContent: "center",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        <Button variant="outlined" size="large" onClick={() => aplicarFiltro()}>
          FILTRAR
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filter;
