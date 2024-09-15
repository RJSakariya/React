import { useState } from "react"

export default function Controlled() {
  const [input,setInput] = useState("")
  return (
    <form className="form mt-5">
      <h3>Controlled Component</h3>
      <input type="text" className="form-control mt-3" onChange={(e)=>setInput(e.target.value)}/>
      <p className="mt-2">{input}</p>
    </form>
  )
}
