import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Login from './Login.jsx'
import UserTable from './UserTable.jsx'
import SignUp from './SignUp.jsx'
import FinalLogin from './FinalLogin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<FinalLogin />} />
      </Routes>
    </Router>
    
  </StrictMode>,
)
