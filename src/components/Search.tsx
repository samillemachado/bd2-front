import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { FiltroRecado } from "../types/Types";
import { useAppDispatch } from "../store/hooks";
import { filterRecado } from "../store/modules/recados/RecadosSlice";
import { SelectChangeEvent } from "@mui/material";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const Search: React.FC = () => {
  const dispatch = useAppDispatch();

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
    //MOSTRAR COMO NA TELA?
  };
  return (
    <Grid
      item
      xs={12}
      sm={6}
      sx={{
        display: "flex",
        alignContent: "center",
        flexDirection: "row",
        alignItems: "baseline",
      }}
    >
      <FormControl sx={{ mx: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-textbox">Filtrar por:</InputLabel>
        <BootstrapInput
          id="demo-customized-textbox"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </FormControl>
      <FormControl sx={{ mx: 1 }} variant="standard">
        <InputLabel id="demo-customized-select-label">Em:</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={filtro}
          onChange={(event: SelectChangeEvent) =>
            setCampo(event.target.value as string)
          }
          input={<BootstrapInput />}
        >
          <MenuItem value={"TUDO"}>
            <em>Tudo</em>
          </MenuItem>
          <MenuItem value={10}>TÍTULO</MenuItem>
          <MenuItem value={20}>DESCRIÇÃO</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ mx: 1 }} variant="standard">
        <InputLabel id="demo-customized-select-label">Status:</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={statusRecado}
          onChange={(event: SelectChangeEvent) =>
            setStatusRecado(event.target.value as string)
          }
          input={<BootstrapInput />}
        >
          <MenuItem value={"TUDO"}>
            <em>Tudo</em>
          </MenuItem>
          <MenuItem value={"TODO"}>TODO</MenuItem>
          <MenuItem value={"DOING"}>DOING</MenuItem>
          <MenuItem value={"DONE"}>DONE</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{
          mx: 1,
        }}
        variant="standard"
      ></FormControl>
      <Button variant="outlined" size="large" onClick={() => aplicarFiltro()}>
        FILTRAR
      </Button>
    </Grid>
  );
};

export default Search;
