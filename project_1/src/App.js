import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <div className='container-fluid p-0'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/men" element={<Home />} />
            <Route path="/women" element={<Home />} />
            <Route path="/footwear" element={<Home />} />
            <Route path="/shoes" element={<Home />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
