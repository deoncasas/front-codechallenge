import { Column } from 'react-table';

export interface DataState {
  id: number;
  userId?: number;
  title?: string;
  body?: string;
}

export interface DataTableState {
  columns: Column[];
  data: DataState[];
}