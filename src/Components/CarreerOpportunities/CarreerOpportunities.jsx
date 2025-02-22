import {  useEffect, useRef, useState } from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import JobContact from "../JobContact/JobContact";

function CarreerOpportunities() {
  const [selectedDepartment, setSelectedDepartment] = useState("Department");
  const [selectedLocation, setSelectedLocation] = useState("Pune");
  const [searchQuery, setSearchQuery] = useState("");
   const jobListingsRef = useRef(null);
  

  const handleSelect = (department) => {
    setSelectedDepartment(department);
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const jobListings = [
    {
      title: "UI/UX Developer",
      department: "IT Department",
      location: "Pune",
    },
    {
      title: "MERN Stack Developer",
      department: "IT Department",
      location: "Pune",
    },
    {
      title: "Flutter Developer",
      department: "IT Department",
      location: "Pune",
    },
    {
      title: "Content Writer",
      department: "Marketing & Lead Generation",
      location: "Pune",
    },
    {
      title: "Digital Marketing",
      department: "Marketing & Branding",
      location: "Pune",
    },
    {
      title: "Sales Executive",
      department: "Sales or Business Development department",
      location: "Pune",
    },
    {
      title: "Graphic Designer",
      department: "Design",
      location: "Pune",
    },
    {
      title: "Video Editor",
      department: "Marketing & Branding",
      location: "Remote",
    },
    {
      title: "Business Development Executive",
      department: "Business Development",
      location: "Pune",
    },
  ];

  const filteredJobs = jobListings.filter((job) => {
    const matchesDepartment =
      selectedDepartment === "Department" || job.department.includes(selectedDepartment);
    const matchesLocation =
      selectedLocation === "Location" || job.location === selectedLocation;
    const matchesSearchQuery =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDepartment && matchesLocation && matchesSearchQuery;
  });

  return (
    <div >
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
              <Dropdown.Item onClick={() => handleSelect("IT")}>
                IT
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("Design")}>
                Design
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("Marketing")}>
                Marketing
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("Sales")}>
                Sales
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>{" "}
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
          <p style={{ fontSize: "24px", fontWeight: "400" }}>Location </p>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-location"
              className="w-100 text-start custom-dropdown"
            >
              {selectedLocation}
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100">
              <Dropdown.Item onClick={() => handleSelectLocation("Pune")}>
                Pune
              </Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>{" "}
        </Col>
      </Row>
      <div ref={jobListingsRef}>
        <Row>
          {filteredJobs.map((job, index) => (
            <Col key={index} xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
              <div
                className="job-div text-dark rounded rounded-4 py-5 px-3 my-5"
                style={{ border: "1px solid #298CF3" }}
              >
                <p className="" style={{ fontSize: "23px", fontWeight: "600" }}>
                  {job.title}
                </p>
                <p className="text-secondary">{job.department}</p>
                <p className="">
                  {" "}
                  <MdLocationOn />
                  {job.location}
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                  <Button className="text-white blue-bg border-0">
                    Apply <IoIosArrowForward />
                  </Button>
                  <a href="" className="text-dark ms-auto">
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

export default CarreerOpportunities;