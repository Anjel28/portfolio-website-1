import React from 'react';
import Home from './pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
//import Home from './pages/Home';
import Projects from './pages/Projects';
import AddProject from './pages/AddProject';
import EditProject from './pages/EditProject';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/add" element={<AddProject />} />
          <Route path="/edit/:id" element={<EditProject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
