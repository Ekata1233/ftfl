import { Col, Container, Row } from "react-bootstrap";
import footer from '../../assets/footer (1) 2 (2).png';
import '../Footer/Footer.css';
import { MdPlayArrow } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import SEO from "../SEO";

function Footer() {
    return (
        <div className="footer-wrapper" style={{ marginBottom: 0 }}>
            <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
            <div className="footer-container text" style={{ marginBottom: 0 }}>
                <Container fluid style={{ padding: 0 }}>
                    <div className="text-overlay d-flex justify-content-center align-items-center pt-5">
                        <Row className="text-white text-center overlay-row">
                            <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                                <div>
                                    <h4 className="text-start" style={{ fontWeight: "600", lineHeight: "35px" }}>
                                        Ready To
                                    </h4>
                                    <h4 className="text-start">
                                        <span className="dark-blue" style={{ fontWeight: "600", lineHeight: "34px" }}>
                                            Start Work With Us?
                                        </span>
                                    </h4>
                                </div>
                                <p className="text-start pe-5 mb-md-3">
                                    We thrive on challenges and innovation, redefining possibilities in the advertising sector. Our team is driven by creativity, passion, and a commitment to delivering exceptional results. Let’s collaborate and bring your vision to life!
                                </p>
                                <Row className="text-start social1 pb-5">
                                    <Col>
                                        <p>Our Socials</p>
                                        <div className="d-flex">
                                            <div className="touch rounded rounded-circle me-3" style={{ width: "40px", height: "40px" }}>
                                                <a href="https://x.com/" className="text-white text-decoration-none">
                                                    <FaXTwitter className="p-2" style={{ width: "40px", height: "40px", color: "black" }} />
                                                </a>
                                            </div>
                                            <div className="touch rounded rounded-circle me-3" style={{ width: "40px", height: "40px" }}>
                                                <a href="https://www.facebook.com/FTFLTechnology" className="text-white text-decoration-none">
                                                    <FaFacebookF className="p-2" style={{ width: "40px", height: "40px", color: "#1877F2" }} />
                                                </a>
                                            </div>
                                            <div className="touch rounded rounded-circle me-3" style={{ width: "40px", height: "40px" }}>
                                                <a href="https://www.instagram.com/ftfltechnology?igsh=cG82ajFmeTE3aWZk" className="text-white text-decoration-none">
                                                    <GrInstagram className="p-2" style={{ width: "40px", height: "40px", color: "#E4405F" }} />
                                                </a>
                                            </div>
                                            <div className="touch rounded rounded-circle me-3" style={{ width: "40px", height: "40px" }}>
                                                <a href="https://www.linkedin.com/company/ftfl-technology-pvt-ltd/" className="text-white text-decoration-none">
                                                    <FaLinkedinIn className="p-2" style={{ width: "40px", height: "40px", color: "#0077B5" }} />
                                                </a>
                                            </div>
                                            <div className="touch rounded rounded-circle me-3" style={{ width: "40px", height: "40px" }}>
                                                <a href="https://wa.me/919272003735" className="text-white text-decoration-none">
                                                    <ImWhatsapp className="p-2" style={{ width: "40px", height: "40px", color: "#25D366" }} />
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                                <div className="text-start ms-lg-5 mt-3">
                                    <h5 className="mb-4">Quick Links</h5>
                                    <p>
                                        <a href="/about" className="text-white text-decoration-none">
                                            <MdPlayArrow />
                                            <span>About Company</span>
                                        </a>
                                    </p>
                                    <p>
                                        <a href="/blogs" className="text-white text-decoration-none">
                                            <MdPlayArrow />
                                            <span>Blogs</span>
                                        </a>
                                    </p>
                                    <p>
                                        <a href="/services" className="text-white text-decoration-none">
                                            <MdPlayArrow />
                                            <span>Our Services</span>
                                        </a>
                                    </p>
                                    <p>
                                        <a href="/careers" className="text-white text-decoration-none">
                                            <MdPlayArrow />
                                            <span>Careers</span>
                                        </a>
                                    </p>
                                    <p>
                                        <a href="/contact" className="text-white text-decoration-none">
                                            <MdPlayArrow />
                                            <span>Contact</span>
                                        </a>
                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={5} xl={5}>
                                <div className="text-start touch get-touch rounded rounded-4">
                                    <div className="p-md-3">
                                        <div className="dark-blue" style={{ fontWeight: "600" }}>
                                            <h4 style={{ fontWeight: "600" }}>Get In Touch</h4>
                                            <p>We’d love to hear from you!</p>
                                        </div>
                                        <p>
                                            <FaPhone className="dark-blue" /> +91 93095 17500
                                        </p>
                                        <p>
                                            <FaRegClock className="dark-blue" /> Mon – Sat: 9:00 am – 7:00 pm, Sunday: CLOSED
                                        </p>
                                        <p>
                                            <IoLocationSharp className="dark-blue" /> 3rd Floor, C307, Amanora Chamber, Mall, Amanora Park Town, Hadapsar, Pune, Maharashtra 411002
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <p className="w-100 text-center copy-hide1">Copyright © 2025 FTFL Technology Pvt.Ltd | All rights reserved</p>
                            <Row className="text-start social2">
                                <Col>
                                    <p>Our Socials</p>
                                    <div className="d-flex">
                                        <div className="touch rounded rounded-circle me-3" style={{ width: "40px", height: "40px" }}>
                                            <a href="#" className="text-white text-decoration-none">
                                                <FaFacebookF className="p-2" style={{ width: "40px", height: "40px", color: "#1877F2" }} />
                                            </a>
                                        </div>
                                        <div className="touch rounded rounded-circle me-3" style={{ width: "40px", height: "40px" }}>
                                            <a href="#" className="text-white text-decoration-none">
                                                <GrInstagram className="p-2" style={{ width: "40px", height: "40px", color: "#E4405F" }} />
                                            </a>
                                        </div>
                                        <div className="touch rounded rounded-circle me-3" style={{ width: "40px", height: "40px" }}>
                                            <a href="#" className="text-white text-decoration-none">
                                                <FaLinkedinIn className="p-2" style={{ width: "40px", height: "40px", color: "#0077B5" }} />
                                            </a>
                                        </div>
                                        <div className="touch rounded rounded-circle me-3" style={{ width: "40px", height: "40px" }}>
                                            <a href="#" className="text-white text-decoration-none">
                                                <ImWhatsapp className="p-2" style={{ width: "40px", height: "40px", color: "#25D366" }} />
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <p className="w-100 text-center mt-3 copy-hide">Copyright © 2025 FTFL Technology Pvt.Ltd | All rights reserved</p>
                            </Row>
                        </Row>
                    </div>
                </Container>
                <div>
                    <Row>
                        <img src={footer} className="footer img-fluid w-100" alt="Footer" style={{ marginBottom: 0 }} />
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Footer;