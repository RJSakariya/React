import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function Read({data}) {
  return (
    <div>
      <Link to={"/Create"}>Create</Link>
      <Link to={"/Update"}>Update</Link>
      <Link to={"/Delete"}>Delete</Link>
      {
        // eslint-disable-next-line react/prop-types
        data && data.map((e,i)=>{
            return <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
            </tr>
        })
      }
    </div>
  )
}