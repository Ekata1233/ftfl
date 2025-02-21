import { MdArrowForwardIos } from "react-icons/md"
import HeaderNav from "../../HeaderNav/HederNav"
import carrers from '../../../assets/Rectangle 3847.png'
import { NavLink } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import letest1 from '../../../assets/Frame 686.png'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import ai from '../../../assets/ai.png'
import fronted from '../../../assets/fronted.png'
import costeffective from '../../../assets/costEffective.png'
import { useEffect } from "react"

function AiMLearning() {
   
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
                            state={{ scrollTo: "latest-tech-trends" }}  // Add this
                        >
                            Latest Tech Trends
                        </NavLink>
                        <MdArrowForwardIos style={{ margin: "0 5px" }} className="text-secondary" />
                        <NavLink
                            to="/blogs/latest-tech-trends/ai&machine"
                            className="blue"

                        >
                            AI & Machine Learning
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
                                <p className="text ms-4">The Evolution of AI and Machine Learning</p>
                                <p className="text ms-4">AI in Everyday Life</p>
                                <p className="text ms-4">The Role of AI in Business and Industry</p>
                                <p className="text ms-4">Machine Learning’s Impact on Healthcare</p>
                                <p className="text ms-4">AI and the Future of Autonomous Systems</p>
                                <p className="text ms-4">Conclusion : The Road Ahead</p>
                            </div>

                        </div>
                    </Col>
                </Row>
                <div>
                    <div className=" pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Introduction</p>
                        <p className="text text-secondary">Artificial Intelligence (AI) and Machine Learning (ML) have evolved from mere concepts to critical components of modern technology. These innovations are revolutionizing industries, redefining human-machine interactions, and shaping the future in ways once imagined only in science fiction. The next big leap in AI and ML will push the boundaries of what machines can accomplish, driving automation, intelligence augmentation, and groundbreaking solutions for global challenges.</p>
                    </div>
                </div>
                

                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">The Evolution of AI and Machine Learning</p>
                        <p className="text text-secondary">AI has undergone significant transformations since its inception. From the early days of rule-based systems and expert systems to the rise of deep learning and neural networks, the field has continuously expanded its capabilities. The introduction of big data, improved computational power, and sophisticated algorithms have accelerated the progress of AI and ML, making them indispensable tools in various domains. The next phase of AI’s evolution will likely focus on making systems more autonomous, explainable, and capable of mimicking human-like reasoning and creativity.</p>
                    </div>
                </div>

                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">The Role of AI in Business and Industry</p>
                        <p className="text text-secondary">Businesses across industries are leveraging AI to streamline operations, improve customer experiences, and drive innovation. AI-powered analytics help organizations extract valuable insights from vast datasets, enabling data-driven decision-making. In manufacturing, AI enhances predictive maintenance, reducing downtime and operational costs. In retail, AI-driven recommendation engines increase sales and customer satisfaction. The finance sector utilizes AI for fraud detection, algorithmic trading, and risk assessment. The next leap will involve greater AI-human collaboration, where AI acts as an augmentation tool rather than a replacement, leading to more dynamic and intelligent workplaces.</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Machine Learning’s Impact on Healthcare</p>
                        <p className="text text-secondary">One of the most transformative applications of AI and ML is in healthcare. From early disease detection using medical imaging to drug discovery and personalized treatment plans, AI is significantly improving patient outcomes. Machine learning algorithms can analyze vast medical datasets to detect patterns, predict disease outbreaks, and enhance diagnostics. AI-powered robotic surgeries and virtual health assistants are also gaining traction. The next phase of AI in healthcare will focus on improving interpretability, ensuring ethical AI applications, and integrating AI seamlessly with human medical expertise.</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">AI and the Future of Autonomous Systems</p>
                        <p className="text text-secondary">Autonomous systems, powered by AI, are becoming increasingly prevalent. Self-driving cars, drones, and robotic assistants are just the beginning. AI is also enabling smarter cities with automated traffic management, energy-efficient infrastructure, and predictive crime analysis. The next leap in AI-driven autonomy will likely involve advanced robotics, swarm intelligence, and AI agents capable of self-learning and adaptation. However, ensuring safety, reliability, and ethical considerations will be crucial as these systems become more autonomous.</p>
                    </div>
                </div>
             
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Conclusion: The Road Ahead</p>
                        <p className="text text-secondary">AI and Machine Learning are poised to make the next big leap, bringing about innovations that were once unimaginable. As AI systems become more intelligent, autonomous, and integrated into everyday life, the focus must remain on responsible development, ethical considerations, and human-AI collaboration. The future of AI is not just about technological advancement but also about ensuring that these advancements benefit humanity as a whole. The coming years will be critical in shaping AI’s trajectory, and how we navigate these changes will determine whether AI remains a tool for progress or a challenge to overcome.</p>
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

export default AiMLearning