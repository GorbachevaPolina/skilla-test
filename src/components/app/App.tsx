import React from 'react';
import './App.css';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import Table from '../table/table';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className='main'>
        <Header />
        <Table />
      </div>
    </div>
  );
}

export default App;
