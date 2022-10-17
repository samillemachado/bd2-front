import axios from "axios";
import { Recado } from "../../../types/Types";

//API

const api = axios.create({
  baseURL: "https://hidden-hamlet-78084.herokuapp.com/sistemaRecados/recado",
});

async function getAllApi(url: string): Promise<Recado[]> {
  const response = await api.get(url);
  return response.data;
}

async function postOneApi(data: Recado): Promise<Recado> {
  const response = await api.post("/", data);
  return response.data;
}

async function deleteOneApi(id: number): Promise<void> {
  const response = await api.delete(`/${id}`);
  return response.data;
}

async function updateOneApi(id: number, data: Recado): Promise<Recado> {
  const response = await api.put(`/${id}`, data);
  return response.data;
}

async function filterApi(
  url: string,
  params: { filtro: string; campo: string; status: string }
): Promise<Recado[]> {
  const response = await api.get(url, { params });
  return response.data;
}

export { getAllApi, postOneApi, deleteOneApi, updateOneApi, filterApi };
