import { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
        console.log("API Response:", data); // Log the actual response
        
        // Check if job listings are inside a key
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
      <Row>
        {jobs.map((job, index) => (
          <Col key={index} xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <div className="blue-bg text-white rounded rounded-4 py-5 px-3 my-4" style={{height:"300px"}}>
              <p style={{ fontSize: "28px", fontWeight: "600" }}>{job.jobTitle}</p>
              <p>{job.jobDepartment || "Department not specified"}</p>
              <p><MdLocationOn /> {job.jobLocation || "Location not specified"}</p>
              <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                <Button className="text-dark bg-white border-0" 
                state={{ scrollTo: "jobdesccontact" }}
                onClick={() => navigate(`/jobdescription/${job._id}`)}> 
                  Apply <IoIosArrowForward />
                </Button>
                <a href="" className="text-white ms-auto">See More</a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Positions;