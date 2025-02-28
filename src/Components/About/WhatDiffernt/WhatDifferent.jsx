import { Col, Row } from "react-bootstrap"
import '../../HowItServices/HowItServics.css'
import SEO from "../../SEO"
function WhatDifferent() {
    return (
        <div>
            <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
            <div>
                <p className="blue heading-p  text-end mb-5" style={{ fontWeight: "400px" }}>
                    What Makes Us Different?
                </p>
                <div>
                    <Row className="text whatdiffer">
                        <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                            <div className="box bg-white py-5 px-4 rounded rounded-4 my-3 what text-secondary differ">
                                <p className="fw-bold blue">Empowerment</p>
                                <p className="text">FTFL Technology is committed to helping businesses grow in the digital age, offering expert IT, branding, and marketing services tailored to meet each client’s unique needs and drive success with innovative strategies.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                            <div className="box bg-white py-5 px-4 rounded rounded-4 my-3 what text-secondary differ">
                                <p className="fw-bold blue">Strategic Alignment</p>
                                <p className="text">We understand your challenges and tailor strategies to align with your goals, accelerating growth and improving efficiency for long-term success. Our solutions are designed to drive progress and enhance operational performance.</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                            <div className="box bg-white py-5 px-4 rounded rounded-4 my-3 what text-secondary differ">
                                <p className="fw-bold blue">Guidance</p>
                                <p className="text">From efficient business procedures to cutting-edge technology and impactful branding, FTFL Technology supports start-ups, SMEs, and established companies through the complexities of the digital world every step of the way.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default WhatDifferent