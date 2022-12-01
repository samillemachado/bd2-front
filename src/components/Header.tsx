import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import { useAppSelector } from "../store/hooks";
import { selectAllUsers } from "../store/modules/users/UsersSlice";
import { User } from "../types/Types";

export default function Header() {
  const navigate = useNavigate();

  const emailUserLogando = localStorage.getItem("userLogando.email");
  const usersRdx = useAppSelector(selectAllUsers);

  const userLogado: User | undefined = usersRdx.find(
    (user) => user.email === emailUserLogando
  );

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Grid container xs={12} sx={{ flexGrow: 1, margin: 0 }}>
      <AppBar position="static">
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "space-around", paddingY: 2 }}
        >
          <Typography variant="h5" sx={{ color: "white" }}>
            Olá {userLogado?.name}!
          </Typography>
          <Link
            sx={{ color: "white" }}
            component="button"
            variant="body2"
            onClick={handleLogout}
          >
            Logout
          </Link>
        </Grid>
      </AppBar>
    </Grid>
  );
}
