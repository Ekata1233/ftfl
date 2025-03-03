import { Col, Row } from "react-bootstrap"
import '../../HowItServices/HowItServics.css'
import SEO from "../../SEO"
import { motion } from "framer-motion";
function WhatDifferent() {
    const scrollVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };
    return (
        <div>
            <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
            <div>
            <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                <p className="blue heading-p  text-end mb-5" style={{ fontWeight: "400px" }}>
                    What Makes Us Different?
                </p>
                </motion.div>
                <div>
                    <Row className="text whatdiffer">
                        <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                            <div className="box bg-white py-4 px-4 rounded rounded-4 my-3 what text-secondary differ">
                            <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                                <p className="fw-bold blue">Empowerment</p>
                                <p className="text">FTFL Technology is committed to helping businesses grow in the digital age, offering expert IT, branding, and marketing services tailored to meet each client’s unique needs and drive success with innovative strategies.</p>
                                </motion.div>
                            </div>
                            </motion.div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                            <div className="box bg-white py-4 px-4 rounded rounded-4 my-3 what text-secondary differ">
                            <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                                <p className="fw-bold blue">Strategic Alignment</p>
                                <p className="text">We understand your challenges and tailor strategies to align with your goals, accelerating growth and improving efficiency for long-term success. Our solutions are designed to drive progress and enhance operational performance.</p>
                                </motion.div>
                            </div>
                            </motion.div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                            <div className="box bg-white py-4 px-4 rounded rounded-4 my-3 what text-secondary differ">
                            <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                                <p className="fw-bold blue">Guidance</p>
                                <p className="text">From efficient business procedures to cutting-edge technology and impactful branding, FTFL Technology supports start-ups, SMEs, and established companies through the complexities of the digital world every step of the way.</p>
                                </motion.div>
                            </div>
                            </motion.div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default WhatDifferent