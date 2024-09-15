import { useEffect, useRef } from "react";
import "./App.css"

export default function App() {
  const Name = useRef("");
  const Password = useRef("");
  useEffect(() => {
    setTimeout(() => {
      Name.current.focus()
    }, 1000)
  }, [])
  return (
    <>
      <div className="container">
        <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
          <div className="col-12 col-md-8 col-lg-6 col-xl-4 card px-4 py-5">
            <input ref={Name} type="text" className="form-control" placeholder="Enter Your Name" />
            <input ref={Password} type="password" className="form-control mt-3" placeholder="Enter Your Password" />
            <button className="btn btn-primary mt-4" onClick={
              () => {
                Name.current.value === "" ? Name.current.focus() : Password.current.value === "" ? Password.current.focus() : alert("Name : " + Name.current.value + ", Password : " + Password.current.value)
              }
            }>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}
