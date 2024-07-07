import React, { useEffect, useMemo, useState } from 'react';
import './App.scss';
import DataTable from './pages/Table/table';
import { Column } from 'react-table';
import Navigation from './components/HeaderNavigation/headerNavigation';
import { DataState } from '../src/pages/Table/dataState';
import dataTableList from './mockData/mockData';

const App = () => {

  const [isVisibleScroll, setIsVisibleScroll] = useState(false);
  const data: DataState[] = [...dataTableList];
  const columns: Column[] = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        width: '10%',
      },
      {
        Header: 'User ID',
        accessor: 'userId',
        width: '10%'
      },
      {
        Header: 'Title',
        accessor: 'title',
        width: '20%'
      },
      {
        Header: 'Message',
        accessor: 'body',
        width: '60%'
      }
    ], []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisibleScroll(true);
    } else {
      setIsVisibleScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="App">
      <Navigation title={'Data Table Component'} />
      <div className='container table-container'>
        <DataTable columns={columns} data={data} />
      </div>
      {isVisibleScroll && (
        <button className="scroll-to-top btn btn-primary" onClick={() => scrollToTop()}>Scroll to Top</button>
      )}
    </div>
  );
}

export default App;
