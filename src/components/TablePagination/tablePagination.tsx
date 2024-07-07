import { tablePaginationState } from './dataState';
import './tablePagination.scss';

const TablePagination: React.FC<tablePaginationState> = ({
  pageIndex,
  pageOptions,
  gotoPage,
  previousPage,
  nextPage,
  pageSize,
  setPageSize,
  canPreviousPage,
  canNextPage,
  showPage = [5, 10, 15, 20, 25, 30]
}) => {
  return (
    <div className="pagination d-flex justify-content-end py-3 align-items-center">
      <div className='d-flex m-1 align-items-center'>
        <div className='pagination--page'>
          <span>Page </span>
          <strong>
            {pageIndex + 1} of {pageOptions ? pageOptions.length : 0}
          </strong>
          <span> | Go to page:</span>
        </div>
        <div className='col-auto'>
          <input
            type="number"
            defaultValue={pageIndex + 1}
            className='form-control'
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            name="gotoPage"
            style={{ width: '70px' }}
          />
        </div>
      </div>
      <button onClick={() => previousPage()} className="btn btn-dark m-1" disabled={!canPreviousPage}>
        Previous
      </button>
      <button onClick={() => nextPage()} className="btn btn-dark m-1" disabled={!canNextPage}>
        Next
      </button>
      <div className="col-auto">
        <select
          className='form-select'
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {showPage.map((pageSizeOption) => (
            <option key={pageSizeOption} value={pageSizeOption}>
              Show {pageSizeOption}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default TablePagination
