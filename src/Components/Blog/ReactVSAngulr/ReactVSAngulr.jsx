import { MdArrowForwardIos } from "react-icons/md"
import HeaderNav from "../../HeaderNav/HederNav"
import carrers from '../../../assets/Rectangle 3847.png'
import { NavLink } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import letest1 from '../../../assets/reactangular.png'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import ai from '../../../assets/ai.png'
import fronted from '../../../assets/fronted.png'
import costeffective from '../../../assets/costEffective.png'
import { useEffect } from "react"

function WMCloudCoputing() {
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
                            Latest Tech Trends
                        </NavLink>
                        <MdArrowForwardIos style={{ margin: "0 5px" }} className="text-secondary" />
                        <NavLink
                            to="/blogs/web-&-mobile-development/reactvsangular"
                            className="blue"

                        >

                            React vs. Vue vs. Angular
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
                                <p className="text ms-4">The Evolution of React, Vue, and Angular</p>
                                <p className="text ms-4">React, Vue, and Angular in Everyday Development</p>
                                <p className="text ms-4">The Role of React, Vue, and Angular in Business and Industry</p>
                                <p className="text ms-4">React, Vue, and Angular in Healthcare Applications</p>
                                <p className="text ms-4">The Future of React, Vue, and Angular</p>
                                <p className="text ms-4">Conclusion: The Road Ahead</p>
                            </div>

                        </div>
                    </Col>
                </Row>
                <div>
                    <div className=" pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Introduction</p>
                        <p className="text text-secondary">React, Vue, and Angular are the leading JavaScript frameworks for building dynamic and responsive web applications. Each offers unique features, catering to different project needs and development approaches. React is known for its flexibility and component-based structure, Vue stands out for its simplicity and ease of integration, while Angular provides a complete framework with enterprise-level support. Choosing the right framework depends on scalability, performance, and project complexity. As web development advances, these technologies continue to evolve, shaping the digital landscape.</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">The Evolution of React, Vue, and Angular</p>
                        <p className="text text-secondary">These frameworks have transformed modern web development, evolving to meet growing demands for efficiency and scalability. React, developed by Facebook, introduced the virtual DOM and component-based architecture for better performance. Vue, created as a lightweight alternative, gained popularity for its reactive data binding and progressive adaptability. Angular, backed by Google, evolved from AngularJS to a powerful TypeScript-based framework for large-scale applications. Continuous updates and improvements have made these frameworks essential for modern front-end development.</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">React, Vue, and Angular in Everyday Development</p>
                        <p className="text text-secondary">React, Vue, and Angular power various web applications, from social media platforms to business dashboards. React is widely used for interactive user interfaces and single-page applications (SPAs). Vue’s simplicity makes it ideal for lightweight projects and quick development. Angular’s robust structure supports large-scale applications requiring strong maintainability and security. These frameworks have become integral to modern development, enhancing user experience across web applications.

</p>
                    </div>
                </div>


                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">The Role of React, Vue, and Angular in Business and Industry
                        </p>
                        <p className="text text-secondary">Businesses rely on these frameworks to create scalable, efficient, and high-performance applications. React is a top choice for startups and tech companies due to its vast ecosystem and flexibility. Vue is preferred for projects needing rapid development with minimal complexity. Angular is widely used in enterprise applications requiring strict architecture and security. Each framework provides tools to build fast, reliable, and user-friendly applications that drive business growth.</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">React, Vue, and Angular in Healthcare Applications</p>
                        <p className="text text-secondary">The healthcare industry utilizes these frameworks to develop secure and user-friendly applications. React is used in telemedicine platforms and patient management systems for its dynamic UI capabilities. Vue is ideal for lightweight medical applications that require fast deployment and easy maintenance. Angular’s structured framework supports large-scale hospital management systems and electronic health records (EHRs). These frameworks enhance healthcare technology, improving efficiency and patient care.</p>
                    </div>
                </div>
                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">The Future of React, Vue, and Angular</p>
                        <p className="text text-secondary">The future of these frameworks is driven by advancements in performance, AI integration, and developer-friendly features. React continues to enhance rendering efficiency with concurrent rendering and server components. Vue is improving its reactivity system and performance optimizations. Angular is refining its framework with faster compilation and reduced bundle sizes. As web applications demand greater efficiency, these frameworks will keep evolving, ensuring better user experiences and development efficiency.</p>
                    </div>
                </div>

                <div>
                    <div className="pt-5 animate-text">
                        <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">Conclusion: The Road Ahead</p>
                        <p className="text text-secondary">React, Vue, and Angular will continue to dominate front-end development, offering diverse solutions for different project requirements. Developers will choose frameworks based on performance, scalability, and maintainability. With ongoing updates and improvements, these technologies will shape the future of web development. The competition between them ensures continuous innovation, making web applications faster, more efficient, and more powerful.</p>
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

export default WMCloudCoputing