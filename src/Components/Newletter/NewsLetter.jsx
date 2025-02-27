import { Button, Col,  Row } from "react-bootstrap"
import newsletter from '../../assets/newletter.png'
import Form from 'react-bootstrap/Form';
import '../Blog/OurBLog/OurBlog.css'
function NewsLetter() {
    return (
        <div className="pt-5 mt-5">
            <div className="rounded rounded-5 py-5 my-5 newslet" style={{ border: "1px solid #298CF3", boxShadow: "0px 0px 10px #00000040" }}>
                <Row className="m-5 py-5">
                    <Col>
                        <div>
                            <img src={newsletter} className="newsletter" />
                        </div>

                    </Col>
                    <Col>
                        <div>
                            <p className="fw-bold" style={{ fontSize: '30px' }}>Get our weekly</p>
                            <h1 style={{ color: " #298CF3", fontWeight: "700" }}>NEWSLETTER</h1>
                            <p className="mt-4 text"><span className="fw-bold">The World at a Glance</span> <br></br>
                                Stay informed with the latest stories, trends, and insights from around the globe—straight to your inbox.
                                <br></br> <span className="fw-bold">
                                    Subscribe now!
                                </span></p>
                        </div>

                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Form>
                            <Row className="g-2">
                                <Col xs={12} sm={12} md={8}>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email Address"
                                        className="py-3"
                                    />
                                </Col>
                                <Col xs={12} sm={12} md={4} className="text-md-start text-center">
                                    <Button
                                        className="text-white px-5 py-3 w-100"
                                        style={{ backgroundColor: "#529FEF", border: "none" }}
                                    >
                                        Subscribe
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default NewsLetter