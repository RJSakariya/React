import { useRef } from "react"

export default function Controlled() {
    const inp = useRef("");
    var setInput;
    const handleChange = () => {
        setInput = inp.current.value
        console.log(setInput)
    }
    return (
        <form className="form mt-5">
            <h3>Uncontrolled Component</h3>
            <input type="text" className="form-control mt-3" ref={inp} onChange={() => handleChange()} />
        </form>
    )
}
