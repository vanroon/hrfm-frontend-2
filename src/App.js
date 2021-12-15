import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import BookComponent from './components/BookComponent';


class App extends React.Component {
  render() {

return(
  <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/books' element={<BookComponent/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    );
  }
}

export default App;
