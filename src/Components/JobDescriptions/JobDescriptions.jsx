
import HeaderNav from "../HeaderNav/HederNav"
import carrers from '../../assets/Rectangle 3847.png'

import { useEffect, useRef, useState } from "react"
import { Col, Container, Row, Spinner } from "react-bootstrap";
import JobDescCantact from "./JobDescCantact";
import { useLocation, useParams } from "react-router-dom";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GrMapLocation} from "react-icons/gr";
import { LuAlarmClock, LuSquareTerminal } from "react-icons/lu";
import { PiBriefcase, PiPhoneCall } from "react-icons/pi";
import contactman from '../../assets/aboutman11.png'
import { MdOutlineMailOutline } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
function JobDescriptions() {
    const location = useLocation();
    const contactRef = useRef(null);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        const scrollToSection = () => {
            if (location.state?.scrollTo === "jobdesccontact" && contactRef.current) {
                setTimeout(() => {
                    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);  // Slight delay ensures content is fully rendered before scrolling
            }
        };

        scrollToSection();
    }, [location]);
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
    const { id } = useParams(); // Get job ID from URL
    const [job, setJobs] = useState([]);

    useEffect(() => {
        setLoading(true); // Set loading to true before fetching data
        fetch("https://ftfl-backend.vercel.app/api/jobs/all-jobs")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("API Response:", data);
    
                const jobsArray = Array.isArray(data) ? data : data.jobs;
    
                if (!Array.isArray(jobsArray)) {
                    throw new Error("API response does not contain a job list");
                }
    
                setJobs(jobsArray); // Set all jobs without filtering
            })
            .catch((error) => console.error("Error fetching jobs:", error.message))
            .finally(() => {
                setLoading(false); // Ensure loading is turned off after fetch
            });
    }, []);
    

    console.log("Job : ", job)
    console.log("Id : ", id)

    const xyz = job.find(j => j._id === id); // Find the job with the matching ID

    if (loading) {
        return (
            <div className="text-center" style={{ marginTop: "20%" }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }
    if (!xyz) {
        return <h2>Job not found</h2>;
    }
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

                <h1 className="mt-5  mb-3">{xyz.jobTitle}</h1>
                <p className="bg-success p-2 text-white rounded" style={{ width: "100px" }}>{xyz.jobType}</p>
                <div className="my-5 ">
                    <p className="pt-5 " style={{ fontSize: "28px", fontWeight: "600" }}>Job Description</p>
                    <p className="text-secondary text">{xyz.jobDescription}</p>
                    <hr />
                </div>
                <div className="my-5 ">
                    <p className="" style={{ fontSize: "28px", fontWeight: "600" }}>Requirements</p>
                    <li className="text-secondary text">
                        {xyz.requirements}</li>
                    <hr />
                </div>
                <div className="my-5 ">
                    <p className="" style={{ fontSize: "28px", fontWeight: "600" }}>Work Environment & Expectations</p>
                    <li className="text-secondary text">
                        {xyz.workEnvironment
                        }
                    </li>
                    <hr />
                </div>


                <div ref={contactRef} className="my-5 ">
                    <p className="" style={{ fontSize: "28px", fontWeight: "600" }}>Benefits</p>
                    <li className="text-secondary text">
                        {xyz.benefits}
                    </li>
                    <hr />
                </div>


                <div >

                    <Row>
                        <Col lg={6}>
                            <div className="text-start mt-5 pt-5" >
                                <p>
                                    <span className='text-dark' style={{ fontWeight: "400", fontSize: "45px" }}>Job</span>
                                    <span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Overview</span>
                                </p>
                            </div>
                            <Row className="  rounded rounded-4 mt-5 text-center  "
                                style={{
                                    border: "1px solid #298CF3",
                                }}

                            >



                                <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className="my-5 text-center">
                                    <GiTakeMyMoney className="blue" style={{ width: "70px", height: "70px" }} />
                                    <p style={{ fontWeight: "500", fontSize: "22px" }}
                                        className="mt-3">Salary (INR)</p>
                                    <p className="text text-success " style={{ fontWeight: "500" }}>{xyz.salary
                                    }</p>

                                </Col>
                                <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className="my-5 text-center">
                                    <GrMapLocation className="blue" style={{ width: "70px", height: "70px" }} />
                                    <p style={{ fontWeight: "500", fontSize: "22px" }}
                                        className="mt-3">Job Location</p>
                                    <p className="text-secondary text">{xyz.jobLocation
                                    }</p>
                                </Col>

                                <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className="my-5 text-center">

                                    <LuSquareTerminal className="blue" style={{ width: "70px", height: "70px" }} />
                                    <p style={{ fontWeight: "500", fontSize: "22px" }}
                                        className="mt-3">Experience</p>
                                    <p className="text-secondary text">{xyz.experience}</p>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className="my-5 text-center">
                                    <FaRegCalendarAlt className="blue" style={{ width: "70px", height: "70px" }} />
                                    <p style={{ fontWeight: "500", fontSize: "22px" }}
                                        className="mt-3">Job Posted:</p>
                                    <p className="text-secondary text">
    {new Date(xyz.postDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    })}
</p>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className="my-5 text-center">
                                    <LuAlarmClock className="blue" style={{ width: "70px", height: "70px" }} />
                                    <p style={{ fontWeight: "500", fontSize: "22px" }}
                                        className="mt-3">Application Deadline:</p>
                                  <p className="text-secondary text">
    {new Date(xyz.applyDeadline).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    })}
