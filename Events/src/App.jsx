import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [detail, setDetail] = useState([{ name: "", surname: "" }])
  const [detailArr, setDetailArr] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault()
    setDetail({ name: document.getElementById("name").value, surname: document.getElementById("surname").value })
    setDetailArr([detail, ...detailArr])
    document.getElementById("name").value = ""
    document.getElementById("surname").value = ""
    setDetail({ name: "", surname: "" })
  }
  const handleDelete = () => {
    setDetail([detailArr.splice(0, 1)])
  }

  const handleChange = () => {
    setDetail({ name: document.getElementById("name").value, surname: document.getElementById("surname").value })
  }

  useEffect(() => {
    console.log("component did mount")
  })
  useEffect(() => {
    console.log("component did mount first time")
  }, [])
  useEffect(() => {
    console.log("component did update")
  }, [detailArr])
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="input-group my-5">
              <input type="text" onChange={handleChange} id='name' className="form-control" placeholder="Enter Name" aria-describedby="button-addon2" />
              <input type="text" onChange={handleChange} id='surname' className="form-control" placeholder="Enter Surname" aria-describedby="button-addon2" />
              <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>
              <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleDelete}>Delete</button>
            </div>
          </form>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <table className="table">
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
              {detailArr.length !== 0 ? detailArr.map((el, ind) => {
                return (
                  <tr key={ind}>
                    <th scope="row">{ind + 1}</th>
                    <td>{el.name}</td>
                    <td>{el.surname}</td>
                  </tr>
                )
              }) : <tr>
                <th scope='row'></th>
                <td>data not found.</td>
                <td></td>
              </tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
