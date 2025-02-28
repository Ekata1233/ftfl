import React, { useState } from 'react';
import { Button, Col, Row, Spinner } from "react-bootstrap"; // Import Spinner
import newsletter from '../../assets/newletter.png';
import Form from 'react-bootstrap/Form';
import '../Blog/OurBLog/OurBlog.css';
import SEO from '../SEO';

function NewsLetter() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // State for loading

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading to true

        try {
            const response = await fetch('https://ftfl-backend.vercel.app/api/newsletter/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.status === 200) {
                setMessage('Thank you for subscribing!');
                setTimeout(() => {
                    window.location.reload(); // Refresh the page after 2 seconds
                }, 2000);
            } else if (response.status === 400) {
                setMessage('This email is already subscribed.');
            } else {
                setMessage('Something went wrong. Please try again later.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        } finally {
            setIsLoading(false); // Set loading to false
        }
    };

    return (
        <div className="pt-5 mt-5">
            <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
            <div className="rounded rounded-5 py-5 my-5 newslet" style={{ border: "1px solid #298CF3", boxShadow: "0px 0px 10px #00000040" }}>
                <Row className="m-5 py-5">
                    <Col>
                        <div>
                            <img src={newsletter} className="newsletter" alt="newsletter" />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p className="fw-bold" style={{ fontSize: '30px' }}>Get our weekly</p>
                            <h1 style={{ color: " #298CF3", fontWeight: "700" }}>NEWSLETTER</h1>
                            <p className="mt-4 text">
                                <span className="fw-bold">The World at a Glance</span> <br />
                                Stay informed with the latest stories, trends, and insights from around the globe—straight to your inbox.
                                <br /> <span className="fw-bold">Subscribe now!</span>
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Form onSubmit={handleSubmit}>
                            <Row className="g-2">
                                <Col xs={12} sm={12} md={8}>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email Address"
                                        className="py-3"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Col>
                                <Col xs={12} sm={12} md={4} className="text-md-start text-center">
                                    <Button
                                        type="submit"
                                        className="text-white px-5 py-3 w-100"
                                        style={{ backgroundColor: "#529FEF", border: "none" }}
                                        disabled={isLoading} // Disable button when loading
                                    >
                                        {isLoading ? (
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                                className="me-2"
                                            />
                                        ) : null}
                                        {isLoading ? "Subscribing..." : "Subscribe"}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                        {message && <p className="mt-3 text-center">{message}</p>}
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default NewsLetter;