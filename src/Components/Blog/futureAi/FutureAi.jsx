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

function FutureAi() {
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
           
            <NavLink to="/blogs/futureai/futureai" className="blue">
              Future of AI in Business
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
                The Evolution of AI in Business
                </p>
                <p className="text ms-4">
                AI in Everyday Business Operations                </p>
                <p className="text ms-4">
                The Role of AI in Different Industries
                </p>
                <p className="text ms-4">
                AI in Healthcare and Its Business Impact
                </p>
                <p className="text ms-4">
                Future of AI in Business
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
            Artificial Intelligence (AI) is transforming business operations across industries. From automation to decision-making, AI is enhancing efficiency and innovation. Companies are leveraging AI-powered tools to gain a competitive edge. The rapid advancements in AI are shaping the future of work. This section introduces AI’s growing impact on businesses. As AI adoption accelerates, understanding its role becomes crucial for businesses to thrive. Organizations must strategically implement AI to maximize its benefits.
            </p>
          </div>
        </div>
        <div>
          <div className="pt-5 animate-text">
            <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">
            The Evolution of AI in Business
            </p>
            <p className="text text-secondary">
            AI has evolved from simple automation to complex machine learning models. Early AI applications focused on rule-based systems, while modern AI uses deep learning. Businesses now utilize AI for data analysis, predictions, and automation. AI-driven innovations like chatbots and robotic process automation (RPA) have changed industries. This section explores how AI has progressed in the business landscape. With the rise of generative AI and neural networks, AI's potential is expanding rapidly. Companies that embrace AI evolution will gain a competitive advantage.
            </p>
          </div>
        </div>
        <div>
          <div className="pt-5 animate-text">
            <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">
            AI in Everyday Business Operations
            </p>
            <p className="text text-secondary">
            AI is integrated into daily business processes, optimizing workflow and efficiency. Companies use AI for customer service, fraud detection, and personalized marketing. Automation reduces human effort, allowing employees to focus on strategic tasks. AI-driven analytics help businesses make data-driven decisions. This section highlights how AI is streamlining everyday operations. Businesses leveraging AI see higher productivity, reduced costs, and improved customer satisfaction. AI-powered tools will continue to redefine work dynamics and operational strategies.
            </p>
          </div>
        </div>

        <div>
          <div className="pt-5 animate-text">
            <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">
            The Role of AI in Different Industries
            </p>
            <p className="text text-secondary">
            AI is revolutionizing industries like finance, retail, manufacturing, and logistics. In finance, AI detects fraud and automates trading decisions. Retailers use AI for inventory management and personalized shopping experiences. AI-driven robots are improving production efficiency in manufacturing. This section explores AI’s transformative impact across multiple sectors. In the legal industry, AI is used for contract analysis and case predictions. AI is also reshaping education with personalized learning experiences.
            </p>
          </div>
        </div>
        <div>
          <div className="pt-5 animate-text">
            <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">
            AI in Healthcare and Its Business Impact

            </p>
            <p className="text text-secondary">
            AI is improving diagnostics, treatment planning, and patient care. Machine learning models help detect diseases earlier and suggest effective treatments. AI-powered chatbots assist patients with medical queries, reducing hospital workload. Pharmaceutical companies use AI for drug discovery and clinical trials. This section covers how AI is reshaping healthcare from a business perspective. AI-driven robotic surgeries and predictive analytics are enhancing medical precision. The healthcare industry is experiencing a shift toward AI-assisted patient management.
            </p>
          </div>
        </div>
        <div>
          <div className="pt-5 animate-text">
            <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">
            Future of AI in Business
            </p>
            <p className="text text-secondary">
            AI’s future in business includes hyper-personalization, automation, and enhanced decision-making. Companies will adopt AI-driven strategies for better customer experiences and efficiency. AI ethics, data privacy, and regulations will shape business implementations. Advancements in AI will create new job roles while automating repetitive tasks. This section discusses what lies ahead for AI in the business world. The fusion of AI with blockchain and IoT will unlock new possibilities. AI governance and responsible deployment will be crucial in defining business success.
            </p>
          </div>
        </div>

        <div>
          <div className="pt-5 animate-text">
            <p style={{ fontSize: "32px", fontWeight: "500" }} className="my-4">
              Conclusion: The Road Ahead
            </p>
            <p className="text text-secondary">
            AI will continue to be a game-changer in business innovation and efficiency. Companies must embrace AI-driven solutions to stay competitive. Ethical considerations and responsible AI use will be crucial for sustainable growth. The integration of AI with emerging technologies like blockchain and IoT will drive further transformation. This section wraps up the discussion on AI’s future in business. Businesses that adapt to AI advancements will gain long-term success and market leadership. As AI continues to evolve, organizations must foster a culture of continuous learning and adaptation.
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

export default FutureAi;
