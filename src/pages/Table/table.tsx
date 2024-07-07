import React, { useEffect, useState } from 'react';
import './table.scss';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import Search from '../../components/Search/search';
import ToggleTheme from '../../components/ToggleTheme/toggleTheme';
import TablePagination from '../../components/TablePagination/tablePagination';
import { DataTableState } from './dataState';


const DataTable: React.FC<DataTableState> = ({ columns, data }) => {

  const [isThemeMode, setToggleTheme] = useState(false);
  const showPage = [5, 10, 15, 20, 25, 30]

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setPageSize,
    gotoPage,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 }
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const toggleDarkMode = () => {
    setToggleTheme(!isThemeMode);
    const theme = isThemeMode ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setToggleTheme(storedTheme === 'dark');
    }
  }, []);

  const arrowUp = () => {
    const color = isThemeMode ? 'white' : 'black'
    return <BsArrowUp color={color} size={18} />
  }

  const arrowDown = () => {
    const color = isThemeMode ? 'white' : 'black'
    return <BsArrowDown color={color} size={18} />
  }

  return (
    <>
      <div className='row mb-1'>
        {
          pageSize === 5 && (
            <div className='col-6 col-md-6 col-lg-6'>
              <Search val={globalFilter} onChange={setGlobalFilter} />
            </div>
          )
        }
        <div className={pageSize === 5 ? 'col-6 col-md-6 col-lg-6' : 'col-12 col-md-12 col-lg-12'}>
          <ToggleTheme onClick={toggleDarkMode} isThemeMode={isThemeMode} />
        </div>
      </div >
      <div className='row mb-1'>
        <div className='col-6'>
          {
            pageSize > 5 && (<Search val={globalFilter} onChange={setGlobalFilter} />)
          }
        </div>
        <div className='col-6'>
          {
            pageSize > 5 && (
              <TablePagination
                pageIndex={pageIndex}
                pageOptions={pageOptions}
                gotoPage={gotoPage}
                previousPage={previousPage}
                nextPage={nextPage}
                pageSize={pageSize}
                setPageSize={setPageSize}
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
                showPage={showPage}
              />
            )
          }
        </div>
      </div>
      <table {...getTableProps()}
        className={`table table-bordered table-${isThemeMode ? 'dark' : 'light'} table-striped table-hover`}
      >
        <thead>
          {headerGroups.map((headerGroup, idx: number) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={idx}>
              {headerGroup.headers.map((column, i) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={i} className="table-header cursor--pointer"
                  style={{ width: column.width }}
                >
                  {column.render('Header')}
                  <span className='px-1'>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? arrowUp()
                        : arrowDown()
                      : <>
                        {arrowUp()}
                        {arrowDown()}
                      </>}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell, idx: number) => (
                  <td  {...cell.getCellProps()} className={`table--cell-${cell.column.id}`} key={idx}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='mb-5'>
        <TablePagination
          pageIndex={pageIndex}
          pageOptions={pageOptions}
          gotoPage={gotoPage}
          previousPage={previousPage}
          nextPage={nextPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          showPage={showPage}
        />
      </div>
    </>
  );
};

export default DataTable;