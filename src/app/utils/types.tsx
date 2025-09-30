export type Size = 'small' | 'medium' | 'big';

export type Services =
  | 'Electricidad'
  | 'Plomeria'
  | 'Limpieza'
  | 'General'
  | 'Jardineria';

export type State = 'Abierto' | 'Cerrado';

export enum CosasEnum {
  COSAS = 1,
  OTRAS_COSAS,
  SIGUIENTE,
}

export type ServiceType = {
  type: Services;
};

export type TaskLetterType = {
  taskName: string;
  taskLocation: string;
  taskType: Services;
  taskState: State;
};
