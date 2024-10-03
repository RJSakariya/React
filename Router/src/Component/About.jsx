import { Link, useParams } from 'react-router-dom'

export default function About() {
  let param = useParams()
    return (
        <div>
            <h1>about</h1>
            <p>{param.id}</p>
            <Link to={"/"}>Home</Link>
            <Link to={"/Contact"}>Contact</Link>
        </div>
    )
}