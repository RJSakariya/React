import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function Create({ data, setdata }) {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    let navigate = useNavigate()

    let Handlesubmit = () => {
        // eslint-disable-next-line react/prop-types
        setdata([...data, { id: data.length + 1, name: name, age: age }])
        navigate("/")
    }

    return (
        <div>
            <h1>Create</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            <button onClick={(e) => Handlesubmit(e)}>Submit</button>
        </div>
    )
}