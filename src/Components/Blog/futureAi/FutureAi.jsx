import { MdArrowForwardIos } from "react-icons/md"
import HeaderNav from "../../HeaderNav/HederNav"
import carrers from '../../../assets/Rectangle 3847.png'
import { NavLink } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import letest1 from '../../../assets/digitaltransformation.png'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import ai from '../../../assets/ai.png'
import fronted from '../../../assets/fronted.png'
import costeffective from '../../../assets/costEffective.png'
import { useEffect } from "react"

function FutureAi() {
    useEffect(() => {
        const scrollAnimation = () => {
            const elements = document.querySelectorAll(".animate-text");

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    } else {
                        entry.target.classList.remove("active"); // Uncomment if you want it to animate again when scrolling up
                    }
                });
            }, { threshold: 0.15 }); // Adjusted threshold for better trigger

            elements.forEach((el) => observer.observe(el));

            // Ensure first and last elements are checked manually on load
            setTimeout(() => {
                elements.forEach((el) => {
                    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
                        el.classList.add("active");
                    }
                });
            }, 300);
        };

        scrollAnimation();
    }, []);



    return (
        <div style={{ backgroundColor: "#FAFAFA" }} >
            <div className="overlay-nav overlay-nav1">
                <HeaderNav />
            </div>
            <div className="flex-grow-1" >
                <div className="carousel-container about position-relative text-center">
                    <img src={carrers} className="img-fluid w-100 con-img" alt="Slide 1" />

                </div>
            </div>
            <Container>
                <div className="mt-5 pt-5">
                    <p className="text text-secondary">
                        <NavLink
                            to="/blogs"
                            className="text-secondary"

                        >
                            Blog
                        </NavLink>
                        <MdArrowForwardIos style={{ margin: "0 5px" }} className="text-secondary" />
                        <NavLink to="/" className="text-secondary" state={{ scrollTo: "shape-the-future" }}>
                            Future of AI in Business
                        </NavLink>

                        <MdArrowForwardIos style={{ margin: "0 5px" }} className="text-secondary" />
                        <NavLink
                            to="/blogs/futureai/futureai"
                            className="blue"

                        >

                            Digital Transformation
                        </NavLink>
                    </p>
                </div>
                <Row className="animate-text">
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <img src={letest1} className="img-fluid my-5" />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                        <div>
                            <div className="blue-bg text-white rounded rounded-4 p-3">
                                <p className="text">Share with your community!</p>
                                <a href="https://www.facebook.com/FTFLTechnology" className="text-white text-decoration-none">
                                    <FaFacebookF className="p-2" style={{ width: "40px", height: "40px", color: "#1877F2" }} />
                                </a>
                                <a href="https://x.com/" className="text-white text-decoration-none">
                                    <FaXTwitter className="p-2" style={{ width: "40px", height: "40px", color: "black" }} />
                                </a>
                                <a href="https://www.linkedin.com/company/ftfl-technology-pvt-ltd/" className="text-white text-decoration-none">
                                    <FaLinkedinIn className="p-2" style={{ width: "40px", height: "40px", color: "#0077B5" }} />
                                </a>
                            </div>
                            <div>
                                <p style={{ fontSize: "25px", fontWeight: "600" }} className="pt-3 pb-3">In this article</p>
                                <p className="blue  blue-text " style={{ fontSize: '22px' }}>Introduction</p>
                                <p className="text ms-4">The Evolution of Digital Transformation</p>
                                <p className="text ms-4">Digital Transformation in Everyday Life
                                </p>
                                <p className="text ms-4">The Role of Digital Transformation in Business and Industry</p>
                                <p className="text ms-4">Digital Transformation in Healthcare</p>
                                <p className="text ms-4">The Future of Digital Transformation</p>
                                <p className="text ms-4">Conclusion: The Road Ahead</p>
                            </div>

                        </div>
                    </Col>
                </Row>
                <div>
                    <div className=" pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Introduction</p>
                        <p className="text text-secondary">Digital transformation in IT consulting is revolutionizing how businesses leverage technology to enhance operations, security, and innovation. IT consultants play a vital role in integrating automation, AI, cloud computing, and data analytics into business processes. By guiding organizations through technology adoption, IT consulting ensures efficiency, scalability, and competitiveness. As industries evolve, IT consulting helps businesses stay agile and adapt to digital advancements.</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">The Evolution of Digital Transformation in IT Consulting</p>
                        <p className="text text-secondary">IT consulting has shifted from traditional IT support to a strategic technology enabler. Initially, businesses focused on digitizing records and infrastructure, but advancements in AI, cloud computing, and IoT have expanded the scope. Today, IT consultants help organizations implement automation, cybersecurity frameworks, and data-driven strategies. The continuous evolution of IT consulting ensures that businesses remain future-ready and aligned with technological progress.</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Digital Transformation in Everyday IT Consulting</p>
                        <p className="text text-secondary">IT consultants integrate digital tools into daily business operations, enhancing productivity and security. Cloud-based solutions enable remote work, AI-driven automation streamlines workflows, and data analytics improve decision-making. Cybersecurity consulting ensures protection against digital threats, while software modernization keeps businesses technologically up to date. Digital transformation in IT consulting helps companies optimize efficiency and stay competitive.
                        </p>
                    </div>
                </div>


                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">The Role of Digital Transformation in IT Consulting for Businesses
                        </p>
                        <p className="text text-secondary">IT consulting is essential for organizations looking to leverage technology for growth and efficiency. Consultants guide businesses through cloud migration, digital security enhancements, and AI-driven automation. Industries like finance, retail, and manufacturing depend on IT consulting for optimizing IT infrastructure and improving digital experiences. By aligning technology strategies with business objectives, IT consulting enhances scalability, agility, and operational success.</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Digital Transformation in IT Consulting for Healthcare</p>
                        <p className="text text-secondary">Healthcare IT consulting is transforming patient care by implementing secure and efficient digital solutions. Consultants assist in deploying electronic health records (EHRs), telehealth platforms, and AI-powered diagnostics. Cybersecurity consulting ensures compliance with healthcare regulations and safeguards sensitive patient data. IT consulting also enables predictive analytics for disease prevention and personalized treatment plans, improving healthcare accessibility and efficiency.</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">The Future of Digital Transformation in IT Consulting</p>
                        <p className="text text-secondary">The future of IT consulting lies in AI-driven automation, advanced cybersecurity, hybrid cloud solutions, and 5G connectivity. Businesses will increasingly depend on consultants for blockchain security, edge computing integration, and intelligent data analytics. The rise of IoT and remote work solutions will drive the demand for scalable IT infrastructure. As digital transformation accelerates, IT consulting will continue to be a critical enabler of innovation and technological adaptation.</p>
                    </div>
                </div>

                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Conclusion: The Road Ahead</p>
                        <p className="text text-secondary">Digital transformation in IT consulting is essential for businesses striving to stay ahead in a rapidly evolving technological landscape. IT consultants play a crucial role in helping organizations implement emerging technologies, from AI and cloud computing to cybersecurity and automation. To thrive in a digital-first world, businesses must embrace IT consulting for efficiency, security, and innovation. As technology advances, IT consulting will remain a key driver of digital success and business sustainability.</p>
                    </div>
                </div>
                <div className="text-start mt-5 pt-5" >

                </div>

            </Container>
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
        </div>
    )
}

export default FutureAi