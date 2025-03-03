import { Button, Col,  Row } from "react-bootstrap";
import valuebg from "../../../assets/bg.png";
import innovation from "../../../assets/light-bulb (1).png";
import coustmer from "../../../assets/bro.png";

import collabration from "../../../assets/rafiki.png";

import "../OurCoreValue/OurCoreValur.css"; // Ensure you have a CSS file for styling
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import SEO from "../../SEO";
import { motion } from "framer-motion";
function OurCoreValue() {
  const navigate=useNavigate()
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (

    <div className="value-div">
      <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />

      {/* Background Image */}
      <div className="background-image">
        <img src={valuebg} alt="Background" className="background-img" />
      </div>

      {/* Overlay Content */}
      <div className="value-container mt-5">
        <div className="pt-lg-5">
        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
        <p className="text-center"><span className="" style={{ fontWeight: "400", fontSize: "45px", }}>Our</span><span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Core Value</span></p>
        </motion.div>
        </div>
        
  <Row className="text-center text-white my-lg-5 py-lg-5">
    
    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="my-4">
    <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
      <div className="text-box text">
      <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
        <img src={innovation} alt="Innovation" className="img-fluid" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
        <p className="">Innovation</p>
        <p>
          We constantly innovate, staying ahead of industry trends, to deliver
          creative, leading-edge solutions for business growth.
        </p>
       </motion.div>
      </div>
      </motion.div>
    </Col>
    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="my-4">
    
      
      <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
      <div className="text-box text">
      <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
        <img src={coustmer} alt="Integrity" className="img-fluid p-3" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
        <p>Integrity</p>
        <p>
          We uphold the highest ethical standards, ensuring trust and
          transparency in all our business dealings.
        </p>
        </motion.div>
      </div>
      </motion.div>
    </Col>
    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="my-4">
    <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
      <div className="text-box text">
      <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
        <img src={collabration} alt="Excellence" className="img-fluid p-3" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
        <p>Excellence</p>
        <p>
          We strive for excellence in every project, delivering quality work
          that exceeds expectations.
        </p>
        </motion.div>
      </div>
      </motion.div>
    </Col>
  </Row>
  <Row>
   <div className="py-lg-3">
   <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
   <div style={{border:"2px solid #298CF3"}} className="rounded rounded-4   py-lg-5 mt-5  ">
   <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
    <p className="text-center pb-3"><span className="" style={{ fontWeight: "600", fontSize: "45px", }}>Grow Your</span><span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Future </span><span className="" style={{ fontWeight: "600", fontSize: "45px", }}>With Us</span></p>
    </motion.div>
    <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
    <p className="text-center text text-secondary">Join FTFL Technology and unlock endless opportunities to develop your skills, innovate, and shape the future of digital transformation.</p>
    </motion.div>
    <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
    <div className="d-flex justify-content-center">
  <Button variant="" className="mt-4 blue-btn text-white mb-3"onClick={() => navigate("/careers")}>
    Careers in FTFL Technology <MdArrowForwardIos />
  </Button>
</div>
</motion.div>
    </div>
    </motion.div>
   </div>
  </Row>


      </div>
    </div>
  );
}

export default OurCoreValue;
