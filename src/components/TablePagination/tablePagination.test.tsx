import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TablePagination from './tablePagination';

describe('renders tablePagination component', () => {
  const props = {
    pageIndex: 0,
    pageOptions: [0, 1, 2],
    gotoPage: jest.fn(),
    previousPage: jest.fn(),
    nextPage: jest.fn(),
    pageSize: 10,
    setPageSize: jest.fn(),
    canPreviousPage: false,
    canNextPage: true,
    showPage: [5, 10, 15, 20]
  };
  it('should call gotoPage when page number is changed', () => {
    const { getByRole } = render(<TablePagination {...props} />);
    const input = getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '2' } });
    expect(props.gotoPage).toHaveBeenCalledWith(1);
  });

  it('should call previousPage when button is clicked', () => {
    props.canPreviousPage = true
    const { getByText } = render(<TablePagination {...props} />);
    fireEvent.click(getByText('Previous'));
    expect(props.previousPage).toHaveBeenCalled();
  });

  it('should call nextPage when button is clicked', () => {
    props.canNextPage = true
    const { getByText } = render(<TablePagination {...props} />);
    fireEvent.click(getByText('Next'));
    expect(props.nextPage).toHaveBeenCalled();
  });

  it('should render select with options and correct initial value', () => {
    props.pageSize = 10;
    const { getByRole } = render(<TablePagination {...props} />);
    fireEvent.change(getByRole('combobox'), { target: { value: '20' } });
    expect(props.setPageSize).toHaveBeenCalledWith(20);
  });

  it('should render pageSize value', () => {
    props.pageSize = 10;
    const { getByRole } = render(<TablePagination {...props} />);
    expect(getByRole('combobox')).toHaveValue('10');
  });
});
