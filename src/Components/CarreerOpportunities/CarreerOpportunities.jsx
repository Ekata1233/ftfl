import { useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import JobContact from "../JobContact/JobContact";

function CareerOpportunities() {
  const navigate = useNavigate();
  const [selectedDepartment, setSelectedDepartment] = useState("Department");
  const [selectedLocation, setSelectedLocation] = useState("Pune");
  const [searchQuery, setSearchQuery] = useState("");
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    // Fetch job listings from the API
    const fetchJobs = async () => {
        try {
            const response = await fetch("https://ftfl-backend.vercel.app/api/jobs/all-jobs");
            if (!response.ok) {
                throw new Error("Failed to fetch jobs");
            }
            const data = await response.json();
            console.log("API Response:", data);

            // Extract and filter jobs
            if (data.success && Array.isArray(data.jobs)) {
                const regularJobs = data.jobs.filter(job => job.openingType === "Regular");
                setJobListings(regularJobs);
            } else {
                console.error("API did not return a valid jobs array:", data);
                setJobListings([]);
            }
        } catch (error) {
            console.error("Error fetching jobs:", error);
            setJobListings([]);
        }
    };

    fetchJobs();
}, []);


  const handleSelect = (department) => {
    setSelectedDepartment(department);
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Ensure jobListings is always an array before filtering
  const filteredJobs = Array.isArray(jobListings)
    ? jobListings.filter((job) => {
        const matchesDepartment =
          selectedDepartment === "Department" || job.jobDepartment?.includes(selectedDepartment);
        const matchesLocation =
          selectedLocation === "Location" || job.jobLocation === selectedLocation;
        const matchesSearchQuery =
          job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.jobDepartment?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesOpeningType = job.openingType === "Regular"; // Filter for Regular openingType

        return matchesDepartment && matchesLocation && matchesSearchQuery && matchesOpeningType;
      })
    : [];

  return (
    <div>
      <Row className="mb-5 mt-5 pb-5">
        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
          <p style={{ fontSize: "24px", fontWeight: "400" }}>Job/Intern Role</p>
          <Form.Control
            type="text"
            placeholder=" 🔎︎ Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
          <p style={{ fontSize: "24px", fontWeight: "400" }}>Department</p>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="w-100 text-start custom-dropdown"
            >
              {selectedDepartment}
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
              <Dropdown.Item onClick={() => handleSelect("IT")}>IT</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("Design")}>Design</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("Marketing")}>Marketing</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("Sales")}>Sales</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
          <p style={{ fontSize: "24px", fontWeight: "400" }}>Location</p>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-location"
              className="w-100 text-start custom-dropdown"
            >
              {selectedLocation}
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100">
              <Dropdown.Item onClick={() => handleSelectLocation("Pune")}>Pune</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <div>
        <Row>
          {filteredJobs.map((job, index) => (
            <Col key={index} xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
              <div
                className="job-div text-dark rounded rounded-4 py-5 px-3 my-5"
                style={{ border: "1px solid #298CF3" }}
              >
                <p className="" style={{ fontSize: "23px", fontWeight: "600" }}>
                  {job.jobTitle}
                </p>
                <p className="text-secondary">{job.jobDepartment}</p>
                <p className="">
                  <MdLocationOn />
                  {job.jobLocation}
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                  <Button
                    className="text-white blue-bg border-0"
                    onClick={() => navigate(`/jobdescription/${job._id}`, { state: { scrollTo: "jobdesccontact" } })}
                  >
                          Apply <IoIosArrowForward />
                </Button>

                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  navigate(`/jobdescription/${job._id}`);
                }}
                    className="text-dark ms-auto"
                  >
                    See More
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <JobContact />
      </div>
    </div>
  );
}

export default CareerOpportunities;


