import { useState } from 'react'

export default function FunctionComponent() {
  const [count,setCount] = useState(0)
  function Increment(){
    setCount(count + 1)
  }
  return (
    <div>
      <h1>Create Using Function Base Component:</h1>
      <h2>Count : {count}</h2>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}
