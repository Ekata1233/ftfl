import HeaderNav from "../HeaderNav/HederNav"
import carrers from '../../assets/Rectangle 3847.png'
import Blogbg from '../../assets/contact-bg.png'
import { Button, Col, Form, Row } from "react-bootstrap"
import '../ContactUS/ContactUs.css'
import { FiMail } from "react-icons/fi"
import { FaPhoneAlt } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5"
import girlboy from '../../assets/conatctgirl-boy.png'
import frame from '../../assets/Frame 2.png'

function ConatctUS() {
    return (
        <div>
            <div className="overlay-nav overlay-nav1">
                <HeaderNav />
            </div>
            <div>
                <div className="flex-grow-1" style={{ backgroundColor: "#FAFAFA" }}>
                    {/* Carousel Section */}
                    <div className="carousel-container about position-relative text-center">
                        <img src={carrers} className="img-fluid w-100 con-img" alt="Slide 1" />

                    </div>

                    {/* Additional Content */}
                    <div className="text-center my-5" >
                        <p>
                            <span className='text-dark' style={{ fontWeight: "400", fontSize: "45px" }}>Contact</span>
                            <span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}>Us</span>
                        </p>
                        <p className="text-secondary pb-5">Any question or remarks? Just write us a message!</p>
                    </div>
                    <div className='ConatactUS-wrapper'>
                        <div className=" ConatactUS-div">
                            <img src={Blogbg} alt="Background" className="w-100 bg-contact " />
                            <div className='Contact-Container bg-white p-5 rounded rounded-5 border border-1'>
                                <Row>
                                    <Col sx={12} sm={12} md={12} lg={5} xl={4} xxl={4}>
                                        <div className="contact-container">
                                            <img src={frame} alt="Background" className="contact-image img-fluid" />
                                            <div className="contact-text">
                                                <p className="contact-title pt-4">Contact Information</p>
                                                <p className="text pb-4 " style={{ lineHeight: "10px" }}>Get in touch with us!</p>
                                                <p className="text ">
                                                    <FaPhoneAlt className="icon" /> +91930995 17500
                                                </p>
                                                <p className="text ">
                                                    <FiMail className="icon" /> info@ftfltechnology.com
                                                </p>
                                                <p className="text ">
                                                    <IoLocationSharp className="icon" /> 3rd Floor, 307 Amanora Chamber, Amanora Mall, Hadapsar Pune-411028
                                                </p>
                                                <img src={girlboy} className="img-fluid  girboy-img" alt="Girl and Boy" />
                                            </div>
                                        </div>

                                    </Col>
                                    <Col sx={12} sm={12} md={12} lg={7} xl={8} xxl={8}>
                                        <div>
                                            <Form>
                                                <Row className="pt-4">
                                                    <Col sx={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="pb-5">
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Label>First Name</Form.Label>
                                                            <Form.Control type="email" placeholder="first name" className="custom-input" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col sx={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="pb-5">
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                                            <Form.Label>Last Name</Form.Label>
                                                            <Form.Control type="email" placeholder="last name" className="custom-input" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col sx={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="pb-5">
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                                            <Form.Label>Email address</Form.Label>
                                                            <Form.Control type="email" placeholder="email address" className="custom-input" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col sx={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="pb-5">
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                                            <Form.Label>Phone Number</Form.Label>
                                                            <Form.Control type="email" placeholder="phone no." className="custom-input" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col sx={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Example textarea</Form.Label>
                                                    <Form.Control as="textarea" className="rounded rounded-5 border border-2" rows={3} />
                                                </Form.Group>
                                                    </Col>
                                                    
                                                    
                                                    <Col sx={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                                    <Button className="rounded rounded-3 w-100 blue-btn py-2 mt-3" style={{border:"none"}} >Submit</Button>
                                                    </Col>
                                                </Row>
                                                
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ConatctUS