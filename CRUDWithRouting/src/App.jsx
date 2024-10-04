import { useState } from 'react'
import Read from './Components/Read'
import Create from './Components/Create'
import Update from './Components/Update'
import Delete from './Components/Delete'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "Bagalo", age: 25 },
    { id: 2, name: "Amita", age: 30 },
  ])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Read data={data} />}></Route>
          <Route path='/Create' element={<Create data={data} setdata={setData} />}></Route>
          <Route path='/Update' element={<Update data={data} setdata={setData} />}></Route>
          <Route path='/Delete' element={<Delete data={data} setdata={setData} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}