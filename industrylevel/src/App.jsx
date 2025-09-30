import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import JobDetails from "./pages/JobDetails";


function App() {

  return (
     <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddJob />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
    </Router>
  )
}

export default App
