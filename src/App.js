import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import  React  from 'react'
import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />

        </Routes>
      </Router>
    </>
  );
}

export default App;
