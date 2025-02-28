import { Col, Container, Row } from "react-bootstrap"
import vision from '../../../assets/Group 1000001769.png'
import vision1 from '../../../assets/mission.png'

import vision2 from '../../../assets/Approch.png'
import SEO from "../../SEO"


function OurVision() {
    return (
        <div>
            <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
            <Container style={{}} className="vision-container">

                <div >
                    <Row className="vision-row ">
                        <Col xs={12} sm={12} md={8} lg={5} xl={6} className="px-4">
                            <p><span className="" style={{ fontWeight: "400", fontSize: "45px", }}>Our</span><span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Vision</span></p>
                            <p className="text-secondary text ">We strive to be a global leader in the delivery of innovative technologies that drive and support business growth and success. We combine the power of IT, branding, and marketing to help businesses adapt and thrive in a fast-evolving digital world.

                                Our mission is to empower organizations with cutting-edge solutions that enhance efficiency, engagement, and market presence. Through creativity and technology, we transform ideas into impactful digital experiences.</p>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={6} xl={6} className="text-end">
                            <div>
                                <img src={vision} className="vision-img img-fluid" />
                            </div>
                        </Col>
                    </Row>
                    <Row className=" mission pt-5">
                        <Col xs={12} sm={12} md={8} lg={5} xl={6} className="px-4 mt-5 pt-5 vision-col">

                            <p className=""><span className="" style={{ fontWeight: "400", fontSize: "45px", }}>Our</span><span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Mission</span></p>
                            <p className="text-secondary text">We strive to be a global leader in the delivery of innovative technologies that drive and support business growth and success. We combine the power of IT, branding, and marketing to help businesses adapt and thrive in a fast-evolving digital world.

                                Our mission is to empower organizations with cutting-edge solutions that enhance efficiency, engagement, and market presence. Through creativity and technology, we transform ideas into impactful digital experiences.</p>
                        </Col>

                        <Col xs={12} sm={12} md={4} lg={6} xl={6} className="text-end">
                            <div>
                                <img src={vision1} className="vision-img mission img-fluid" />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={5} xl={6} className="px-4 mt-5 pt-5 vision-col1">

                            <p className="text-end pt-5"><span className="" style={{ fontWeight: "400", fontSize: "45px", }}>Our</span><span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Mission</span></p>
                            <p className="text-secondary text-end text">At FTFL Technology, our mission is to empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth. We are committed to delivering high-quality digital products, seamless user experiences, and strategic IT consulting to help our clients succeed in the ever-evolving tech landscape.

                                By leveraging the latest advancements in technology, we create scalable solutions tailored to unique business needs. Our dedication to excellence and continuous improvement ensures long-term success for our clients.</p>
                        </Col>

                    </Row>
                    <Row className="vision-row  mt-5 pt-5">
                        <Col xs={12} sm={12} md={8} lg={5} xl={6} className="px-4">
                            <p className="pt-5"><span className="" style={{ fontWeight: "400", fontSize: "45px", }}>Our</span><span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Approach</span></p>
                            <p className="text-secondary text ">We focus on their special needs and, therefore, carry out customized IT, branding, and marketing services to serve our clients. Our agile approach ensures flexibility, scalability, and continuous growth, further helping businesses thrive under these ever-changing digital circumstances.

                                By staying ahead of industry trends, we empower businesses to achieve sustained success in a competitive landscape.</p>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={6} xl={6} className="text-end mt-5">
                            <div>
                                <img src={vision2} className="vision-img img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default OurVision