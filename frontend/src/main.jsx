import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import SignUp from './SignUp.jsx'
import FinalLogin from './FinalLogin.jsx'
import MyNotes from './MyNotes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<FinalLogin />} />
        <Route path="/notes" element={<MyNotes />} />
      </Routes>
    </Router>
    
  </StrictMode>,
)
