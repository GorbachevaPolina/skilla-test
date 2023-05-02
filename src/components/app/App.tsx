import React from 'react';
import './App.css';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <Header />
      </div>
    </div>
  );
}

export default App;
