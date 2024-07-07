export interface tablePaginationState {
  pageIndex: number;
  pageOptions: Array<number>;
  gotoPage: Function;
  previousPage: Function;
  nextPage: Function;
  pageSize: number;
  setPageSize: Function;
  canPreviousPage: boolean;
  canNextPage: boolean,
  showPage: Array<number>
}