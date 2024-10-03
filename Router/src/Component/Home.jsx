import { Link, useLocation } from 'react-router-dom'

export default function Home() {
    let data = 'hi'
    let location = useLocation()

    return (
        <div>
            <h1>home</h1>
            <h4>{location.state?.name1}</h4>
            <h4>{location.state?.name2}</h4>
            <Link to={`/About/${data}`}>about</Link>
            <Link to={"/Contact"}>contact</Link>
        </div>
    )
}