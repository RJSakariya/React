

import './App.css'

function App() {
  localStorage.setItem("name", "Rahil")
  localStorage.setItem("age", 18)
  localStorage.setItem("study", "fullstack")



  let data = localStorage.getItem("name")
  let age = localStorage.getItem("age")
  console.log(age)
  console.log(data)
  localStorage.removeItem("name")
  localStorage.removeItem("study")
  let obj1 = { name: "Rahil", age: 18 }
  let obj2 = { name: "Amit", age: 18 }
  let obj3 = { name: "Sanjay", age: 20 }

  localStorage.setItem("obj1", JSON.stringify(obj1))
  localStorage.setItem("obj2", JSON.stringify(obj2))
  localStorage.setItem("obj3", JSON.stringify(obj3))
  let getobj1 = JSON.parse(localStorage.getItem("obj1"))
  let getobj2 = JSON.parse(localStorage.getItem("obj2"))
  let getobj3 = JSON.parse(localStorage.getItem("obj3"))
  console.log(getobj1)
  console.log(getobj2)
  console.log(getobj3)

  return (
    <>

    </>
  )
}

export default App