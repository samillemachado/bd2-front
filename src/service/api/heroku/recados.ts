import axios from "axios";

const api = axios.create({
  baseURL: "https://hidden-hamlet-78084.herokuapp.com/sistemaRecados/recado",
});

async function get(url: string) {
  const response = await api.get(url);

  return response.data;
}

export { get };
