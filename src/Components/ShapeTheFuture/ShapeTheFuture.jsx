import { Button, Col, Container, Row } from "react-bootstrap"
import shape from '../../assets/shape.png'
import { MdArrowForwardIos, MdKeyboardDoubleArrowRight } from "react-icons/md"
import Positions from "../Positions/Positions"
import { useLocation, useNavigate } from "react-router-dom"
import stayhome from '../../assets/Rectangle 3849.png'
import '../Blog/OurBLog/OurBlog.css'
import Testimonial from "../Testimonial/Testimonial"
import ai from '../../assets/ai.png'
import fronted from '../../assets/fronted.png'
import costeffective from '../../assets/costEffective.png'
import { useEffect, useRef } from "react"
import SEO from "../SEO"



function ShapeTheFuture() {
    const navigate = useNavigate()
    const location = useLocation();
    const shapeTheFutureRef = useRef(null);

    useEffect(() => {
        if (location.state?.scrollTo === "shape-the-future") {
            shapeTheFutureRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    return (
        <div>
            <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
            <Container>
                <div>
                    <p className="text-center my-5 pt-5">
                        <span className='text-dark' style={{ fontWeight: "400", fontSize: "45px" }}>Shape the </span>
                        <span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Future of Technology</span>
                    </p>
                    <p className="text-secondary text-center text">We’re looking for talented innovators, problem-solvers, and tech enthusiasts to join our dynamic team. Explore our career opportunities and grow with us! We value creativity, collaboration, and a passion for technology in all our team members. Join us and make an impact in the tech world!</p>
                    <div className="d-flex justify-content-center my-5">
                        <Button className="rounded rounded-5 px-5" style={{ backgroundColor: "#298CF424", color: "#298CF4", border: "1px solid #298CF4" }} onClick={() => navigate('/careers')}>View All Jobs</Button>
                    </div>
                </div>
            </Container>
            <Container className="mt-5 py-5">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <img src={shape} className="img-fluid" />
                    </Col>
                    <Col>
                        <div className="pt-4 pb-4">
                            <MdKeyboardDoubleArrowRight className="blue" style={{ width: "40px", height: "40px" }} />
                            <span className="text text-secondary">Competitive salaries & benefits</span>
                        </div>
                        <div className="pb-4">
                            <MdKeyboardDoubleArrowRight className="blue" style={{ width: "40px", height: "40px" }} />
                            <span className="text text-secondary">Remote-friendly & hybrid work culture</span>
                        </div>
                        <div className="pb-4">
                            <MdKeyboardDoubleArrowRight className="blue" style={{ width: "40px", height: "40px" }} />
                            <span className="text text-secondary">Learning & development programs</span>
                        </div>
                        <div className="pb-4">
                            <MdKeyboardDoubleArrowRight className="blue" style={{ width: "40px", height: "40px" }} />
                            <span className="text text-secondary">Inclusive & diverse work environment</span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="d-flex justify-content-between my-5 pt-5">
                    <span className="text-start" style={{ fontSize: "34px", fontWeight: "500" }}>Current Openings</span>
                    <span className="text-end">
                        <a
                            href="#"
                            className="text-end"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/careers", { state: { scrollTo: "job-listings" } });
                            }}
                        >
                            View All
                        </a>

                    </span>
                </div>
                <Positions />
            </Container>
            <div className="carousel-container about position-relative text-start w-100 py-5 my-5" >
                <img src={stayhome} className="img-fluid w-100 about-img" alt="Slide 1" />
                <div ref={shapeTheFutureRef} className="position-absolute translate-middle py-4 my-4 mx-3 header-content w-100 ps-3 " >
                    <p  className="text-white text"></p>
                    <h1 className="text-white fw-bold my-4  h1">
                        Stay Updated with the Latest Insights
                    </h1>
                    <p className="text-white header-p" style={{ fontSize: "30px", fontWeight: "600" }}>The Future of AI in Business </p>
                    <p  className="text-white header-p">
                        How artificial intelligence is transforming industries.?
                    </p>

                    <Button variant="" className="mt-4 blue-btn text-white" ref={shapeTheFutureRef} onClick={() => navigate("/blogs/futureai/futureai")}>
                        Read More <MdArrowForwardIos />
                    </Button>
                </div>

            </div>
            <Container>
                <div className="text-start mt-5 pt-5 " >
                    <p>
                        <span className='text-dark' style={{ fontWeight: "400", fontSize: "40px" }}>Latest</span>
                        <span className="blue" style={{ fontWeight: "600", fontSize: "40px" }}>  Blog</span>
                    </p>
                </div>                <Row className="py-5">
                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='my-4'>
                        <div className='p-4 rounded rounded-5 blog-div' style={{
                            border: "",

                        }}>
                            <div className='blog-div1'>
                                <img src={ai} className='w-100 img-fluid' />
                                <p className='mt-4 mb-2' style={{ fontSize: "22px ", fontWeight: "500" }}>AI & Machine Learning: The Next Big Leap</p>
                                <p className='text text-secondary'>Discover how AI is transforming industries and what’s next in automation.</p>
                            </div>

                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='my-4'>
                        <div className='p-4 rounded rounded-5 blog-div' style={{
                            border: "",

                        }}>
                            <div className='blog-div1'>
                                <img src={fronted} className='w-100 img-fluid' />
                                <p className='mt-4 mb-2' style={{ fontSize: "22px ", fontWeight: "500" }}>Frontend vs. Backend: What You Need to Know</p>
                                <p className='text text-secondary'>A breakdown of web development roles and best practices.</p>
                            </div>

                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='my-4'>
                        <div className='p-4 rounded rounded-5 blog-div' style={{
                            border: "",

                        }}>
                            <div className='blog-div1'>
                                <img src={costeffective} className='w-100' />
                                <p className='mt-4 mb-2' style={{ fontSize: "22px ", fontWeight: "500" }}>Cost-Effective IT Solutions for Startups</p>
                                <p className='text text-secondary'> Discover smart IT investments to grow your business on a budget.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="pt-5 my-5 pb-5">
                <p className="text-center">
                    <span className='text-dark' style={{ fontWeight: "400", fontSize: "45px" }}>Hear From </span>
                    <span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Our Happy Clients</span>
                </p>
                <p className="text-center text-secondary text">Our clients share their stories and success with us.</p>
                <Testimonial />
            </Container>

        </div>
    )
}

export default ShapeTheFuture