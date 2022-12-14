import { Button, TextField, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { postUser } from "../../store/modules/users/UsersSlice";
import { User } from "../../types/Types";
import { PaperStyled, LoginStyled } from "./Login";

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const handleSignUp = () => {
    saveUser();
  };

  const saveUser = () => {
    const newUser: User = {
      name,
      email,
      pass,
      recados: [],
    };
    dispatch(postUser(newUser));
    alert("Conta criada com sucesso!");
    navigate("/");
  };

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
          <Typography variant="h6">CRIE UMA CONTA</Typography>
          <TextField
            fullWidth
            id="standard-basic"
            label="name"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Button fullWidth variant="contained" onClick={handleSignUp}>
            CRIAR CONTA
          </Button>
          <Link href="/" variant="body2">
            VOLTAR PARA LOGIN
          </Link>
        </PaperStyled>
      </LoginStyled>
    </>
  );
};

export default SignUp;
