import { Col,Row } from "react-bootstrap"
import aboutman from '../../assets/aboutman.png'
import '../HowItServices/HowItServics.css'
import SEO from "../SEO"
import { motion } from "framer-motion";

function HowItServices() {
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
        <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
        <div>
        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
            <p className="blue heading-p pb-4"> How it Started</p>
            </motion.div>
            <div className="d-flex justify-content-center align-items-center ">
            <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
            <div className="d-flex justify-content-center mx-auto blue-bg text-white rounded rounded-5 howstart">
      <Row className="full-width-row  started w-100">
        <Col xs={12} sm={12} md={12} lg={8} xl={8} className="p-4">
        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
            <div>
                <h4>The Road to</h4>
                <p className="" style={{fontWeight:"600",fontSize:"60px", lineHeight:"50px"}}>Today</p>
            </div>
          <p className="mt-5 header-p text-justify text">
          Founded on October 21, 2024, FTFL Technology Private Limited provides specialised IT services, branding, and marketing solutions. Headquartered in Pune, Maharashtra, our expertise spans custom software development, digital branding, and high-performance marketing solutions. 
          Committed to innovation and excellence, we equip businesses with the right tools to enhance efficiency, optimise operations, and drive overall growth. At FTFL Technology, we ensure that our clients stay ahead in today’s highly competitive and ever-evolving digital landscape.
          </p>
          </motion.div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4} xl={4} >
        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
         <div>
            <img src={aboutman} className="img-fluid about-man" />
         </div>
         </motion.div>
        </Col>
      </Row>
    </div>
   </motion.div>
            </div>
        </div>
    </div>
  )
}

export default HowItServices