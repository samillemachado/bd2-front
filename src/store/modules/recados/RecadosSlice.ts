import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import {
  deleteOneApi,
  filterApi,
  getAllApi,
  postOneApi,
  updateOneApi,
} from "../../../service/api/heroku/api";
import { Recado, FiltroRecado } from "../../../types/Types";
import { RootState } from "../..";

export const getAllRecados = createAsyncThunk(
  "recados/getAllRecados",
  async (userId?: number) => {
    let url = "/recados";
    if (userId) {
      url = url.concat(`?userId=${userId}`);
    }

    const response: Recado[] = await getAllApi(url)
      .then((recados) => recados)
      .catch((erro) => erro);
    return response;
  }
);

export const postRecado = createAsyncThunk(
  "recados/postRecado",
  async (dado: Recado) => {
    const response = await postOneApi("/recados", dado)
      .then((recado) => recado)
      .catch((erro) => erro);
    return response;
  }
);

export const updateRecado = createAsyncThunk(
  "recados/updateRecado",
  async (dado: Recado) => {
    const { id } = dado;
    console.log("entrei");
    const response = await updateOneApi("/recados", id!, dado)
      .then((recado) => recado)
      .catch((erro) => erro);
    return response;
  }
);

export const deleteRecado = createAsyncThunk(
  "recados/deleteRecado",
  async (dado: Recado) => {
    const { id } = dado;
    const response = await deleteOneApi("/recados", id!)
      .then(() => "Recado deletado com sucesso")
      .catch(() => "Erro ao deletar o recado");
    return response;
  }
);

export const filterRecado = createAsyncThunk(
  "recados/filtrarRecado",
  async (dado: FiltroRecado) => {
    const response: Recado[] = await filterApi("/recados/filter", {
      filtro: dado.filtro,
      campo: dado.campo,
      statusRecado: dado.statusRecado,
    })
      .then((recados) => recados)
      .catch((erro) => erro);
    return response;
  }
);

const adapter = createEntityAdapter<Recado>({
  selectId: (item) => item.id!,
});

export const { selectAll: selectAllRecados, selectById } = adapter.getSelectors(
  (state: RootState) => state.recados
);

const RecadosSlice = createSlice({
  name: "recados",
  initialState: adapter.getInitialState({
    loading: false,
  }),
  reducers: {
    setAll: adapter.setAll,
    addOne: adapter.addOne,
    updateOne: adapter.updateOne,
    removeOne: adapter.removeOne,
  },
  extraReducers(builder) {
    builder.addCase(getAllRecados.fulfilled, (state, action) => {
      state.loading = false;
      adapter.setAll(state, action.payload);
    });
    builder.addCase(postRecado.fulfilled, (state, action) => {
      state.loading = false;
      adapter.addOne(state, action.payload);
    });
    builder.addCase(updateRecado.fulfilled, (state, action) => {
      state.loading = false;
      adapter.updateOne(state, action.payload);
    });
    builder.addCase(deleteRecado.fulfilled, (state, action) => {
      state.loading = false;
      adapter.removeOne(state, action.payload);
    });
    builder.addCase(filterRecado.fulfilled, (state, action) => {
      state.loading = false;
      adapter.setAll(state, action.payload);
    });
  },
});

export const { addOne, updateOne, removeOne } = RecadosSlice.actions;
export default RecadosSlice.reducer;
