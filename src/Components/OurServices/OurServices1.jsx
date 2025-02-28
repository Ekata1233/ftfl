import { Col, Row, Container } from "react-bootstrap";
import services1 from '../../assets/off.png'
import services2 from '../../assets/off1.png'

import services3 from '../../assets/off12.png'
import serimg1 from '../../assets/Group 10142 (1).png'
import serimg2 from '../../assets/Group 10142 (2).png'
import serimg3 from '../../assets/Group 10142.png'

import '../OurServices/OurServices.css'
import SEO from "../SEO";

function OurServices() {
    return (
        <div className="my-5 py-3" >
            <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
            <div className="text-center my-5" >
                <p>
                    <span className='text-dark' style={{ fontWeight: "400", fontSize: "45px" }}>Our</span>
                    <span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Services</span>
                </p>                <Container>
                    <p className="text text-secondary py-5">At FTFL Technology, we provide top-tier technology solutions to help businesses thrive in the digital world. From web and mobile development to IT consulting we’ve got you covered.</p>
                </Container>
                <Container>
                    <Row className="justify-content-center my-5">
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="d-flex justify-content-center my-3">
                            <div className="image-wrapper">
                                {/* Background Image */}
                                <img src={services1} className="services-img img-fluid" alt="Background" />

                                {/* Overlay Image */}
                                <div className="overlay-container">
                                    <img src={serimg1} className="overlay-img img-fluid" alt="Overlay" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="d-flex justify-content-center my-3">
                            <div className="image-wrapper">
                                {/* Background Image */}
                                <img src={services2} className="services-img img-fluid" alt="Background" />

                                {/* Overlay Image */}
                                <div className="overlay-container">
                                    <img src={serimg2} className="overlay-img img-fluid" alt="Overlay" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="d-flex justify-content-center my-3">
                            <div className="image-wrapper">
                                {/* Background Image */}
                                <img src={services3} className="services-img img-fluid" alt="Background" />

                                {/* Overlay Image */}
                                <div className="overlay-container">
                                    <img src={serimg3} className="overlay-img img-fluid" alt="Overlay" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


        </div>
    )
}

export default OurServices