</p>
                                </Col>

                                {/* <Col>
                        <p>Job Level:</p>
                        <p className="text-secondary text">Entry Level</p>
                    </Col> */}

                                <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className="my-5 text-center">
                                    <PiBriefcase className="blue" style={{ width: "70px", height: "70px" }} />
                                    <p style={{ fontWeight: "500", fontSize: "22px" }}
                                        className="mt-3">Education</p>
                                    <p className="text-secondary text">{xyz.qualification}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={5} className="mx-lg-4 ps-lg-5">

                            <div className="text-start mt-5 pt-5" >
                                <p>
                                    <span className='text-dark' style={{ fontWeight: "400", fontSize: "45px" }}>Get In</span>
                                    <span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Touch</span>
                                </p>
                            </div>
                            <p className="text text-secondary pt-4">Have a question or need assistance? Reach out to us via email, phone, or the contact form below. We’re always happy to assist you! Our support team is available to help with any inquiries.</p>
                            <p className="text blue">We&rsquo;re eager to assist you.</p>
                            <Row>

                                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}> <div className="mt-4">
                                    <p className="" style={{ fontSize: "22px", fontWeight: "500" }}>Phone Number</p>
                                    <p className="text blue"><PiPhoneCall className="blue me-2" style={{ height: "25px", width: "25px" }} />+91 9272003735</p>
                                </div>
                                    <div className="mt-4">
                                        <p className="" style={{ fontSize: "22px", fontWeight: "500" }}>
                                            Email</p>
                                        <p className="text blue"><MdOutlineMailOutline className="blue me-2" style={{ height: "25px", width: "25px" }} />hr@ftfltechnology.com</p>
                                    </div>
                                    <div className="mt-4">
                                        <p className="" style={{ fontSize: "22px", fontWeight: "500" }}>Website</p>
                                        <a
                                            href="https://ftfntechnology.com/"
                                            className="text blue"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span> <TbWorld className="blue me-2" style={{ height: "25px", width: "25px" }}/>https://ftfntechnology.com/</span>
                                        </a>

                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="">
                                    <img src={contactman} alt="Contact Man" className="contact-man " />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div ref={contactRef}>
                    <JobDescCantact />
                </div>

            </Container>

        </div>
    )
}

export default JobDescriptions