import { Col, Row, Container } from "react-bootstrap";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import services1 from "../../assets/off.png";
import services2 from "../../assets/off1.png";
import services3 from "../../assets/off12.png";
import serimg1 from "../../assets/Group 10142 (1).png";
import serimg2 from "../../assets/Group 10142 (2).png";
import serimg3 from "../../assets/Group 10142.png";
import "../OurServices/OurServices.css";
import SEO from "../SEO";

// Animation Variants
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut" } },
};

function OurServices() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="my-lg-5 py-lg-3" ref={ref}>
      <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
      <div className="text-center my-lg-5">
        <motion.p variants={textVariants} initial="hidden" animate={controls}>
          <span className="text-dark" style={{ fontWeight: "400", fontSize: "45px" }}>Our</span>
          <span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Services</span>
        </motion.p>
        <Container>
          <motion.p className="text text-secondary py-lg-5" variants={textVariants} initial="hidden" animate={controls}>
            At FTFL Technology, we provide top-tier technology solutions to help businesses thrive in the digital world. From web and mobile development to IT consulting, we’ve got you covered.
          </motion.p>
        </Container>
        <Container>
        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
          <Row className="justify-content-center my-5">
            {[services1, services2, services3].map((service, index) => (
              <Col key={index} xs={12} sm={12} md={4} lg={4} xl={4} className="d-flex justify-content-center my-3">
                <motion.div className="image-wrapper" variants={textVariants} initial="hidden" animate={controls}>
                  <img src={service} className="services-img img-fluid" alt="Background" />
                  <div className="overlay-container">
                    <img src={[serimg1, serimg2, serimg3][index]} className="overlay-img img-fluid" alt="Overlay" />
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
          </motion.div>
        </Container>
      </div>
    </div>
  );
}

export default OurServices;
