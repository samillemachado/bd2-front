import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

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
  const [age, setAge] = React.useState("");
  const handleChange = (event: { target: { value: string } }) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-textbox">Buscar:</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="demo-customized-select-label">Em:</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>Tudo</em>
          </MenuItem>
          <MenuItem value={10}>TÍTULO</MenuItem>
          <MenuItem value={20}>DESCRIÇÃO</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="demo-customized-select-label">Status:</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>Tudo</em>
          </MenuItem>
          <MenuItem value={10}>TODO</MenuItem>
          <MenuItem value={20}>DOING</MenuItem>
          <MenuItem value={30}>DONE</MenuItem>
        </Select>
      </FormControl>
      <SearchIcon />
    </div>
  );
};

export default Search;
