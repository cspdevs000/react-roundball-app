import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import Teams from './Teams';
import Players from './Players';
import Page from './Page';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path='/' element={<Page/>}/>
        <Route path='/teams' element={<Teams/>}/>
        <Route path='/players' element={<Players/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
