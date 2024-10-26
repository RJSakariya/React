import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
