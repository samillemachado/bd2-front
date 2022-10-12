import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ModalRecado from "./Modal";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  deleteRecado,
  removeOne,
  getAllRecados,
  selectAll,
} from "../store/modules/recados/RecadosSlice";
import Recado from "../types/Recado";
import Arquivo from "./Arquivo";
import Search from "./Search";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Tabela() {
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [idRecado, setIdRecado] = useState<number>();

  useEffect(() => {
    dispatch(getAllRecados());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const arquivarRecado = (id: number) => {};

  const listaRecadosRdx = useAppSelector(selectAll);

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
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Search />
          <Arquivo />
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
                {listaRecadosRdx.map((row: any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>
                      <Typography variant="h6">
                        <b>{row.id}</b>
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography>status</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.titulo}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.descricao}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <IconButton onClick={() => deletarRecado(row)}>
                          <DeleteForeverIcon sx={{ fontSize: 35 }} />
                        </IconButton>
                        <IconButton onClick={() => editarRecado(row.id)}>
                          <EditIcon sx={{ fontSize: 35 }} />
                        </IconButton>
                        <IconButton onClick={() => arquivarRecado(row.id)}>
                          <SaveAltIcon sx={{ fontSize: 35 }} />
                        </IconButton>
                      </Stack>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
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
