import { useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import JobContact from "../JobContact/JobContact";
import SEO from "../SEO";
import { motion } from "framer-motion";
function CareerOpportunities() {
  const navigate = useNavigate();
  const [selectedDepartment, setSelectedDepartment] = useState("Department");
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [searchQuery, setSearchQuery] = useState("");
  const [jobListings, setJobListings] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [locations, setLocations] = useState([]);

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

          // Extract unique departments and locations
          const uniqueDepartments = [...new Set(regularJobs.map(job => job.jobDepartment))];
          const uniqueLocations = [...new Set(regularJobs.map(job => job.jobLocation))];
          setDepartments(uniqueDepartments);
          setLocations(uniqueLocations);
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
    const scrollVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };
  return (
    <div>
        <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
      <Row className="mb-5 mt-5 pb-5">
        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
          <p style={{ fontSize: "24px", fontWeight: "400" }}>Job/Intern Role</p>
          <Form.Control
            type="text"
            placeholder=" 🔎︎ Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          </motion.div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
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
              <Dropdown.Item onClick={() => handleSelect("Department")}>All Departments</Dropdown.Item>
              {departments.map((dept, index) => (
                <Dropdown.Item key={index} onClick={() => handleSelect(dept)}>
                  {dept}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          </motion.div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
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
              <Dropdown.Item onClick={() => handleSelectLocation("Location")}>All Locations</Dropdown.Item>
              {locations.map((loc, index) => (
                <Dropdown.Item key={index} onClick={() => handleSelectLocation(loc)}>
                  {loc}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          </motion.div>
        </Col>
      </Row>
      <div>
        <Row>
          {filteredJobs.map((job, index) => (
            <Col key={index} xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
              <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
              <div
                className="job-div text-dark rounded rounded-4 py-5 px-3 my-5"
                style={{ border: "1px solid #298CF3" }}
              >
                <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
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
                </motion.div>
              </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <JobContact />
      </div>
    </div>
  );
}

export default CareerOpportunities;