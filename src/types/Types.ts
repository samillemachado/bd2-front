export interface Recado {
  id?: number;
  titulo: string;
  descricao: string;
  statusRec: string;
  isArquivado?: boolean;
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
