export interface Recado {
  id?: number;
  title: string;
  description: string;
  statusRec: string;
  isArquivado?: boolean;
  userId?: number;
}

export interface User {
  id?: number;
  name: string;
  email: string;
  pass: string;
  recados: Recado[];
}

export interface UserLogando {
  email: string;
  pass: string;
}

export interface FiltroRecado {
  filtro: string;
  campo: string;
  statusRecado: string;
}

export interface BadgeButton {
  isClicked: boolean;
  emblema: number;
}
