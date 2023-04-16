import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import ProductList from "./pages/ProductList";
import NavBar from './components/NavBar';
import JensonDetails from "./components/JensonDetails";
import DeonDetails from "./components/DeonDetails";
import KrishaDetails from "./components/KrishaDetails";

function App() {
  return (
    <div className="App">
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/jenson' element={<JensonDetails/>} />
        <Route path='/deon' element={<DeonDetails />} />
        <Route path='/krisha' element={<KrishaDetails />} />
      </Routes> 
    </div>
  );
}

export default App;
