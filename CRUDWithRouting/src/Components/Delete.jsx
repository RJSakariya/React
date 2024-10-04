import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


// eslint-disable-next-line react/prop-types
export default function Delete({ data, setdata }) {
    const [id, setId] = useState()
    let navigate = useNavigate()
    let Handledel = () => {
        // eslint-disable-next-line react/prop-types
        let delData = data.filter((e) => e.id != id)
        setdata(delData)
        navigate("/")
    }
    return (
        <div>
            <h1>Delete</h1>
            <input type="number" onChange={(e) => setId(e.target.value)} />
            <button onClick={Handledel}>delete</button>
        </div>
    )
}