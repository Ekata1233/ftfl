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
import AiMLearning from './Components/Blog/Ai&MLearning/Ai&MLearning';
import CloudComputing from './Components/Blog/CloudComputing/CloudComputing';
import FutureWebMobile from './Components/Blog/FutureWeb&Mobile/FutureWeb&Mobile';
import FrontendVSBackend from './Components/Blog/FrontenVSBackend/FrontendVSBackend';
import ReactVSAngulr from './Components/Blog/ReactVSAngulr/ReactVSAngulr';
import MobilePerformance from './Components/Blog/MobilePerformance/MobilePerformance';
import DigitalTransformation from './Components/Blog/DigitalTransformation/DigitalTransformation';
import CostEffectiveStartup from './Components/Blog/CostEffectiveStartup/CostEffectiveStartup';
import BusinssRoadmaps from './Components/Blog/BusinessRoadmaps/BusinssRoadmaps';
import JobDescriptions from './Components/JobDescriptions/JobDescriptions';
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
            <Route path="/blogs/latest-tech-trends/ai&machine" element={<AiMLearning/>}/>

            <Route path="/blogs/latest-tech-trends/cloudcomputing" element={<CloudComputing/>}/>
            <Route path="/blogs/latest-tech-trends/web&mobile" element={<FutureWebMobile/>}/>
            <Route path="/blogs/web-&-mobile-development/frontendVsbackend" element={<FrontendVSBackend/>}/>
            <Route path="/blogs/web-&-mobile-development/reactvsangular" element={<ReactVSAngulr/>}/>
            <Route path="/blogs/web-&-mobile-development/mobileperformance" element={<MobilePerformance/>}/>
            <Route path="/blogs/itconsultation/digitaltransformation" element={<DigitalTransformation/>}/>
            <Route path="/blogs/itconsultation/costeffectivestartup" element={<CostEffectiveStartup/>}/>
            <Route path="/blogs/itconsultation/businessroadmaps" element={<BusinssRoadmaps/>}/>
            <Route path="/jobdescription" element={<JobDescriptions/>}/>

          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
