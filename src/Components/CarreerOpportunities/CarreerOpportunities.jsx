import { useState } from "react"
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
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
            <Row>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                    <p style={{ fontSize: "24px", fontWeight: "400" }}>Jov/Intern Role</p>
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
                                HR
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSelect("Sales")}>
                                Sales
                            </Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>                  </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                    <p style={{ fontSize: "24px", fontWeight: "400" }}>Location     </p>
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
                    </Dropdown>       </Col>
            </Row>
            <div>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <div className="job-div text-dark rounded rounded-4 py-5 px-3 my-4" style={{ border: "1px solid #298CF3" }}>
                            <p className="" style={{ fontSize: "28px", fontWeight: "600", }}>Senior UX Designer</p>
                            <p className="text-secondary">Department</p>
                            <p className=""> <MdLocationOn />Remote</p>
                            <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                                <Button className="text-white blue-bg border-0">
                                    Apply <IoIosArrowForward />
                                </Button>
                                <a href="" className="text-dark ms-auto">See More</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <div className="job-div text-dark rounded rounded-4 py-5 px-3 my-4" style={{ border: "1px solid #298CF3" }}>
                            <p className="" style={{ fontSize: "28px", fontWeight: "600", }}>Senior UX Designer</p>
                            <p className="text-secondary">Department</p>
                            <p className=""> <MdLocationOn />Remote</p>
                            <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                                <Button className="text-white blue-bg border-0">
                                    Apply <IoIosArrowForward />
                                </Button>
                                <a href="" className="text-dark ms-auto">See More</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <div className="job-div text-dark rounded rounded-4 py-5 px-3 my-4" style={{ border: "1px solid #298CF3" }}>
                            <p className="" style={{ fontSize: "28px", fontWeight: "600", }}>Senior UX Designer</p>
                            <p className="text-secondary">Department</p>
                            <p className=""> <MdLocationOn />Remote</p>
                            <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                                <Button className="text-white blue-bg border-0">
                                    Apply <IoIosArrowForward />
                                </Button>
                                <a href="" className="text-dark ms-auto">See More</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <div className="job-div text-dark rounded rounded-4 py-5 px-3 my-4" style={{ border: "1px solid #298CF3" }}>
                            <p className="" style={{ fontSize: "28px", fontWeight: "600", }}>Senior UX Designer</p>
                            <p className="text-secondary">Department</p>
                            <p className=""> <MdLocationOn />Remote</p>
                            <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                                <Button className="text-white blue-bg border-0">
                                    Apply <IoIosArrowForward />
                                </Button>
                                <a href="" className="text-dark ms-auto">See More</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <div className="job-div text-dark rounded rounded-4 py-5 px-3 my-4" style={{ border: "1px solid #298CF3" }}>
                            <p className="" style={{ fontSize: "28px", fontWeight: "600", }}>Senior UX Designer</p>
                            <p className="text-secondary">Department</p>
                            <p className=""> <MdLocationOn />Remote</p>
                            <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                                <Button className="text-white blue-bg border-0">
                                    Apply <IoIosArrowForward />
                                </Button>
                                <a href="" className="text-dark ms-auto">See More</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <div className="job-div text-dark rounded rounded-4 py-5 px-3 my-4" style={{ border: "1px solid #298CF3" }}>
                            <p className="" style={{ fontSize: "28px", fontWeight: "600", }}>Senior UX Designer</p>
                            <p className="text-secondary">Department</p>
                            <p className=""> <MdLocationOn />Remote</p>
                            <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                                <Button className="text-white blue-bg border-0">
                                    Apply <IoIosArrowForward />
                                </Button>
                                <a href="" className="text-dark ms-auto">See More</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <div className="job-div text-dark rounded rounded-4 py-5 px-3 my-4" style={{ border: "1px solid #298CF3" }}>
                            <p className="" style={{ fontSize: "28px", fontWeight: "600", }}>Senior UX Designer</p>
                            <p className="text-secondary">Department</p>
                            <p className=""> <MdLocationOn />Remote</p>
                            <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                                <Button className="text-white blue-bg border-0">
                                    Apply <IoIosArrowForward />
                                </Button>
                                <a href="" className="text-dark ms-auto">See More</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <div className="job-div text-dark rounded rounded-4 py-5 px-3 my-4" style={{ border: "1px solid #298CF3" }}>
                            <p className="" style={{ fontSize: "28px", fontWeight: "600", }}>Senior UX Designer</p>
                            <p className="text-secondary">Department</p>
                            <p className=""> <MdLocationOn />Remote</p>
                            <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                                <Button className="text-white blue-bg border-0">
                                    Apply <IoIosArrowForward />
                                </Button>
                                <a href="" className="text-dark ms-auto">See More</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <div className="job-div text-dark rounded rounded-4 py-5 px-3 my-4" style={{ border: "1px solid #298CF3" }}>
                            <p className="" style={{ fontSize: "28px", fontWeight: "600", }}>Senior UX Designer</p>
                            <p className="text-secondary">Department</p>
                            <p className=""> <MdLocationOn />Remote</p>
                            <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                                <Button className="text-white blue-bg border-0">
                                    Apply <IoIosArrowForward />
                                </Button>
                                <a href="" className="text-dark ms-auto">See More</a>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div>
                    <div>
                        <Col sx={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                            <div>
                                <Form>
                                    <Row className="pt-4">
                                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="pb-5">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="First Name"
                                                    className="custom-input border border-1 rounded rounded rounded-pill"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="pb-5">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Last Name"
                                                    className="custom-input border border-1 rounded rounded-pill"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="pb-5">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Email Address"
                                                    className="custom-input border border-1 rounded rounded-pill"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="pb-5">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Phone No."
                                                    className="custom-input border border-1 rounded"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Example Textarea</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    className="rounded border border-1"
                                                    rows={3}
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                            <Button
                                                className="rounded rounded-3 w-100 blue-btn py-2 mt-3"
                                                style={{ border: "none" }}
                                            >
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarreerOpportunities