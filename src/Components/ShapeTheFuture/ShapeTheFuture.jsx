import { Button, Col, Container, Row } from "react-bootstrap";
import shape from '../../assets/shape.png';
import { MdArrowForwardIos, MdKeyboardDoubleArrowRight } from "react-icons/md";
import Positions from "../Positions/Positions";
import { useLocation, useNavigate } from "react-router-dom";
import stayhome from '../../assets/Rectangle 3849.png';
import '../Blog/OurBLog/OurBlog.css';
import Testimonial from "../Testimonial/Testimonial";
import ai from '../../assets/ai.png';
import fronted from '../../assets/fronted.png';
import costeffective from '../../assets/costEffective.png';
import { useEffect, useRef } from "react";
import SEO from "../SEO";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function ShapeTheFuture() {
    const navigate = useNavigate();
    const location = useLocation();
    const shapeTheFutureRef = useRef(null);

    useEffect(() => {
        if (location.state?.scrollTo === "shape-the-future") {
            shapeTheFutureRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    const scrollVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div>
            <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
            <Container>
                <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                    <p className="text-center my-5 pt-lg-5">
                        <span className='text-dark' style={{ fontWeight: "400", fontSize: "45px" }}>Shape the </span>
                        <span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Future of Technology</span>
                    </p>
                    <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                    <p className="text-secondary text-center text">We’re looking for talented innovators, problem-solvers, and tech enthusiasts to join our dynamic team. Explore our career opportunities and grow with us! We value creativity, collaboration, and a passion for technology in all our team members. Join us and make an impact in the tech world!</p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                    <div className="d-flex justify-content-center my-5">
                   
                        <Button className="rounded rounded-5 px-5" style={{ backgroundColor: "#298CF424", color: "#298CF4", border: "1px solid #298CF4" }} onClick={() => navigate('/careers')}>View All Jobs</Button>
                    </div>
                    </motion.div>
                </motion.div>
            </Container>
            <Container className="mt-5 py-5">
                <Row>
                    <Col lg={6}>
                        <motion.img src={shape} className="img-fluid" initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }} />
                    </Col>
                    <Col>
                    
                        {["Competitive salaries & benefits", "Remote-friendly & hybrid work culture", "Learning & development programs", "Inclusive & diverse work environment"].map((text, index) => (
                            <motion.div key={index} className="pb-4" initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 0.8, delay: index * 0.2 }} viewport={{ once: false }}>
                                <MdKeyboardDoubleArrowRight className="blue" style={{ width: "40px", height: "40px" }} />
                                <span className="text text-secondary">{text}</span>
                            </motion.div>
                        ))}
                    </Col>
                </Row>
            </Container>
            <Container>
                <motion.div className="d-flex justify-content-between my-lg-5 pt-lg-5" initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                    <span className="text-start" style={{ fontSize: "28px", fontWeight: "500" }}>Current Openings</span>
                    <span className="text-end my-auto">
                        <a href="#" className="text-end" onClick={(e) => { e.preventDefault(); navigate("/careers", { state: { scrollTo: "job-listings" } }); }}>
                            <FaArrowRightLong className="blue" style={{ width: "50px", height: "35px" }} />
                        </a>
                    </span>
                </motion.div>
                <Positions />
            </Container>
            <Container>
                <motion.div className="text-start mt-5 pt-lg-5" initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                    <p>
                        <span className='text-dark' style={{ fontWeight: "400", fontSize: "40px" }}>Latest</span>
                        <span className="blue" style={{ fontWeight: "600", fontSize: "40px" }}> Blog</span>
                    </p>
                </motion.div>
            </Container>
            <Container className="pt-lg-5 my-5 pb-lg-5">
                <motion.p className="text-center" initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
                    <span className='text-dark' style={{ fontWeight: "400", fontSize: "45px" }}>Hear From </span>
                    <span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Our Happy Clients</span>
                </motion.p>
                <p className="text-center text-secondary text">Our clients share their stories and success with us.</p>
                <Testimonial />
            </Container>
        </div>
    );
}

export default ShapeTheFuture;
