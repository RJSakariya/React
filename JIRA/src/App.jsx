import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUser } from './Features/Slice'
export default function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchUser())
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
