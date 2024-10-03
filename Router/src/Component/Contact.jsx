import { Link, useNavigate } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate();
    const home = () => {
        navigate('/',{ state: { name1: 'sanjay', name2: 'amit' } })
    }

    return (
        <div>
            <h1>contact</h1>
            <button onClick={home}>home</button>
            <Link to={"/About"}>About</Link>
        </div>
    )
}