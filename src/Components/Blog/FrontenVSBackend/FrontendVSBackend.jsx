
import { MdArrowForwardIos } from "react-icons/md"
import HeaderNav from "../../HeaderNav/HederNav"
import carrers from '../../../assets/Rectangle 3847.png'
import { NavLink } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import letest1 from '../../../assets/web&mobilee.png'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import ai from '../../../assets/ai.png'
import fronted from '../../../assets/fronted.png'
import costeffective from '../../../assets/costEffective.png'
import { useEffect } from "react"
function FrontendVSBackend() {
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
                            state={{ scrollTo: "web-mobile-development" }}  // Add this
                        >
                            Web & Mobile Development
                        </NavLink>
                        <MdArrowForwardIos style={{ margin: "0 5px" }} className="text-secondary" />
                        <NavLink
                            to="/blogs/web-&-mobile-development/frontendVsbackend"
                            className="blue"

                        >

                            Frontend vs. Backend
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
                                <p className="text ms-4">The Evolution of Frontend & Backend Development</p>
                                <p className="text ms-4">Frontend & Backend in Everyday DevelopmentLife</p>
                                <p className="text ms-4">The Role of Frontend & Backend in Business Applications</p>
                                <p className="text ms-4">Frontend & Backend in Modern Web & Mobile Apps</p>
                                <p className="text ms-4">The Future of Frontend & Backend Development</p>
                                <p className="text ms-4">Conclusion : The Road Ahead</p>
                            </div>

                        </div>
                    </Col>
                </Row>
                <div>
                    <div className=" pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Introduction</p>
                        <p className="text text-secondary">Frontend and backend development are the two core components of web and mobile applications. The frontend focuses on user interface and experience, while the backend handles data processing, business logic, and server-side operations. Both play a crucial role in delivering seamless, responsive, and scalable applications. As technology evolves, the distinction between frontend and backend continues to blur with the rise of full-stack development. Understanding the differences and collaboration between the two is essential for building modern applications.</p>
                    </div>
                </div>
                <div>
                    <div className=" pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">The Evolution of Frontend & Backend Development</p>
                        <p className="text text-secondary">Frontend and backend development have evolved significantly with advancements in web technologies and frameworks. Earlier, websites relied on basic HTML, CSS, and JavaScript, while backends were managed with PHP and simple databases. Today, modern frontend frameworks like React, Angular, and Vue.js offer dynamic user experiences, while backend technologies like Node.js, Django, and Spring Boot ensure high performance. The adoption of APIs, cloud computing, and microservices architecture has further enhanced both frontend and backend scalability.</p>
                    </div>
                </div>

                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Frontend & Backend in Everyday Development</p>
                        <p className="text text-secondary">Frontend and backend work together to create interactive, responsive, and functional applications. The frontend ensures smooth navigation, appealing design, and real-time interactions, while the backend handles databases, authentication, and business logic. Developers use RESTful APIs and GraphQL to connect both layers efficiently. From social media platforms to e-commerce sites, the seamless collaboration between frontend and backend enhances user engagement and functionality.</p>
                    </div>
                </div>

                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">The Role of Frontend & Backend in Business Applications
                        </p>
                        <p className="text text-secondary">Businesses rely on frontend development for customer engagement, accessibility, and branding, while backend development ensures data security, scalability, and automation. Progressive Web Apps (PWAs) and Single Page Applications (SPAs) have improved performance and user experience. Backend services integrate AI, cloud computing, and analytics to optimize business operations. As businesses transition to digital platforms, both frontend and backend development remain key to their success.

                        </p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Frontend & Backend in Modern Web & Mobile Apps</p>
                        <p className="text text-secondary">Modern web and mobile applications require a balance between frontend and backend for seamless functionality. Frontend frameworks like React Native and Flutter enable cross-platform compatibility, while backend solutions like Firebase and AWS amplify performance and security. Microservices and serverless architectures allow backend systems to scale independently, ensuring flexibility. API-driven development bridges the gap between frontend and backend, making applications more efficient and responsive</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">The Future of Frontend & Backend Development
                        </p>
                        <p className="text text-secondary">The future of frontend and backend development lies in automation, AI-driven interfaces, and cloud-native applications. Low-code and no-code platforms are simplifying frontend development, while backend operations are increasingly shifting to serverless computing. WebAssembly (WASM) and edge computing will enhance frontend performance, while AI-driven APIs will streamline backend processes. As technology advances, the integration of frontend and backend will become more seamless, driving innovation.</p>
                    </div>
                </div>

                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Conclusion: The Road Ahead</p>
                        <p className="text text-secondary">Frontend and backend development will continue evolving with advancements in frameworks, cloud computing, and AI. Businesses and developers must adapt to emerging technologies to build scalable, high-performance applications. The collaboration between frontend and backend will remain essential for delivering seamless digital experiences. With growing emphasis on automation, security, and efficiency, the future of web and mobile development looks promising.</p>
                    </div>
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

export default FrontendVSBackend