import { MdArrowForwardIos } from "react-icons/md";
import HeaderNav from "../../HeaderNav/HederNav";
import carrers from "../../../assets/Rectangle 3847.png";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import letest1 from "../../../assets/digitaltransformation.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ai from "../../../assets/ai.png";
import fronted from "../../../assets/fronted.png";
import costeffective from "../../../assets/costEffective.png";
import { useEffect } from "react";

function ItConsultingBuinessGrowth() {
    useEffect(() => {
        const scrollAnimation = () => {
          const elements = document.querySelectorAll(".animate-text");
    
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("active");
                } else {
                  entry.target.classList.remove("active"); // Uncomment if you want it to animate again when scrolling up
                }
              });
            },
            { threshold: 0.15 }
          ); // Adjusted threshold for better trigger
    
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
        <div style={{ backgroundColor: "#FAFAFA" }}>
          <div className="overlay-nav overlay-nav1">
            <HeaderNav />
          </div>
          <div className="flex-grow-1">
            <div className="carousel-container about position-relative text-center">
              <img
                src={carrers}
                className="img-fluid w-100 con-img"
                alt="Slide 1"
              />
            </div>
          </div>
          <Container>
            <div className="mt-5 pt-5">
              <p className="text text-secondary">
                <NavLink to="/blogs" className="text-secondary">
                  Blog
                </NavLink>
                <MdArrowForwardIos
                  style={{ margin: "0 5px" }}
                  className="text-secondary"
                />
                <NavLink
                  to="/blogs"
                  className="text-secondary"
                  state={{ scrollTo: "it-bisiness" }}
                >
                 It Consulting
                </NavLink>
    
                <MdArrowForwardIos
                  style={{ margin: "0 5px" }}
                  className="text-secondary"
                />
                <NavLink to="/blogs/futureai/futureai" className="blue">
                  IT Consulting & Business Growth
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
                    <a
                      href="https://www.facebook.com/FTFLTechnology"
                      className="text-white text-decoration-none"
                    >
                      <FaFacebookF
                        className="p-2"
                        style={{ width: "40px", height: "40px", color: "#1877F2" }}
                      />
                    </a>
                    <a
                      href="https://x.com/"
                      className="text-white text-decoration-none"
                    >
                      <FaXTwitter
                        className="p-2"
                        style={{ width: "40px", height: "40px", color: "black" }}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/ftfl-technology-pvt-ltd/"
                      className="text-white text-decoration-none"
                    >
                      <FaLinkedinIn
                        className="p-2"
                        style={{ width: "40px", height: "40px", color: "#0077B5" }}
                      />
                    </a>
                  </div>
                  <div>
                    <p
                      style={{ fontSize: "25px", fontWeight: "600" }}
                      className="pt-3 pb-3"
                    >
                      In this article
                    </p>
                    <p className="blue  blue-text " style={{ fontSize: "22px" }}>
                    Introduction
                    </p>
                    <p className="text ms-4">
                    The Evolution of IT Consulting & Business Growth
                    </p>
                    <p className="text ms-4">
                    IT Consulting & Business Growth in Everyday Operations               </p>
                    <p className="text ms-4">
                    The Role of IT Consulting in Different Industries
                    </p>
                    <p className="text ms-4">
                    IT Consulting & Technology-Driven Business Growth
                    </p>
                    <p className="text ms-4">
                    Future of IT Consulting & Business Growth
                    </p>
                    <p className="text ms-4">Conclusion: The Road Ahead</p>
                  </div>
                </div>
              </Col>
            </Row>
            <div>
              <div className=" pt-5 animate-text">
                <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">
                  Introduction
                </p>
                <p className="text text-secondary">
                IT consulting has become a cornerstone of business growth in the digital age. Companies leverage IT strategies to optimize operations, improve efficiency, and drive innovation. From cloud solutions to AI-powered automation, IT consulting helps businesses scale rapidly. The increasing reliance on technology makes IT consulting crucial for maintaining a competitive edge. This section introduces the impact of IT consulting on business expansion. Businesses that adopt IT-driven strategies achieve greater productivity and market success.
                </p>
              </div>
            </div>
            <div>
              <div className="pt-5 animate-text">
                <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">
                The Evolution of IT Consulting & Business Growth
                </p>
                <p className="text text-secondary">
                IT consulting has evolved from simple tech support to a strategic business enabler. Early consulting services focused on software implementation and infrastructure management. Today, IT consultants help businesses adopt AI, cybersecurity, and cloud computing solutions. As technology advances, IT consulting is playing a key role in digital transformation and scalability. This section explores how IT consulting has evolved as a growth catalyst. Companies that integrate modern IT solutions experience long-term success.
                </p>
              </div>
            </div>
            <div>
              <div className="pt-5 animate-text">
                <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">
                IT Consulting & Business Growth in Everyday Operations
                </p>
                <p className="text text-secondary">
                IT consulting enhances daily business operations through automation, security, and efficiency. Businesses use IT strategies for customer relationship management, data analytics, and workflow optimization. Cloud computing allows for remote collaboration and seamless data access. AI-driven IT solutions improve decision-making and streamline repetitive tasks. This section highlights how IT consulting supports business growth in day-to-day functions. Companies that embrace IT-driven workflows see improved performance and cost savings.
                </p>
              </div>
            </div>
    
            <div>
              <div className="pt-5 animate-text">
                <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">
                The Role of IT Consulting in Different Industries
                </p>
                <p className="text text-secondary">
                IT consulting plays a crucial role across industries such as healthcare, finance, retail, and manufacturing. In healthcare, consultants help implement AI diagnostics and secure patient data systems. Financial firms rely on IT consulting for cybersecurity, fraud detection, and digital banking solutions. Retailers use IT strategies to enhance e-commerce platforms and optimize supply chains. This section explores the diverse applications of IT consulting across industries. Tailored IT solutions empower businesses to adapt to industry-specific challenges.
                </p>
              </div>
            </div>
            <div>
              <div className="pt-5 animate-text">
                <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">
                IT Consulting & Technology-Driven Business Growth
    
                </p>
                <p className="text text-secondary">
                Businesses use IT consulting to adopt emerging technologies like AI, big data, and IoT. Digital transformation strategies improve operational efficiency and customer experience. IT security solutions protect companies from cyber threats, ensuring long-term stability. Automation reduces costs and enhances workforce productivity, driving business expansion. This section discusses how IT-driven strategies lead to sustained business growth. Companies that integrate IT innovations remain competitive and future-ready.
                </p>
              </div>
            </div>
            <div>
              <div className="pt-5 animate-text">
                <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">
                Future of IT Consulting & Business Growth
                </p>
                <p className="text text-secondary">
                The future of IT consulting will be driven by AI, blockchain, and cloud advancements. Businesses will require specialized IT consulting for cybersecurity and digital compliance. Hybrid and remote work models will increase the demand for cloud infrastructure solutions. Personalized IT consulting services will become essential for industry-specific growth strategies. This section explores how IT consulting will shape business success in the coming years. Companies that stay ahead of IT trends will gain a significant market advantage.
                </p>
              </div>
            </div>
    
            <div>
              <div className="pt-5 animate-text">
                <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">
                  Conclusion: The Road Ahead
                </p>
                <p className="text text-secondary">
                IT consulting will continue to be a key factor in business transformation and growth. Companies must invest in IT strategies to enhance efficiency, security, and scalability. The integration of emerging technologies will define the next phase of business success. Businesses that prioritize IT consulting will achieve long-term competitiveness and innovation. This section wraps up the discussion on IT consulting’s impact on business expansion. Strategic IT adoption is essential for companies to thrive in the digital economy.
                </p>
              </div>
            </div>
            <div className="text-start mt-5 pt-5"></div>
          </Container>
          <Container>
            <div className="text-start mt-5 pt-5 ">
              <p>
                <span
                  className="text-dark"
                  style={{ fontWeight: "400", fontSize: "40px" }}
                >
                  Latest
                </span>
                <span
                  className="blue"
                  style={{ fontWeight: "600", fontSize: "40px" }}
                >
                  {" "}
                  Blog
                </span>
              </p>
            </div>{" "}
            <Row className="py-5">
              <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className="my-4">
                <div
                  className="p-4 rounded rounded-5 blog-div"
                  style={{
                    border: "",
                  }}
                >
                  <div className="blog-div1">
                    <img src={ai} className="w-100 img-fluid" />
                    <p
                      className="mt-4 mb-2"
                      style={{ fontSize: "22px ", fontWeight: "500" }}
                    >
                      AI & Machine Learning: The Next Big Leap
                    </p>
                    <p className="text text-secondary">
                      Discover how AI is transforming industries and what’s next in
                      automation.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className="my-4">
                <div
                  className="p-4 rounded rounded-5 blog-div"
                  style={{
                    border: "",
                  }}
                >
                  <div className="blog-div1">
                    <img src={fronted} className="w-100 img-fluid" />
                    <p
                      className="mt-4 mb-2"
                      style={{ fontSize: "22px ", fontWeight: "500" }}
                    >
                      Frontend vs. Backend: What You Need to Know
                    </p>
                    <p className="text text-secondary">
                      A breakdown of web development roles and best practices.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className="my-4">
                <div
                  className="p-4 rounded rounded-5 blog-div"
                  style={{
                    border: "",
                  }}
                >
                  <div className="blog-div1">
                    <img src={costeffective} className="w-100" />
                    <p
                      className="mt-4 mb-2"
                      style={{ fontSize: "22px ", fontWeight: "500" }}
                    >
                      Cost-Effective IT Solutions for Startups
                    </p>
                    <p className="text text-secondary">
                      {" "}
                      Discover smart IT investments to grow your business on a
                      budget.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
}

export default ItConsultingBuinessGrowth