import {
  Box,
  Button,
  Container,
  Dialog,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  postRecado,
  selectById,
  updateOne,
  updateRecado,
} from "../store/modules/recados/RecadosSlice";
import { Recado } from "../types/Types";

interface ModalRecadoProps {
  isOpen: boolean;
  actionCancel: () => void;
  idEdition?: number;
}

const ModalRecado: React.FC<ModalRecadoProps> = ({
  isOpen,
  actionCancel,
  idEdition,
}) => {
  const dispatch = useAppDispatch();

  const location = useLocation();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [statusRec, setStatusRec] = useState<string>("");
  const [isArquivado] = useState<boolean>(false);

  useEffect(() => {
    setOpenModal(isOpen);
    cleanModal();
    if (idEdition) {
      if (recadoEncontrado) {
        setTitle(recadoEncontrado.title);
        setDescription(recadoEncontrado.description);
        setStatusRec(recadoEncontrado.statusRec);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const cleanModal = () => {
    setTitle("");
    setDescription("");
    setStatusRec("");
  };

  const salvarRecado = () => {
    const novoRecado: Recado = {
      title: title,
      description: description,
      statusRec,
      isArquivado,
      userId: location.state.id,
    };
    dispatch(postRecado(novoRecado));
    closeModal();
  };

  const closeModal = () => {
    actionCancel();
    setOpenModal(false);
  };

  const editarRecado = () => {
    dispatch(
      updateRecado({
        id: idEdition!,
        title: title,
        description: description,
        statusRec: statusRec,
        isArquivado: isArquivado,
        userId: location.state.id,
      })
    );
    dispatch(
      updateOne({
        id: idEdition!,
        changes: {
          title: title,
          description: description,
          statusRec: statusRec,
          isArquivado: isArquivado,
          userId: location.state.id,
        },
      })
    );
    closeModal();
  };

  const recadoEncontrado = useAppSelector((item) =>
    selectById(item, idEdition!)
  );

  return (
    <Dialog open={openModal}>
      <DialogTitle>{idEdition ? "EditarRecado" : "Novo Recado"}</DialogTitle>
      <Container>
        <Typography variant="subtitle1">Titulo</Typography>
        <TextField
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Typography variant="subtitle1">Descricao</Typography>
        <TextField
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Grid item xs={12} sx={{ mt: 2, mb: 3 }}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={statusRec}
                label="Status *"
                onChange={(event: SelectChangeEvent) =>
                  setStatusRec(event.target.value as string)
                }
              >
                <MenuItem value={"TODO"}>TO DO</MenuItem>
                <MenuItem value={"DOING"}>DOING</MenuItem>
                <MenuItem value={"DONE"}>DONE</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Container sx={{ mt: 2, mb: 3 }}>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={() => (idEdition ? editarRecado() : salvarRecado())}
            >
              Salvar
            </Button>

            <Button variant="outlined" onClick={closeModal}>
              Cancelar
            </Button>
          </Stack>
        </Container>
      </Container>
    </Dialog>
  );
};

export default ModalRecado;
