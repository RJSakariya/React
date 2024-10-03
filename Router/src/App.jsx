import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Component/Contact'
import Home from './Component/Home'
import About from './Component/About'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About/:id" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App