import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import Blog from './Components/Blog/Blog';
import Carreers from './Components/Carreers/Carreers';
import ConatctUS from './Components/ContactUS/ConatctUS';

function App() {

  return (
    <>
      <BrowserRouter>
          {/* <HederNav/> */}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/blogs" element={<Blog/>}/>
            <Route path="/careers" element={<Carreers/>}/>
            <Route path="/contact" element={<ConatctUS/>}/>


          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
