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
  selectAll,
  updateOne,
  updateRecado,
  filterRecado,
} from "../../store/modules/recados/RecadosSlice";
import { Recado } from "../../types/Types";
import BadgeButton from "../BadgeButton";
import Filter from "../Filter";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { upBadgeNum } from "../../store/modules/componentes/BadgeSlice";

export default function Tabela() {
  const dispatch = useAppDispatch();
  const filtro = useAppSelector((state) => state.filter);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [idRecado, setIdRecado] = useState<number>();
  const [isArquivado, setIsArquivado] = useState<boolean>(false);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getAllRecados());
    if (filtro) {
      dispatch(filterRecado(filtro));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isButtonClicked, filtro]);

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
        titulo: recado.titulo,
        descricao: recado.descricao,
        statusRec: recado.statusRec,
        isArquivado: !recado.isArquivado,
      })
    );
    dispatch(upBadgeNum(sizeLista));
  };

  const buttonClicked = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const listaRecadosRdx = useAppSelector(selectAll);

  const sizeLista = listaRecadosRdx.filter(
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
            <BadgeButton isClicked={isButtonClicked} numEmblema={sizeLista} />
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
                {listaRecadosRdx
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
                          {recado.titulo}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {recado.descricao}
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
      ></ModalRecado>
    </>
  );
}
