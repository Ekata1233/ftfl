import { Col, Container, Row } from 'react-bootstrap'
import servicesBg1 from '../../assets/bg services 2.png'
import Whychoose from '../../assets/Group 10197.png'
import Whychoose1 from '../../assets/Group 1000001776.png'

import '../WhyChooseUs/WhyChhoseUS.css'
import Testimonial from '../Testimonial/Testimonial'
import SEO from '../SEO'
function WhyChooseUS() {
  return (
    <div>


      <div className='whychoose-wrapper'>
        <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
        <img src={servicesBg1} alt="Background" className="w-100  service-img" />
        <Container>
          <div className='whychoose-Container'>
            <div className="d-flex justify-content-center text-center  ">
              <p className="mt-lg-5 pt-lg-5">
                <span className="text-dark " style={{ fontWeight: "400", fontSize: "45px" }}>Why</span>
                <span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Choose Us?</span>
              </p>
            </div>

            <div className='my-lg-5 pt-5'>
              <img src={Whychoose} className='img-fluid whychoose1 ' />
              <img src={Whychoose1} className='img-fluid whychoose2 ' />

            </div>
            <div className=' text-center pt-5'>
              <p className="mt-5 pt-5 ">
                <span className="text-dark " style={{ fontWeight: "400", fontSize: "45px" }}>Hear From Your</span>
                <span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}>  Happy clients</span>
              </p>

            </div>
            <div>
              <p className="text text-secondary py-3 text-center">A step-by-step look at our process, ensuring innovation, quality, and seamless execution.
                From ideation to delivery, we focus on precision and creativity.
                Our goal is to exceed expectations and bring your vision to life.</p>
            </div>
            <div>
            <Row className="d-flex align-items-stretch justify-content-center flex-wrap overflow-auto">
  {[
    { number: 1, title: "Discover", subtitle: "Defines Strategies" },
    { number: 2, title: "Design", subtitle: "Create Prototypes" },
    { number: 3, title: "Develop", subtitle: "Build Solutions" },
    { number: 4, title: "Test", subtitle: " Functionality" },
    { number: 5, title: "Launch", subtitle: "Deploy & Support" },
  ].map((item, index) => (
    <Col key={index} xs={12} sm={6} md={4} lg={4} xl={2} className="p-2 d-flex">
      <div
        className="d-flex flex-column  align-items-center text-center p-2 w-100 h-100"
        style={{ minHeight: "180px" }} // Decreased height
      >
        <div
          className="rounded-circle d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "#98C8F9",
            height: "150px", // Reduced size
            width: "150px",
          }}
        >
          <h1 className="text-white m-0">{item.number}</h1>
        </div>
        <p
          style={{
            fontSize: "28px", // Reduced text size
            color: "#298CF3",
            marginTop: "5px",
          }}
          className='mt-3'
        >
          {item.title}
        </p>
        <p className="text m-0" >{item.subtitle}</p>
      </div>
    </Col>
  ))}
</Row>
  

<div className='pt-lg-5'>
<h4 className="colorBlue pt-5 mt-5 pb-2 text-center">----- Testimonial -----</h4>
<h1 className="text-center">Our Client Say!!!</h1>
</div>
<Testimonial/>

            </div>
          </div>
        </Container>
        
      </div>

    </div>
  )
}

export default WhyChooseUS