import { Col, Container, Row } from "react-bootstrap"
import aboutman from '../../assets/aboutman.png'
import '../HowItServices/HowItServics.css'

function HowItServices() {
  return (
    <div>
        <div>
            <p className="blue heading-p"> How it Started</p>
            <div className="d-flex justify-content-center align-items-center ">
            
            <Container className="d-flex justify-content-center mx-auto blue-bg text-white rounded rounded-5">
      <Row className="full-width-row p-5 started">
        <Col xs={12} sm={12} md={12} lg={8} xl={8}>
            <div>
                <h4>The Road to</h4>
                <p className="" style={{fontWeight:"600",fontSize:"60px", lineHeight:"50px"}}>Today</p>
            </div>
          <p className="mt-5 header-p text-justify text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione delectus provident a non qui quisquam porro tempore inventore quo! Delectus vero laudantium expedita modi sapiente eveniet error veritatis soluta aliquid ducimus nesciunt veniam, magni deserunt. Nihil, illo! Earum, unde! Vel suscipit ipsum ab sed dolorem voluptatibus quos repudiandae omnis blanditiis.
          </p>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4} xl={4} >
         <div>
            <img src={aboutman} className="img-fluid about-man" />
         </div>
        </Col>
      </Row>
    </Container>
   
            </div>
        </div>
    </div>
  )
}

export default HowItServices