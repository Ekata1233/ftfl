import { Accordion, Col, Container, Row } from "react-bootstrap"
import shape from '../../assets/amico.png'
import '../FAQs/FAQs.css'
import SEO from "../SEO"
import { motion } from "framer-motion";
function FAQs() {
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
        <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
       <Container className="my-5">
        <Row>
            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
            <div>
            <div className="text-start pb-3" >
            <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                                    <p>
                                        <span className='text-dark' style={{ fontWeight: "400", fontSize: "45px" }}>Frequently </span>
                                        <span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Asked Questions</span>
                                    </p>
                                    </motion.div>
                                </div>
            </div>
            <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
            <img src={shape} className="img-fluid"/>
            </motion.div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
            <div>
        
            <Accordion defaultActiveKey="" className="text-start border-0">
      <Accordion.Item eventKey="0" className="accor py-4">
      <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
        <Accordion.Header>
          <h6 className="dark fw-bold"> What services does FTFL Technology provide?</h6>
        </Accordion.Header>
        <Accordion.Body>
        We offer a range of IT services, including software development, web and mobile app development, IT consulting, cloud solutions, cybersecurity, network management, and IT support.
        </Accordion.Body>
        </motion.div>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="accor py-4">
      <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
        <Accordion.Header>
          <h6 className="dark fw-bold">How does FTFL Technology ensure data security?
          </h6>
        </Accordion.Header>
        <Accordion.Body>
        We implement industry-standard security measures, including encryption, firewalls, multi-factor authentication, regular security audits, and compliance with GDPR, HIPAA, and other relevant regulations.
        </Accordion.Body>
        </motion.div>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="accor py-4">
      <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
        <Accordion.Header>
          <h6 className="dark fw-bold">Which industries does FTFL Technology serve?</h6>
        </Accordion.Header>
        <Accordion.Body>
        We work with various industries, including healthcare, finance, e-commerce, education, real estate, and startups, providing tailored IT solutions to meet their unique needs.
        </Accordion.Body>
        </motion.div>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="accor py-4">
      <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
        <Accordion.Header>
          <h6 className="dark fw-bold"> What kind of IT support and maintenance do you provide?</h6>
        </Accordion.Header>
        <Accordion.Body>
        We provide 24/7 IT support, regular software updates, bug fixes, and system monitoring to ensure smooth operations and minimal downtime.
        </Accordion.Body>
        </motion.div>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className="accor py-4">
      <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
        <Accordion.Header>
          <h6 className="dark fw-bold">Why choose FTFL Technology over other IT companies?</h6>
        </Accordion.Header>
        <Accordion.Body>
        Our company stands out due to our expertise, customer-centric approach, innovative solutions, timely project delivery, and a dedicated team committed to providing high-quality IT services.
        </Accordion.Body>
        </motion.div>
      </Accordion.Item>
    </Accordion>
 



                
        </div>
            </Col>
        </Row>
       </Container>
    </div>
  )
}

export default FAQs