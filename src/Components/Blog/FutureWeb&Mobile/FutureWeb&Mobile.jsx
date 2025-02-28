import { MdArrowForwardIos } from "react-icons/md"
import HeaderNav from "../../HeaderNav/HederNav"
import carrers from '../../../assets/Rectangle 3847.png'
import { NavLink } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import letest1 from '../../../assets/futureweb&mobile.png'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import ai from '../../../assets/ai.png'
import fronted from '../../../assets/fronted.png'
import costeffective from '../../../assets/costEffective.png'
import { useEffect } from "react"
import SEO from "../../SEO"
function FutureWebMobile() {
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
             <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
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
                            state={{ scrollTo: "latest-tech-trends" }}  // Add this
                        >
                            Latest Tech Trends
                        </NavLink>
                        <MdArrowForwardIos style={{ margin: "0 5px" }} className="text-secondary" />
                        <NavLink
                            to="/blogs/latest-tech-trends/web&mobile"
                            className="blue"

                        >
                            Web & Mobile
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
                                <p className="text ms-4">The Evolution of Web & Mobile Apps</p>
                                <p className="text ms-4">Web & Mobile Apps in Everyday Life</p>
                                <p className="text ms-4">The Future of Web & Mobile Apps</p>
                                <p className="text ms-4">Web & Mobile Apps in Healthcare</p>
                                <p className="text ms-4">The Future of Web & Mobile Apps</p>
                                <p className="text ms-4">Conclusion : The Road Ahead</p>
                            </div>

                        </div>
                    </Col>
                </Row>
                <div>
                    <div className=" pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Introduction</p>
                        <p className="text text-secondary">Web and mobile apps have revolutionized how people access information, services, and entertainment. Advancements in AI, cloud computing, and 5G have made them faster, smarter, and more efficient. Businesses use these apps to enhance customer experiences, streamline operations, and drive innovation. As technology evolves, web and mobile apps will continue to shape the digital future.</p>
                    </div>
                </div>
                <div>
                    <div className=" pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">The Evolution of Web & Mobile Apps</p>
                        <p className="text text-secondary">Web and mobile apps have evolved from simple static pages to dynamic, cloud-powered solutions with high scalability. Early applications had limited functionality, but advancements in cloud computing, AI, and 5G have transformed them. Modern apps now offer real-time collaboration, AI-driven personalization, and seamless user experiences. Progressive Web Apps (PWAs) and hybrid frameworks further enhance performance across platforms. As technology advances, apps will become smarter, more adaptive, and essential in everyday life.</p>
                    </div>
                </div>

                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Web & Mobile Apps in Everyday Life</p>
                        <p className="text text-secondary">Web and mobile apps have become a crucial part of daily life, influencing communication, shopping, work, and entertainment. Social media, e-commerce, and streaming platforms provide seamless, real-time interactions across multiple devices. AI-driven assistants, voice search, and cloud integration improve accessibility and personalization. Digital payments, remote work apps, and smart home automation enhance convenience. With continuous innovation, apps will become more intelligent, secure, and user-friendly.</p>
                    </div>
                </div>

                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">The Role of Web & Mobile Apps in Business and Industry
                        </p>
                        <p className="text text-secondary">Businesses rely on web and mobile apps to improve customer engagement, automate operations, and enhance efficiency. Industries like e-commerce, banking, and logistics use AI-powered apps for real-time tracking, transactions, and customer support. Cloud-based enterprise solutions support remote work, collaboration, and data-driven decision-making. Progressive and native applications help companies scale with minimal infrastructure costs. As digital transformation accelerates, businesses will continue investing in innovative and scalable applications.

</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Web & Mobile Apps in Healthcare</p>
                        <p className="text text-secondary">Healthcare apps are revolutionizing patient care with telemedicine, AI-assisted diagnostics, and real-time monitoring. Virtual consultations make healthcare more accessible, reducing the need for in-person visits. Wearable devices sync with mobile apps to track vital signs and promote proactive health management. Cloud-based electronic health records (EHRs) ensure seamless data sharing for better treatment and efficiency. As technology advances, healthcare apps will become more secure, scalable, and widely adopted.</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">The Future of Web & Mobile Apps</p>
                        <p className="text text-secondary">Emerging technologies like AI, 5G, blockchain, and edge computing will define the next generation of web and mobile apps. Faster internet speeds will improve gaming, streaming, and virtual collaboration by reducing latency. AI-driven automation will enhance personalization, security, and predictive analytics for better user experiences. PWAs will continue bridging the gap between web and mobile, offering lightweight yet powerful applications. With a focus on efficiency, security, and user privacy, web and mobile apps will continue to reshape digital interactions.</p>
                    </div>
                </div>
             
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Conclusion: The Road Ahead</p>
                        <p className="text text-secondary">Web and mobile apps will keep evolving, driving innovation and transforming industries worldwide. AI, cloud computing, and 5G will enable more intelligent, faster, and secure applications. Businesses will continue leveraging apps for automation, digital transformation, and enhanced customer experiences. Security, data privacy regulations, and ethical AI practices will shape future app development. As technology advances, web and mobile apps will remain an integral part of everyday life and business operations.</p>
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

export default FutureWebMobile