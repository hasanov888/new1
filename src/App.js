import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ContactInfo from './Components/ContactInfo';
import WorkExample from './Components/WorkExample';
import About from './Components/About';

function App() {
  return (
  
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/WorkExample" element={<WorkExample />} />
            <Route path="/ContactInfo" element={<ContactInfo />} />
          </Routes>
        </div>
      </div>

  );
}

export default App;
