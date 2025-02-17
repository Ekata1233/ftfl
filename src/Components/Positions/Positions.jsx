import { MdLocationOn } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io"
import { Button, Col, Row } from 'react-bootstrap';
function Positions() {
  return (
    <div>
         <Row>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                      <div className="blue-bg text-white rounded rounded-4 py-5 px-3 my-4">
                        <p className="" style={{ fontSize: "28px", fontWeight: "600" }}>Job Name</p>
                        <p>Department</p>
                        <p> <MdLocationOn />Remote</p>
                        <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                          <Button className="text-dark bg-white border-0">
                            Apply <IoIosArrowForward />
                          </Button>
                          <a href="" className="text-white ms-auto">See More</a>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                      <div className="blue-bg text-white rounded rounded-4 py-5 px-3 my-4">
                        <p className="" style={{ fontSize: "28px", fontWeight: "600" }}>Job Name</p>
                        <p>Department</p>
                        <p> <MdLocationOn />Remote</p>
                        <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                          <Button className="text-dark bg-white border-0">
                            Apply <IoIosArrowForward />
                          </Button>
                          <a href="" className="text-white ms-auto">See More</a>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                      <div className="blue-bg text-white rounded rounded-4 py-5 px-3 my-4">
                        <p className="" style={{ fontSize: "28px", fontWeight: "600" }}>Job Name</p>
                        <p>Department</p>
                        <p> <MdLocationOn />Remote</p>
                        <div className="d-flex justify-content-between align-items-center mt-3 w-100">
                          <Button className="text-dark bg-white border-0">
                            Apply <IoIosArrowForward />
                          </Button>
                          <a href="" className="text-white ms-auto">See More</a>
                        </div>
                      </div>
                    </Col>
                  </Row>
    </div>
  )
}

export default Positions