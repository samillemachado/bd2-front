import React, { useState, useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { StyledTableCell, StyledTableRow } from "./TabelaStyle";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ModalRecado from "../Modal";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  deleteRecado,
  removeOne,
  getAllRecados,
  selectAllRecados,
  updateOne,
  updateRecado,
} from "../../store/modules/recados/RecadosSlice";
import { Recado, User, UserLogando } from "../../types/Types";
import BadgeButton from "../BadgeButton";
import Filter from "../Filter";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { upBadgeNum } from "../../store/modules/componentes/BadgeSlice";
import {
  getAllUsers,
  selectAllUsers,
  selectUserById,
} from "../../store/modules/users/UsersSlice";

export default function Tabela() {
  const dispatch = useAppDispatch();
  // const filtro = useAppSelector((state) => state.filter);

  const usersRdx: User[] = useAppSelector(selectAllUsers);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [idRecado, setIdRecado] = useState<number>();
  const [isArquivado, setIsArquivado] = useState<boolean>(false);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>();

  //traz todos os recados do userId
  const listaRecadosUsersRdx = useAppSelector(selectAllRecados);

  const emailUserLogando = localStorage.getItem("userLogando.email");

  const userLogado: User | undefined = usersRdx.find(
    (user) => user.email === emailUserLogando
  );

  //ENTREI NA PÁGINA
  useEffect(() => {
    if (userLogado) {
      dispatch(getAllRecados(userLogado.id!));
      setUserId(userLogado.id!);
    }
    // if (filtro) {
    //   dispatch(filterRecado(filtro));
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isButtonClicked, userLogado]);

  useEffect(() => {
    dispatch(getAllUsers());
    console.log("l=" + listaRecadosUsersRdx.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listaRecadosUsersRdx.length]);

  useEffect(() => {
    dispatch(getAllUsers());
    console.log("u=" + userLogado?.recados.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLogado?.recados.length]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIdRecado(undefined);
  };

  const deletarRecado = (recado: Recado) => {
    dispatch(deleteRecado(recado));
    dispatch(removeOne(recado.id!));
  };

  const editarRecado = (id: number) => {
    setIdRecado(id);
    openModal();
  };

  const arquivarRecado = (recado: Recado) => {
    setIsArquivado(!isArquivado);
    dispatch(
      updateOne({
        id: recado.id!,
        changes: {
          isArquivado: !recado.isArquivado,
        },
      })
    );
    dispatch(
      updateRecado({
        id: recado.id!,
        title: recado.title,
        description: recado.description,
        statusRec: recado.statusRec,
        isArquivado: !recado.isArquivado,
        userId: userLogado!.id,
      })
    );
    dispatch(upBadgeNum(sizeListaArquivados));
  };

  const buttonClicked = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const sizeListaArquivados = listaRecadosUsersRdx.filter(
    (recado) => recado.isArquivado === true
  ).length;

  return (
    <>
      <Grid container xs={12} sx={{ padding: 2 }}>
        <Fab
          color="primary"
          aria-label="add"
          size="large"
          onClick={openModal}
          sx={{ position: "absolute", bottom: 24, right: 24 }}
        >
          <AddIcon />
        </Fab>
        <Grid
          item
          xs={12}
          sx={{
            my: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Filter />
          <div onClick={() => buttonClicked()}>
            <BadgeButton
              isClicked={isButtonClicked}
              numEmblema={sizeListaArquivados}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>#ID</StyledTableCell>
                  <StyledTableCell align="center">STATUS</StyledTableCell>
                  <StyledTableCell align="center">TÍTULO</StyledTableCell>
                  <StyledTableCell align="center">DESCRIÇÃO</StyledTableCell>
                  <StyledTableCell align="center">AÇÕES</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listaRecadosUsersRdx
                  .filter(
                    (recado: Recado) => recado.isArquivado === isButtonClicked
                  )
                  .map((recado) => {
                    return (
                      <StyledTableRow key={recado.id}>
                        <StyledTableCell>
                          <Typography variant="h6">
                            <b>{recado.id!}</b>
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {recado.statusRec}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {recado.title}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {recado.description}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Stack
                            direction="row"
                            spacing={2}
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <IconButton onClick={() => deletarRecado(recado)}>
                              <DeleteForeverIcon sx={{ fontSize: 35 }} />
                            </IconButton>
                            <IconButton
                              onClick={() => editarRecado(recado.id!)}
                            >
                              <EditIcon sx={{ fontSize: 35 }} />
                            </IconButton>
                            <IconButton onClick={() => arquivarRecado(recado)}>
                              <SaveAltIcon sx={{ fontSize: 35 }} />
                            </IconButton>
                          </Stack>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <ModalRecado
        isOpen={isModalOpen}
        actionCancel={closeModal}
        idEdition={idRecado}
        userId={userId!}
      ></ModalRecado>
    </>
  );
}
