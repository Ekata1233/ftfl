import { useState } from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import JobContact from "../JobContact/JobContact";

function CarreerOpportunities() {
  const [selectedDepartment, setSelectedDepartment] = useState("Department");
  const [selectedLocation, setSelectedLocation] = useState("Pune");

  const handleSelect = (department) => {
    setSelectedDepartment(department);
  };

  const handleSelectlocation = (location) => {
    setSelectedLocation(location);
  };

  
  return (
    <div>
      <Row className="mb-5 mt-5 pb-5">
        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
          <p style={{ fontSize: "24px", fontWeight: "400" }}>Job/Intern Role</p>
          <Form.Control type="text" placeholder=" 🔎︎ Search..." />
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
              <Dropdown.Item onClick={() => handleSelect("HR")}>
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
              <Dropdown.Item onClick={() => handleSelectlocation("Pune")}>
                Pune
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>{" "}
        </Col>
      </Row>
      <div>
        <Row>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} >
            <div
              className="job-div text-dark rounded rounded-4 py-5 px-3 my-5"
              style={{ border: "1px solid #298CF3" }}
            >
              <p className="" style={{ fontSize: "23px", fontWeight: "600" }}>
              UI/UX Developer
              </p>
              <p className="text-secondary">IT Department</p>
              <p className="">
                {" "}
                <MdLocationOn />
                Pune
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
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <div
              className="job-div text-dark rounded rounded-4 py-5 px-3 my-5"
              style={{ border: "1px solid #298CF3" }}
            >
              <p className="" style={{ fontSize: "23px", fontWeight: "600" }}>
              MERN Stack Developer
              </p>
              <p className="text-secondary">IT Department</p>
              <p className="">
                {" "}
                <MdLocationOn />
                Pune
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
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <div
              className="job-div text-dark rounded rounded-4 py-5 px-3 my-5"
              style={{ border: "1px solid #298CF3" }}
            >
              <p className="" style={{ fontSize: "23px", fontWeight: "600" }}>
              Flutter Developer
              </p>
              <p className="text-secondary">IT Department</p>
              <p className="">
                {" "}
                <MdLocationOn />
                Pune
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
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <div
              className="job-div text-dark rounded rounded-4 py-5 px-3 my-5"
              style={{ border: "1px solid #298CF3" }}
            >
              <p className="" style={{ fontSize: "23px", fontWeight: "600" }}>
                Content Writer
              </p>
              <p className="text-secondary">Marketing & Lead Genration</p>
              <p className="">
                {" "}
                <MdLocationOn />
                    Pune
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
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <div
              className="job-div text-dark rounded rounded-4 py-5 px-3 my-5"
              style={{ border: "1px solid #298CF3" }}
            >
              <p className="" style={{ fontSize: "23px", fontWeight: "600" }}>
                Digital Marketing
              </p>
              <p className="text-secondary">Marketing & Branding</p>
              <p className="">
                {" "}
                <MdLocationOn />
                Pune
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
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <div
              className="job-div text-dark rounded rounded-4 py-5 px-3 my-5"
              style={{ border: "1px solid #298CF3" }}
            >
              <p className="" style={{ fontSize: "23px", fontWeight: "600" }}>
                Sales Executive
              </p>
              <p className="text-secondary">Sales or Business Development department</p>
              <p className="">
                {" "}
                <MdLocationOn />
                Pune
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
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <div
              className="job-div text-dark rounded rounded-4 py-5 px-3 my-5"
              style={{ border: "1px solid #298CF3" }}
            >
              <p className="" style={{ fontSize: "23px", fontWeight: "600" }}>
                Graphic Designer
              </p>
              <p className="text-secondary">Design</p>
              <p className="">
                {" "}
                <MdLocationOn />
                Pune
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
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <div
              className="job-div text-dark rounded rounded-4 py-5 px-3 my-5"
              style={{ border: "1px solid #298CF3" }}
            >
              <p className="" style={{ fontSize: "23px", fontWeight: "600" }}>
                Vedio Editor
              </p>
              <p className="text-secondary">Marketing & Branding</p>
              <p className="">
                {" "}
                <MdLocationOn />
                Remote
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
          <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <div
              className="job-div text-dark rounded rounded-4 py-5 px-3 my-5"
              style={{ border: "1px solid #298CF3" }}
            >
              <p className="" style={{ fontSize: "23px", fontWeight: "600" }}>
                Business Development Executive
              </p>
              <p className="text-secondary">Business Development </p>
              <p className="">
                {" "}
                <MdLocationOn />
                Pune
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
        </Row>

        <JobContact/>
      </div>
    </div>
  );
}

export default CarreerOpportunities;
