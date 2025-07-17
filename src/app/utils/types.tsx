export type Size = 'small' | 'medium' | 'big';

export type Services =
  | 'Electricidad'
  | 'Plomeria'
  | 'Limpieza'
  | 'General'
  | 'Jardineria';

export enum CosasEnum {
  COSAS = 1,
  OTRAS_COSAS,
  SIGUIENTE,
}

export type ServiceType = {
  type: Services;
  color: string;
};

export type TaskLetterType = {
  taskName: string;
  taskLocation: string;
  taskType: Services;
};
