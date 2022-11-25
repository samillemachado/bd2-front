import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../..";
import {
  deleteOneApi,
  getAllApi,
  postOneApi,
  updateOneApi,
} from "../../../service/api/heroku/api";
import { User } from "../../../types/Types";

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const response: User[] = await getAllApi("/users")
    .then((users) => users)
    .catch((erro) => erro);
  return response;
});

export const postUser = createAsyncThunk(
  "users/postUser",
  async (dado: User) => {
    const response = await postOneApi(dado)
      .then((user) => user)
      .catch((erro) => erro);
    return response;
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (dado: User) => {
    const { id } = dado;
    const response = await updateOneApi(id!, dado)
      .then((user) => user)
      .catch((erro) => erro);
    return response;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (dado: User) => {
    const { id } = dado;
    const response = await deleteOneApi(id!)
      .then(() => "Usuário deletado com sucesso")
      .catch(() => "Erro ao deletar o usuário");
    return response;
  }
);

const adapter = createEntityAdapter<User>({
  selectId: (item) => item.id!,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state: RootState) => state.users
);

const UsersSlice = createSlice({
  name: "users",
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
  },
});

export const { addOne, addMany, updateOne } = UsersSlice.actions;
export default UsersSlice.reducer;
