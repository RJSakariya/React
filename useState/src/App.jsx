import { useState } from 'react'
import './App.css'

function App() {
  const [detail, setDetail] = useState([{ name: "", surname: "" }])
  const [detailArr, setDetailArr] = useState([])
  const handleSubmit = () => {
    setDetail({ name: document.getElementById("name").value, surname: document.getElementById("surname").value })
    setDetailArr([detail,...detailArr])
    document.getElementById("name").value = ""
    document.getElementById("surname").value = ""
    setDetail({ name: "", surname: ""})
  }
  const handleDelete = () => {
    setDetail([detailArr.splice(0,1)])
  }
  
  const handleChange = () => {
    setDetail({ name: document.getElementById("name").value, surname: document.getElementById("surname").value })
  }
  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <div class="input-group my-5">
            <input type="text" onChange={handleChange} id='name' class="form-control" placeholder="Enter Name" aria-describedby="button-addon2" />
            <input type="text" onChange={handleChange} id='surname' class="form-control" placeholder="Enter Surname" aria-describedby="button-addon2" />
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSubmit}>Submit</button>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
              </tr>
            </thead>
            <tbody>
              <th scope="row">0</th>
              <td>{detail.name}</td>
              <td>{detail.surname}</td>
              {detailArr.map((el, ind) => {
                return (
                  <tr key={ind}>
                    <th scope="row">{ind+1}</th>
                    <td>{el.name}</td>
                    <td>{el.surname}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
