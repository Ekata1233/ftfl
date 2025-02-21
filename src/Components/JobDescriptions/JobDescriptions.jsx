
import HeaderNav from "../HeaderNav/HederNav"
import carrers from '../../assets/Rectangle 3847.png'

import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap";
import JobDescCantact from "./JobDescCantact";
function JobDescriptions() {
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
               
                <h1>Descriptions</h1>
             <div>
             <p className="" style={{fontSize:"28px", fontWeight:"600"}}>Job Description</p>
             <p className="text-secondary text">As a Senior UX Designer, you will be responsible for leading the user experience strategy for our digital products. You will play a crucial role in understanding user needs, designing intuitive workflows, and ensuring that our products provide a seamless, efficient, and enjoyable experience for users. You will collaborate closely with product managers, UI designers, developers, and stakeholders to create wireframes, prototypes, and user flows that enhance the usability and functionality of our apps and websites.</p>
             </div>
             <div>
             <p className="" style={{fontSize:"28px", fontWeight:"600"}}>Requirements</p>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             </div>
             <div>
             <p className="" style={{fontSize:"28px", fontWeight:"600"}}>Work Environment & Expectations</p>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             </div>
             

             <div>
             <p className="" style={{fontSize:"28px", fontWeight:"600"}}>Benefits</p>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             <li className="text-secondary text">Lorem ipsum dolor sit amet consectetur.</li>
             </div>

             <Row className="pt-5">
                <Col>
                    <p >Salary (INR)</p>
                    <p className="text  ">6.5 LPA</p>
                    <p className="text-secondary text">Yearly salary</p>
                </Col>
                <Col>
                    <p>Job Location</p>
                    <p className="text-secondary text">Hadapsar, Pune</p>
                </Col>
             </Row>
             <Row className="mt-5 pt-5">
                <Col>
                    <p>Job Posted:</p>
                    <p className="text-secondary text">13 Feb, 2025</p>
                </Col>
                <Col>
                    <p>Job expire in:</p>
                    <p className="text-secondary text">13 April, 2025</p>
                </Col>
                <Col>
                    <p>Job Level:</p>
                    <p className="text-secondary text">Entry Level</p>
                </Col>
                <Col>
                    <p>Experience</p>
                    <p className="text-secondary text">5+ Year</p>
                </Col>
                <Col>
                    <p>Education</p>
                    <p className="text-secondary text">Graduation</p>
                </Col>
             </Row>
                <JobDescCantact/>
            </Container>
          
        </div>
    )
}

export default JobDescriptions