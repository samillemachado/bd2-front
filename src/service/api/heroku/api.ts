import axios from "axios";
import { Recado } from "../../../types/Types";

//API

const api = axios.create({
  baseURL: "http://localhost:8080",
});

async function getAllApi<T>(url: string): Promise<T[]> {
  const response = await api.get(url);
  return response.data;
}

async function getByIdApi<T>(url: string, id: number): Promise<T> {
  const response = await api.get(`${url}/${id}`);
  return response.data;
}

async function postOneApi<T>(url: string, data: T): Promise<T> {
  const response = await api.post(url, data);
  return response.data;
}

async function deleteOneApi(url: string, id: number): Promise<void> {
  const response = await api.delete(`${url}/${id}`);
  return response.data;
}

async function updateOneApi<T>(url: string, id: number, data: T): Promise<T> {
  const response = await api.put(`${url}/${id}`, data);
  return response.data;
}

async function filterApi(
  url: string,
  params: { filtro: string; campo: string; statusRecado: string }
): Promise<Recado[]> {
  const response = await api.get(url, { params });
  return response.data;
}

export {
  getAllApi,
  getByIdApi,
  postOneApi,
  deleteOneApi,
  updateOneApi,
  filterApi,
};
