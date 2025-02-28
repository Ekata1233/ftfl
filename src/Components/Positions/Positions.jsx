import { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SEO from "../SEO";

function Positions() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
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
        const urgentJobs = jobsArray.filter((job) => job.openingType === "Urgent");
        setJobs(urgentJobs);
      })
      .catch((error) => console.error("Error fetching jobs:", error.message));
  }, []);

  return (
    <div>
      <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
      <Row>
        {jobs.map((job, index) => (
        <Col key={index} xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
  <div
    className="blue-bg text-white rounded rounded-4 py-5 px-3 my-4 position-relative"
    style={{ height: "300px" }}
  >
    <div>
      <p style={{ fontSize: "28px", fontWeight: "600" }}>{job.jobTitle}</p>
      <p>{job.jobDepartment || "Department not specified"}</p>
      <p>
        <MdLocationOn /> {job.jobLocation || "Location not specified"}
      </p>
    </div>

    {/* Apply Button fixed to the bottom */}
    <div
  className="w-100 position-absolute d-flex justify-content-between align-items-center px-3"
  style={{ bottom: "30px", left: "0" }}
>
  <Button
    className="text-dark bg-white border-0"
    onClick={() =>
      navigate(`/jobdescription/${job._id}`, {
        state: { scrollTo: "jobdesccontact" },
      })
    }
  >
    Apply <IoIosArrowForward />
  </Button>

  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      navigate(`/jobdescription/${job._id}`);
    }}
    className="text-white"
  >
    See More
  </a>
</div>

  </div>
</Col>

        ))}
      </Row>
    </div>
  );
}

export default Positions;
