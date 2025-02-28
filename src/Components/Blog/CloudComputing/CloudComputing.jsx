import { MdArrowForwardIos } from "react-icons/md"
import HeaderNav from "../../HeaderNav/HederNav"
import carrers from '../../../assets/Rectangle 3847.png'
import { NavLink } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import letest1 from '../../../assets/cloudcomp.png'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import ai from '../../../assets/ai.png'
import fronted from '../../../assets/fronted.png'
import costeffective from '../../../assets/costEffective.png'
import { useEffect } from "react"
import SEO from "../../SEO"
function CloudComputing() {
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
                            to="/blogs/latest-tech-trends/cloudcomputing"
                            className="blue"

                        >

                            Cloud Computing
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
                                <p className="text ms-4">The Evolution of Cloud Computing</p>
                                <p className="text ms-4">Cloud Computing in Everyday Life</p>
                                <p className="text ms-4">The Role of Cloud Computing in Business and Industry</p>
                                <p className="text ms-4">Cloud Computing’s Impact on Healthcare</p>
                                <p className="text ms-4">Cloud Computing and the Future of Digital Transformation</p>
                                <p className="text ms-4">Conclusion: The Road Ahead</p>
                            </div>

                        </div>
                    </Col>
                </Row>
                <div>
                    <div className=" pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Introduction</p>
                        <p className="text text-secondary">Cloud computing has revolutionized the way we store, access, and manage data. It enables businesses and individuals to use computing resources over the internet without needing physical infrastructure. From personal cloud storage to large-scale enterprise solutions, cloud computing plays a crucial role in the digital era.</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">The Evolution of AI and Machine Learning</p>
                        <p className="text text-secondary">Cloud computing has evolved from traditional on-premise data storage to highly scalable and efficient cloud-based services. Initially, businesses relied on physical servers, but advancements in virtualization, distributed computing, and internet technologies have paved the way for public, private, and hybrid cloud solutions. This evolution has enabled faster, more efficient, and cost-effective computing</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Cloud Computing in Everyday Life</p>
                        <p className="text text-secondary">Cloud computing is integrated into daily activities, whether it&rsquo;s storing photos on Google Drive, streaming movies on Netflix, or using online collaboration tools like Google Docs and Microsoft Teams. It enhances convenience, accessibility, and security for users across the globe. With cloud technology, people can access their data anytime, anywhere, from any device. From social media to smart home devices, cloud computing powers numerous modern applications.</p>
                    </div>
                </div>


                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">The Role of Cloud Computing in Business and Industry</p>
                        <p className="text text-secondary">Organizations leverage cloud computing for data storage, application hosting, cybersecurity, and artificial intelligence. Businesses benefit from cost savings, scalability, remote accessibility, and seamless software updates. Cloud-based CRM, ERP, and data analytics solutions help industries optimize their operations. This flexibility allows companies to scale operations efficiently and improve productivity. Cloud adoption helps businesses stay competitive by ensuring continuous innovation.</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Cloud Computing’s Impact on Healthcare</p>
                        <p className="text text-secondary">In healthcare, cloud computing improves patient care by enabling secure electronic health records (EHRs), remote consultations, and AI-powered diagnostics. Cloud-based platforms allow healthcare providers to collaborate efficiently and ensure real-time access to patient data. It also enhances data security, ensuring compliance with healthcare regulations. With telemedicine and AI diagnostics on the rise, cloud computing is reshaping the healthcare industry.</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Cloud Computing and the Future of Digital Transformation</p>
                        <p className="text text-secondary">The future of cloud computing includes advancements in edge computing, hybrid clouds, and AI-driven cloud services. As more businesses adopt digital-first strategies, cloud technology will continue to evolve, offering greater efficiency, security, and innovation. This shift will drive automation, AI integration, and smarter business solutions. As emerging technologies like 5G expand, cloud computing will become even more powerful and efficient.</p>
                    </div>
                </div>
               
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Conclusion: The Road Ahead</p>
                        <p className="text text-secondary">Cloud computing is here to stay, shaping the future of technology and business. With continuous advancements, it will further enhance efficiency, security, and accessibility, transforming industries and everyday life. Embracing cloud innovations will be key to staying ahead in the digital era. The future will see cloud computing integrating seamlessly with AI, IoT, and blockchain technologies.</p>
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

export default CloudComputing