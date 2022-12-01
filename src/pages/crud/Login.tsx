import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import defaultTheme from "../../config/theme/Default";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { User, UserLogando } from "../../types/Types";
import { useNavigate } from "react-router-dom";
import {
  getAllUsers,
  selectAllUsers,
} from "../../store/modules/users/UsersSlice";

export const LoginStyled = styled(Grid)({
  backgroundColor: defaultTheme.palette.primary.main,
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const PaperStyled = styled(Paper)({
  backgroundColor: "white",
  minWidth: "300px",
  maxWidth: "500px",
  minHeight: "300px",
  maxHeight: "500px",
  border: "1px solid white",
  display: "flex",
  justifyContent: "space-around",
  alignContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: 15,
  borderRadius: "15px",
});

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const usersRedux = useAppSelector(selectAllUsers);

  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const navigate = useNavigate();

  const handleSignIn = () => {
    const userLogando: UserLogando = {
      email,
      pass,
    };

    const userExistente = usersRedux.find(
      (user: User) => user.email === userLogando.email
    );

    if (userExistente) {
      localStorage.setItem("userLogando.email", `${userLogando.email}`);
      navigate("/home");
    } else {
      alert("Usuário ou senha inválida!");
    }
  };

  useEffect(() => {
    dispatch(getAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <LoginStyled container>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, color: "white", marginBottom: 5 }}
        >
          CRUD
        </Typography>
        <PaperStyled elevation={3}>
          <Typography variant="h6">FAÇA SEU LOGIN</Typography>
          <TextField
            fullWidth
            id="standard-basic"
            label="email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="password"
            variant="standard"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <Button fullWidth variant="contained" onClick={handleSignIn}>
            ENTRAR
          </Button>
          <Link href="/signup" variant="body2">
            CRIAR CONTA
          </Link>
        </PaperStyled>
      </LoginStyled>
    </>
  );
};

export default Login;
