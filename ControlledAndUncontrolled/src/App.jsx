import Controlled from "./Components/Controlled";
import Uncontrolled from "./Components/Uncontrolled";
import './App.css';
export default function App() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <Controlled />
          <Uncontrolled />
        </div>
      </div>
    </div>
  )
}
