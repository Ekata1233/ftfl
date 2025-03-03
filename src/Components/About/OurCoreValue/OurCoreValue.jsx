import { Button, Col,  Row } from "react-bootstrap";
import valuebg from "../../../assets/bg.png";
import innovation from "../../../assets/light-bulb (1).png";
import coustmer from "../../../assets/bro.png";

import collabration from "../../../assets/rafiki.png";

import "../OurCoreValue/OurCoreValur.css"; // Ensure you have a CSS file for styling
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import SEO from "../../SEO";

function OurCoreValue() {
  const navigate=useNavigate()
  return (

    <div className="value-div">
      <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />

      {/* Background Image */}
      <div className="background-image">
        <img src={valuebg} alt="Background" className="background-img" />
      </div>

      {/* Overlay Content */}
      <div className="value-container mt-5">
        <div className="pt-lg-5">
        <p className="text-center"><span className="" style={{ fontWeight: "400", fontSize: "45px", }}>Our</span><span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Core Value</span></p>
        </div>
        
  <Row className="text-center text-white my-lg-5 py-lg-5">
    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="my-4">
      <div className="text-box text">
        <img src={innovation} alt="Innovation" className="img-fluid" />
        <p className="">Innovation</p>
        <p>
          We constantly innovate, staying ahead of industry trends, to deliver
          creative, leading-edge solutions for business growth.
        </p>
      </div>
    </Col>
    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="my-4">
      <div className="text-box text">
        <img src={coustmer} alt="Integrity" className="img-fluid p-3" />
        <p>Integrity</p>
        <p>
          We uphold the highest ethical standards, ensuring trust and
          transparency in all our business dealings.
        </p>
      </div>
    </Col>
    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="my-4">
      <div className="text-box text">
        <img src={collabration} alt="Excellence" className="img-fluid p-3" />
        <p>Excellence</p>
        <p>
          We strive for excellence in every project, delivering quality work
          that exceeds expectations.
        </p>
      </div>
    </Col>
  </Row>
  <Row>
   <div className="py-lg-3">
   <div style={{border:"2px solid #298CF3"}} className="rounded rounded-4   py-lg-5 mt-5  ">
    <p className="text-center pb-3"><span className="" style={{ fontWeight: "600", fontSize: "45px", }}>Grow Your</span><span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Future </span><span className="" style={{ fontWeight: "600", fontSize: "45px", }}>With Us</span></p>
    <p className="text-center text text-secondary">Join FTFL Technology and unlock endless opportunities to develop your skills, innovate, and shape the future of digital transformation.</p>
    <div className="d-flex justify-content-center">
  <Button variant="" className="mt-4 blue-btn text-white mb-3"onClick={() => navigate("/careers")}>
    Careers in FTFL Technology <MdArrowForwardIos />
  </Button>
</div>
    </div>
   </div>
  </Row>


      </div>
    </div>
  );
}

export default OurCoreValue;
