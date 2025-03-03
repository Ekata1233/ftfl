import { Col, Container, Row } from "react-bootstrap"
import SEO from "../../SEO"
import { motion } from "framer-motion";
function WhyToChoose() {
    const scrollVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };
    return (
        <div>
              <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
            <div>
                <p className="text-center">
                    <span className='text-dark' style={{ fontWeight: "400", fontSize: "45px" }}>Why</span>
                    <span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> To Choose Us?</span>
                </p>

                <Container>
                    
                    <Row className="justify-content-center align-items-center">
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={4}
                            xl={4}
                            xxl={4}
                            className="text-center my-4 p-4"
                            style={{
                                position: 'relative',
                                padding: '20px',
                            }}
                        >
                            <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                            <p style={{ fontSize: '25px', fontWeight: '500' }}>Proven Expertise</p>
                            <p className="text-secondary text">Our team combines deep industry knowledge with advanced technology to provide truly exceptional unmatched results.</p>
                            </motion.div>
                            <div 
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    right: '12.5%',
                                    width: '75%',
                                    height: '3px',
                                    backgroundColor: 'rgba(41, 139, 243, 0.49)',
                                }}
                            />
                            <div className="bor1"
                                style={{
                                    position: 'absolute',
                                    bottom: '12.5%',
                                    right: '0',
                                    height: '75%',
                                    width: '3px',
                                    backgroundColor: 'rgba(41, 139, 243, 0.49)',
                                }}
                            />
                             
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={4}
                            xl={4}
                            xxl={4}
                            className="text-center my-4 p-4"
                            style={{
                                position: 'relative',
                                padding: '20px',
                            }}
                        >
                             <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                            <p style={{ fontSize: '25px', fontWeight: '500' }}>User-Focused</p>
                            <p className="text-secondary text">Seamless, high-performance digital experiences with personalized solutions, ensuring maximum user satisfaction.</p>
                            </motion.div>
                            <div className="boreder-b"
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    right: '12.5%',
                                    width: '75%',
                                    height: '3px',
                                    backgroundColor: 'rgba(41, 139, 243, 0.49)',
                                }}
                            />
                            <div className="bor1"
                                style={{
                                    position: 'absolute',
                                    bottom: '12.5%',
                                    right: '0',
                                    height: '75%',
                                    width: '3px',
                                    backgroundColor: 'rgba(41, 139, 243, 0.49)',
                                }}
                            />
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={4}
                            xl={4}
                            xxl={4}
                            className="text-center my-4 p-4"
                            style={{
                                position: 'relative',
                                padding: '20px',
                            }}
                        >
                            <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                            <p style={{ fontSize: '25px', fontWeight: '500' }}>Custom Solutions</p>
                            <p className="text-secondary text">Tailored software, AI, and cloud services, designed to meet your unique needs and goals, driving innovation and efficiency.</p>
                            </motion.div>
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    right: '12.5%',
                                    width: '75%',
                                    height: '3px',
                                    backgroundColor: 'rgba(41, 139, 243, 0.49)',
                                }}
                            />
                            <div
                                
                            />
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={4}
                            xl={4}
                            xxl={4}
                            className="text-center my-4 p-4"
                            style={{
                                position: 'relative',
                                padding: '20px',
                            }}
                        >
                             <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                            <p style={{ fontSize: '25px', fontWeight: '500' }}>Secure & Reliable</p>
                            <p className="text-secondary text">Years of experience in cutting-edge IT solutions, ensuring robust security, protection, and consistent performance.</p>
                            </motion.div>
                            <div
                              
                            />
                            <div className="bor1"
                                style={{
                                    position: 'absolute',
                                    bottom: '12.5%',
                                    right: '0',
                                    height: '75%',
                                    width: '3px',
                                    backgroundColor: 'rgba(41, 139, 243, 0.49)',
                                }}
                            />
                             <div className="boreder-b boreder-b1 bor  "
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    right: '12.5%',
                                    width: '75%',
                                    height: '3px',
                                    backgroundColor: 'rgba(41, 139, 243, 0.49)',
                                }}
                            />
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={4}
                            xl={4}
                            xxl={4}
                            className="text-center my-4 p-4"
                            style={{
                                position: 'relative',
                                padding: '20px',
                            }}
                        >
                            <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                            <p style={{ fontSize: '25px', fontWeight: '500' }}>End-to-End Support</p>
                            <p className="text-secondary text">Full-cycle development and 24/7 assistance, ensuring seamless project execution and reliable proactive support.</p>
                            </motion.div>
                            <div
                               
                            />
                            <div className="bor1"
                                style={{
                                    position: 'absolute',
                                    bottom: '12.5%',
                                    right: '0',
                                    height: '75%',
                                    width: '3px',
                                    backgroundColor: 'rgba(41, 139, 243, 0.49)',
                                }}
                            />
                             <div className="boreder-b boreder-b1 bor  "
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    right: '12.5%',
                                    width: '75%',
                                    height: '3px',
                                    backgroundColor: 'rgba(41, 139, 243, 0.49)',
                                }}
                            />
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={4}
                            xl={4}
                            xxl={4}
                            className="text-center my-4 p-4"
                            style={{
                                position: 'relative',
                                padding: '20px',
                            }}
                        >
                             <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                            <p style={{ fontSize: '25px', fontWeight: '500' }}>Future-Ready Tech</p>
                            <p className="text-secondary text">Scalable solutions built for tomorrow’s needs, leveraging the latest innovations to drive long-term growth.</p>
                            </motion.div>
                            <div className="boreder-b boreder-b1  bor         "
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    right: '12.5%',
                                    width: '75%',
                                    height: '3px',
                                    backgroundColor: 'rgba(41, 139, 243, 0.49)',
                                }}
                            />
                            <div
                                
                            />
                        </Col>
                    </Row>



                </Container>
            </div>

        </div>
    )
}

export default WhyToChoose