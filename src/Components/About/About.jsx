import HeaderNav from "../HeaderNav/HederNav"
import about from '../../assets/Frame 116.png'
import { Button,  Row } from "react-bootstrap"
import { MdArrowForwardIos } from "react-icons/md";
import vector from '../../assets/Vector 427.png'
import '../About/About.css'
import HowItServices from "../HowItServices/HowItServices";
import WhatDifferent from "./WhatDiffernt/WhatDifferent";
import OurVision from "./OurVison/OurVision";
import OurCoreValue from "./OurCoreValue/OurCoreValue";
import { useNavigate } from "react-router-dom";
import SEO from "../SEO";
import { motion } from "framer-motion";
function About() {
  const navigate=useNavigate()
 
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="d-flex flex-column min-vh-100">
      <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
    {/* Header Navigation Overlay */}
    <div className="overlay-nav overlay-nav1">
      <HeaderNav />
    </div>

    {/* Main Content Section */}
    <div className="flex-grow-1">
      {/* Carousel Section */}
      <div className="carousel-container about position-relative text-center">
        <img src={about} className="img-fluid w-100 about-img" alt="Slide 1" />
        <div className="position-absolute translate-middle p-3 header-content w-100">
        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
          <p className="text-white text">About</p>
          <h1 className="text-white fw-bold my-4 h1">
            Building Brands, Shaping Tech
          </h1>
          <p className="text-white header-p">
          At FTFL Technology, we craft innovative digital solutions that elevate brands and drive technological excellence. From cutting-edge development to strategic branding, we empower businesses to thrive in the digital era.
          </p>

          <Button variant="" className="mt-4 blue-btn text-white" onClick={()=>navigate('/contact')}>
            Contact Us <MdArrowForwardIos />
          </Button>
          </motion.div>
        </div>
      </div>

      {/* Additional Content */}
      <Row className="w-100 mt-lg-5">
        <div className="image-container position-relative">
          <div className="overlay-content">
            <HowItServices />
            <div className="mt-5 pt-5">
              <WhatDifferent />
            </div>
          </div>
          
          <img
            src={vector}
            alt="Vector"
            className="vector-image"
            
          />
         
        </div>

      </Row>
      
    </div>
    <OurVision/>
    <OurCoreValue/>
    {/* Footer (Ensuring it's at the bottom) */}
    
  </div>
    )
}

export default About