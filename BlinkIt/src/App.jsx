import Header from './components/Header';
import './app.css'
import { Provider} from 'react-redux';
import { Store } from './App/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductContainer from './components/ProductContainer';
export default function App() {
  
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Header />
          <Navbar />
          <Routes>
            <Route path='/*' element={<ProductContainer />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}
