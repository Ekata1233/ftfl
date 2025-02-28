import React, { useState } from "react";
import HeaderNav from "../HeaderNav/HederNav";
import carrers from '../../assets/Rectangle 3847.png';
import Blogbg from '../../assets/contact-bg.png';
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import '../ContactUS/ContactUs.css';
import { FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import girlboy from '../../assets/conatctgirl-boy.png';
import frame from '../../assets/Frame 2.png';
import SEO from "../SEO";

function ContactUS() {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    // State to manage API response
    const [response, setResponse] = useState(null);

    // State to manage form submission loading state
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Start loading

        try {
            // Send form data to the API
            const res = await fetch("https://ftfl-backend.vercel.app/api/contact/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            setResponse(data); // Set the API response

            // Clear the form after successful submission
            if (res.ok) {
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResponse({ message: "An error occurred while submitting the form." });
        } finally {
            setIsSubmitting(false); // Stop loading
        }
    };

    return (
        <div>
              <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
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
                    <div className="text-center my-5">
                        <p>
                            <span className='text-dark' style={{ fontWeight: "400", fontSize: "45px" }}>Contact</span>
                            <span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}>Us</span>
                        </p>
                        <p className="text-secondary pb-5">Any question or remarks? Just write us a message!</p>
                    </div>

                    {/* Contact Form Section */}
                    <div className='ConatactUS-wrapper'>
                        <div className="ConatactUS-div">
                            <img src={Blogbg} alt="Background" className="w-100 bg-contact" />
                            <div className='Contact-Container bg-white p-sm-4 p-md-4 p-lg-5  rounded rounded-5 border border-1 '>
                                <Row>
                                    {/* Contact Information Column */}
                                    <Col sx={12} sm={12} md={12} lg={5} xl={4} xxl={4}>
                                        <div className="contact-container">
                                            <img src={frame} alt="Background" className="contact-image img-fluid" />
                                            <div className="contact-text">
                                                <p className="contact-title pt-4 ">Contact Information</p>
                                                <p className="text pb-4" style={{ lineHeight: "10px" }}>Get in touch with us!</p>
                                                <p className="text">
                                                    <FaPhoneAlt className="icon" /> +91930995 17500
                                                </p>
                                                <p className="text">
                                                    <FiMail className="icon" /> info@ftfltechnology.com
                                                </p>
                                                <p className="text">
                                                    <IoLocationSharp className="icon" /> 3rd Floor, 307 Amanora Chamber, Amanora Mall, Hadapsar Pune-411028
                                                </p>
                                                <img src={girlboy} className="img-fluid girboy-img" alt="Girl and Boy" />
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Contact Form Column */}
                                    <Col sx={12} sm={12} md={12} lg={7} xl={8} xxl={8}>
                                        <Form onSubmit={handleSubmit}>
                                            <Row className="pt-4">
                                                <Col sx={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="pb-5">
                                                    <Form.Group className="mb-3" controlId="firstName">
                                                        <Form.Label>First Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="firstName"
                                                            placeholder="First Name"
                                                            value={formData.firstName}
                                                            onChange={handleInputChange}
                                                            className="custom-input"
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col sx={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="pb-5">
                                                    <Form.Group className="mb-3" controlId="lastName">
                                                        <Form.Label>Last Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="lastName"
                                                            placeholder="Last Name"
                                                            value={formData.lastName}
                                                            onChange={handleInputChange}
                                                            className="custom-input"
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col sx={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="pb-5">
                                                    <Form.Group className="mb-3" controlId="email">
                                                        <Form.Label>Email Address</Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            name="email"
                                                            placeholder="Email Address"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            className="custom-input"
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col sx={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="pb-5">
                                                    <Form.Group className="mb-3" controlId="phone">
                                                        <Form.Label>Phone Number</Form.Label>
                                                        <Form.Control
                                                            type="tel"
                                                            name="phone"
                                                            placeholder="Phone Number"
                                                            value={formData.phone}
                                                            onChange={handleInputChange}
                                                            className="custom-input"
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col sx={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                                    <Form.Group className="mb-3" controlId="message">
                                                        <Form.Label>Message</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            name="message"
                                                            rows={3}
                                                            placeholder="Your Message"
                                                            value={formData.message}
                                                            onChange={handleInputChange}
                                                            className="rounded rounded-5 border border-2"
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col sx={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                                    <Button
                                                        type="submit"
                                                        className="rounded rounded-3 w-100 blue-btn py-2 mt-3"
                                                        style={{ border: "none" }}
                                                        disabled={isSubmitting} // Disable button while submitting
                                                    >
                                                        {isSubmitting ? (
                                                            <Spinner
                                                                as="span"
                                                                animation="border"
                                                                size="sm"
                                                                role="status"
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            "Submit"
                                                        )}
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Form>

                                        {/* Display API response */}
                                        {response && (
                                            <div className="mt-4 text-center">
                                                <p className={response.message.includes("successfully") ? "text-success" : "text-danger"}>
                                                    {response.message}
                                                </p>
                                            </div>
                                        )}
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUS;