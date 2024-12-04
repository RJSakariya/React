import { Provider } from "react-redux";
import Products from "./Components/Products";
import { store } from "./App/store"
import { BrowserRouter } from "react-router-dom";
import Appbar from "./Components/Appbar";
import './App.css'
export default function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
        <Appbar/>
          <Products />
        </BrowserRouter>
      </Provider>
    </>
  )
}
