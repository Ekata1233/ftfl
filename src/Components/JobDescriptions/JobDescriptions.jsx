
import HeaderNav from "../HeaderNav/HederNav"
import carrers from '../../assets/Rectangle 3847.png'

import { useEffect, useRef, useState } from "react"
import { Col, Container, Row, Spinner } from "react-bootstrap";
import JobDescCantact from "./JobDescCantact";
import { useLocation, useParams } from "react-router-dom";
function JobDescriptions() {
    const location = useLocation();
    const contactRef = useRef(null);
    const [loading, setLoading] = useState(true); // Added loading state


    useEffect(() => {
        if (location.state?.scrollTo) {
            setTimeout(() => {
                if (location.state.scrollTo === "jobdesccontact" && contactRef.current) {
                    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 100);
        }
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
        fetch("https://ftfl-backend.vercel.app/api/jobs/all-jobs")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("API Response:", data); // Log the actual response

                // Check if job listings are inside a key
                const jobsArray = Array.isArray(data) ? data : data.jobs;

                if (!Array.isArray(jobsArray)) {
                    throw new Error("API response does not contain a job list");
                }

                const urgentJobs = jobsArray.filter((job) => job.openingType === "Urgent");
                setJobs(urgentJobs);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching jobs:", error.message));
            setLoading(false);
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

                <h1>{xyz.jobTitle}</h1>
                <p>{xyz.jobType}</p>
                <div>
                    <p className="" style={{ fontSize: "28px", fontWeight: "600" }}>Job Description</p>
                    <p className="text-secondary text">{xyz.jobDescription}</p>
                </div>
                <div>
                    <p className="" style={{ fontSize: "28px", fontWeight: "600" }}>Requirements</p>
                    <li className="text-secondary text">
                        {xyz.requirements}</li>

                </div>
                <div>
                    <p className="" style={{ fontSize: "28px", fontWeight: "600" }}>Work Environment & Expectations</p>
                    <li className="text-secondary text">
                        {xyz.workEnvironment
                        }
                    </li>

                </div>


                <div>
                    <p className="" style={{ fontSize: "28px", fontWeight: "600" }}>Benefits</p>
                    <li className="text-secondary text">
                        {xyz.benefits}
                    </li>

                </div>

                <Row className="pt-5">
                    <Col>
                        <p >Salary (INR)</p>
                        <p className="text  ">{xyz.salary
                        }</p>

                    </Col>
                    <Col>
                        <p>Job Location</p>
                        <p className="text-secondary text">{xyz.jobLocation
                        }</p>
                    </Col>
                </Row>
                <Row className="mt-5 pt-5">
                    <Col>
                        <p>Job Posted:</p>
                        <p className="text-secondary text">{xyz.postDate
                        }</p>
                    </Col>
                    <Col>
                        <p>Job expire in:</p>
                        <p className="text-secondary text">{xyz.applyDeadline
                        }</p>
                    </Col>
                    {/* <Col>
                        <p>Job Level:</p>
                        <p className="text-secondary text">Entry Level</p>
                    </Col> */}
                    <Col>
                        <p>Experience</p>
                        <p className="text-secondary text">{xyz.
experience}</p>
                    </Col>
                    <Col>
                        <p>Education</p>
                        <p className="text-secondary text">{xyz.
qualification
}</p>
                    </Col>
                </Row>
                <div ref={contactRef}>
                <JobDescCantact />
                </div>
                
            </Container>

        </div>
    )
}

export default JobDescriptions