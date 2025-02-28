import { Button, Col, Container, Row } from "react-bootstrap"
import HeaderNav from "../HeaderNav/HederNav"
import { MdArrowForwardIos } from "react-icons/md"
import carrers from '../../assets/Rectangle 3847.png'
import SEO from "../../../SEO"

function SeniorUiUx() {
  return (
    <div>
        <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
         <div>
        <div className="overlay-nav overlay-nav1">
      <HeaderNav />
    </div>
        <div>
        <div className="flex-grow-1">
      {/* Carousel Section */}
      <div className="carousel-container about position-relative text-center">
        <img src={carrers} className="img-fluid w-100 about-img" alt="Slide 1" />
        
      </div>

      {/* Additional Content */}
      <div className="text-center my-5" >
                        <p>
                            <span className='text-dark' style={{ fontWeight: "400", fontSize: "45px" }}>Job </span>
                            <span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Description</span>
                        </p>
                       
                    </div>
                    <Container>
                      <div>
                      <p className="text-secondary pb-5 text"><span>Carreers <MdArrowForwardIos /></span><span>Open Positions <MdArrowForwardIos /></span><span className="blue">Job Description</span></p>
                      </div>
                      <p style={{fontSize:"30px", fontWeight:"500"}}>Senior UX Designer</p>
                      <Button className="bg-success border-0 px-5">Full - Time</Button>
                      <div>
                        <Row>
                          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          
                          <div className="pt-4 pb-3">
                            <h5>Job Description</h5>
                            <p className="text-secondary">As a Senior UX Designer, you will be responsible for leading the user experience strategy for our digital products. You will play a crucial role in understanding user needs, designing intuitive workflows, and ensuring that our products provide a seamless, efficient, and enjoyable experience for users. You will collaborate closely with product managers, UI designers, developers, and stakeholders to create wireframes, prototypes, and user flows that enhance the usability and functionality of our apps and websites.</p>
                            <p className="text-secondary">Your primary goal will be to ensure that users can interact with our products effortlessly, without confusion or frustration. You will conduct user research, analyze feedback, and continuously iterate on designs to create experiences that align with business objectives and user expectations. Additionally, you will contribute to our design system, establish UX best practices, and mentor junior designers.</p>
                          </div></Col>
                        </Row>
                      </div>
                    </Container>
      
    </div>
        </div>
    </div>
    </div>
  )
}

export default SeniorUiUx