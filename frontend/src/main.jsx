import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Login.jsx'
import UserTable from './UserTable.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <UserTable />
  </StrictMode>,
)
