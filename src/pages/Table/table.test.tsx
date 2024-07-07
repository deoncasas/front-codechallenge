import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DataTable from './table';

const columns = [
  { Header: 'Id', accessor: 'id' },
  { Header: 'UserId', accessor: 'userId' },
  { Header: 'Title', accessor: 'title' },
  { Header: 'Message', accessor: 'body' }
];

const data = [
  { id: 1, userId: 1, title: 'love letter', body: 'email address deoncasas@gmail.com' }
];


describe('renders table component', () => {

  beforeEach(() => {
    localStorage.clear();
  });

  it('should set initial theme based on localStorage', () => {
    localStorage.setItem('theme', 'dark');
    const { getByText } = render(<DataTable columns={columns} data={data} />);
    expect(getByText(/Change Theme/i)).toBeInTheDocument();
  });

  it('should call setToggleTheme with true if storedTheme is dark', () => {
    const { getByText } = render(<DataTable columns={columns} data={data} />);
    const button = getByText(/Change Theme/i);

    const setItemMock = jest.spyOn(Storage.prototype, 'setItem');
    fireEvent.click(button);
    expect(setItemMock).toHaveBeenCalledWith('theme', 'dark');

    fireEvent.click(button);
    expect(setItemMock).toHaveBeenCalledWith('theme', 'light');
  });

  it('renders table with rows and cells', () => {
    const { getByText } = render(<DataTable columns={columns} data={data} />);
    expect(getByText('love letter')).toBeInTheDocument();
    expect(getByText('email address deoncasas@gmail.com')).toBeInTheDocument();
  });
});
