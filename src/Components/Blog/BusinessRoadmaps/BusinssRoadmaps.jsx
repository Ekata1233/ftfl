import { MdArrowForwardIos } from "react-icons/md"
import HeaderNav from "../../HeaderNav/HederNav"
import carrers from '../../../assets/Rectangle 3847.png'
import { NavLink } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import letest1 from '../../../assets/roadmaps.png'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import ai from '../../../assets/ai.png'
import fronted from '../../../assets/fronted.png'
import costeffective from '../../../assets/costEffective.png'
import { useEffect } from "react"
function BusinssRoadmaps() {
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
                        <NavLink
                            to="/blogs"
                            className="text-secondary"
                            state={{ scrollTo: "it-consultation" }}  // Add this
                        >
                            Some more on IT Consultation
                        </NavLink>
                        <MdArrowForwardIos style={{ margin: "0 5px" }} className="text-secondary" />
                        <NavLink
                            to="/blogs/itconsultation/businessroadmaps"
                            className="blue"

                        >

                            Business Roadmaps     
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
                               
                                <p className="text ms-4">Aligning IT with Business Goals
                                </p>
                                <p className="text ms-4">Cost Management and Resource Optimization</p>
                                <p className="text ms-4">Ensuring Scalability and Future Growth
                                </p>
                                <p className="text ms-4">Improving Cybersecurity and Compliance</p>
                                <p className="text ms-4">The Future of IT Roadmaps</p>
                                <p className="text ms-4">Conclusion: The Road Ahead</p>
                            </div>

                        </div>
                    </Col>
                </Row>
                <div>
                    <div className=" pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Introduction</p>
                        <p className="text text-secondary">An IT roadmap is a strategic plan that outlines an organization’s technology goals, infrastructure upgrades, and digital transformation initiatives. It helps businesses align their IT strategies with long-term objectives, ensuring smooth operations, cost optimization, and innovation. With rapid technological advancements, businesses must adopt structured IT roadmaps to stay competitive, mitigate risks, and enhance productivity.</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Aligning IT with Business Goals</p>
                        <p className="text text-secondary">                        <p className="text text-secondary">IT roadmaps help organizations integrate technology solutions that support overall business objectives. Whether improving customer experience, enhancing security, or optimizing internal processes, an IT roadmap ensures that technology investments align with business priorities. It enables decision-makers to allocate resources efficiently and avoid unnecessary expenditures.</p>
                        </p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Cost Management and Resource Optimization</p>
                        <p className="text text-secondary">Without a clear IT roadmap, businesses risk overspending on unnecessary technology upgrades or failing to invest in critical infrastructure. IT roadmaps provide a structured approach to budget planning, ensuring cost-effective technology adoption. They also help organizations allocate human and financial resources strategically, maximizing ROI.
                        </p>
                    </div>
                </div>


                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Ensuring Scalability and Future Growth

                        </p>
                        <p className="text text-secondary">As businesses expand, IT requirements change. An IT roadmap helps organizations scale their technology infrastructure to support growth without disruptions. Whether launching new digital products, expanding to new markets, or adopting emerging technologies, a roadmap provides a clear pathway for sustainable IT development</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Improving Cybersecurity and Compliance</p>
                        <p className="text text-secondary">IT roadmaps incorporate cybersecurity strategies and compliance measures to protect businesses from cyber threats and regulatory risks. With data protection laws becoming more stringent, businesses must have a roadmap that includes risk assessments, data encryption, and proactive security updates. A roadmap ensures that IT security remains a top priority.

</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">The Future of IT Roadmaps</p>
                        <p className="text text-secondary">The future of IT roadmaps lies in AI-driven analytics, real-time updates, and agile methodologies. Businesses will rely on predictive modeling to anticipate technological shifts and adjust their IT strategies accordingly. Cloud-based IT roadmaps will enable seamless collaboration across teams, ensuring flexibility and innovation.</p>
                    </div>
                </div>

                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Conclusion: The Road Ahead</p>
                        <p className="text text-secondary">IT roadmaps are essential for businesses to navigate technological changes, optimize resources, and achieve long-term success. By adopting a well-defined IT roadmap, organizations can enhance efficiency, improve security, and drive innovation. As technology continues to evolve, businesses must continuously refine their IT strategies to stay competitive and future-ready.

                        </p>
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

export default BusinssRoadmaps