import { Button, Col,  Dropdown, Form, Row } from "react-bootstrap"
import HeaderNav from "../HeaderNav/HederNav"
import { MdArrowForwardIos } from "react-icons/md"
import carrers from '../../assets/carrers.png'
import carrersbg from '../../assets/carrers1.png'
import '../Carreers/Carreers.css'
import why1 from '../../assets/Frame 78.png'
import why2 from '../../assets/Frame 79.png'
import why3 from '../../assets/Frame 80.png'
import why4 from '../../assets/Frame 81.png'
import why5 from '../../assets/Frame 82.png'
import why6 from '../../assets/Frame 83.png'

 
import Positions from "../Positions/Positions"
import CarreerOpportunities from "../CarreerOpportunities/CarreerOpportunities"

function Carreers() {
 
  return (
    <div>
      <div className="overlay-nav overlay-nav1">
        <HeaderNav />
      </div>
      <div>
        <div className="flex-grow-1">
          {/* Carousel Section */}
          <div className="carousel-container about position-relative text-center">
            <img src={carrers} className="img-fluid w-100 about-img" alt="Slide 1" />
            <div className="position-absolute translate-middle py-4 my-4 mx-3 header-content">
              <p className="text-white text">Carreers</p>
              <h1 className="text-white fw-bold my-4 mx-3 h1">
                Shape the Future With Us
              </h1>
              <p className="text-white header-p">
                Be part of an innovative, dynamic, and forward-thinking team. At FTFL Technology, we foster creativity, collaboration, and growth, empowering you to make an impact in the world of technology.
              </p>

              <Button variant="" className="mt-4 blue-btn text-white">
                Apply Now <MdArrowForwardIos />
              </Button>
            </div>

          </div>

          {/* Additional Content */}
          <div className='Carreers-wrapper'>
            <div className=" Carreers-div">
              <img src={carrersbg} alt="Background" className="w-100 bg-contact " />
              <div className='Carreers-Container'>
                <div className="text-start my-5" >
                  <p>
                    <span className='text-dark' style={{ fontWeight: "400", fontSize: "40px" }}>Why</span>
                    <span className="blue" style={{ fontWeight: "600", fontSize: "40px" }}> Work With Us?</span>
                  </p>
                </div>
                <Row>
                  <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="animated-col">
                    <div className="col-content py-4 my-4 mx-3">
                      <img src={why1} alt="Innovative" className="col-image" />
                      <h3 className="col-title pt-3 pb-1">Innovative</h3>
                      <p className="col-text text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="animated-col">
                    <div className="col-content py-4 my-4 mx-3">
                      <img src={why2} alt="Innovative" className="col-image" />
                      <h3 className="col-title pt-3 pb-1">Expertise</h3>
                      <p className="col-text text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="animated-col">
                    <div className="col-content py-4 my-4 mx-3">
                      <img src={why3} alt="Innovative" className="col-image" />
                      <h3 className="col-title pt-3 pb-1">Partnership</h3>
                      <p className="col-text text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="animated-col">
                    <div className="col-content py-4 my-4 mx-3">
                      <img src={why4} alt="Innovative" className="col-image" />
                      <h3 className="col-title pt-3 pb-1">Scalability</h3>
                      <p className="col-text text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="animated-col">
                    <div className="col-content py-4 my-4 mx-3">
                      <img src={why5} alt="Innovative" className="col-image" />
                      <h3 className="col-title pt-3 pb-1">Success</h3>
                      <p className="col-text text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="animated-col">
                    <div className="col-content py-4 my-4 mx-3">
                      <img src={why6} alt="Innovative" className="col-image" />
                      <h3 className="col-title pt-3 pb-1">Support</h3>
                      <p className="col-text text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </Col>
                </Row>
                <div className="text-center my-5 pt-5" >
                  <p>
                    <span className='text-dark' style={{ fontWeight: "400", fontSize: "40px" }}>Open</span>
                    <span className="blue" style={{ fontWeight: "600", fontSize: "40px" }}> Positons</span>
                  </p>
                  <p className="text text-center text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus obcaecati corrupti quam voluptatem id a error facere saepe temporibus odio illo, quos repudiandae, perspiciatis maiores dicta possimus earum ut provident quisquam voluptatum dignissimos eum alias amet autem. Corporis, iusto porro?</p>
                </div>
                <div>
                  <Positions/>
                </div>
                <div className="my-5 py-5">
                  <div className="text-start my-5" >
                    <p>
                      <span className='text-dark' style={{ fontWeight: "400", fontSize: "40px" }}>Explore</span>
                      <span className="blue" style={{ fontWeight: "600", fontSize: "40px" }}> Career Opportunities</span>
                    </p>
                  </div>
                 <CarreerOpportunities/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carreers