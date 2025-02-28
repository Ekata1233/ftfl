import { Col, Container, Row } from 'react-bootstrap'
import servicesBg from '../../../assets/bg services.png'
import '../OurServices/OurServices.css'
import OurServices1 from '../../OurServices/OurServices1'
import webApp from '../../../assets/web-app.png'
import mobileApp from '../../../assets/mobile-app.png'
import uiux from '../../../assets/uiux.png'

import graphic from '../../../assets/itsale.png'

import itSale from '../../../assets/mobile-app.png'

import itConsulting from '../../../assets/itconsulting.png'
import SEO from '../../SEO'



function OurServices() {
    return (
        <div>
            <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
            <div className='OurServices-wrapper'>
                <div className=" OurServices-div">
                    <img src={servicesBg} alt="Background" className="w-100 bg-services" />
                    <Container>
                        <div className='OurServices-Container'>
                            <OurServices1 />

                          <div className='py-5'>
                          <div style={{ border: "1px solid #67EEFF", boxShadow: "0px 0px 14.4px #529FEFD6" }} className='rounded rounded-5 px-lg-5 py-5 my-2'>
                                <Row className='px-5 ' >
                                    
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                                        <div className=''>
                                            <h3>Web Application Development</h3>
                                            <p className='text-secondary text text'>
                                                Build powerful, scalable, and secure web applications that drive engagement and business growth.
                                            </p>
                                            <div className='text'>
                                                <p>Custom web app development</p>
                                                <p></p>
                                                <p>Progressive Web Apps (PWAs)</p>
                                                <p>API integration & backend solutions</p>
                                                <p> CMS & eCommerce platforms</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                                        <div className='text-end'>
                                            <img src={webApp} className='img-fluid'/>
                                        </div>
                                    </Col>
                                   
                                </Row>
                                
                            </div>
                          </div>
                          <div className='py-5'>
                            <div style={{ border: "1px solid #67EEFF", boxShadow: "0px 0px 14.4px #529FEFD6" }} className='rounded rounded-5 px-lg-5 py-5 my-2'>
                                <Row className='px-5 ' >
                                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='hide-col1 '>
                                        <div className='text-start'>
                                            <img src={mobileApp} className='img-fluid'/>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                                        <div className=''>
                                            <h3>Mobile Application Development</h3>
                                            <p className='text-secondary text'>
                                            Deliver seamless mobile experiences with high-performance apps for iOS and Android.
                                            </p>
                                            <div className='text'>
                                                <p>Native & cross-platform apps</p>
                                                <p></p>
                                                <p>UI/UX-optimized designs</p>
                                                <p>App maintenance & updates</p>
                                                <p>App store deployment & optimization</p>
                                            </div>
                                        </div>
                                    </Col>
                                    
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}className='hide-col'>
                                        <div className='text-end'>
                                            <img src={mobileApp} className='img-fluid'/>
                                        </div>
                                    </Col>
                                </Row>
                                
                            </div>
                            </div>
                            <div className='py-5'>
                            <div style={{ border: "1px solid #67EEFF", boxShadow: "0px 0px 14.4px #529FEFD6" }} className='rounded rounded-5 px-lg-5 py-5 my-2'>
                                <Row className='px-5 ' >
                                    
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                                        <div className=''>
                                            <h3>UX/UI Design</h3>
                                            <p className='text-secondary text text'>
                                            We craft stunning, user-friendly digital experiences that captivate your audience.
                                            </p>
                                            <div className='text'>
                                                <p> Wireframing & prototyping</p>
                                                <p></p>
                                                <p> Responsive & interactive design</p>
                                                <p> User research & testing</p>
                                                <p>Brand identity & visual consistency</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                                        <div className='text-end'>
                                            <img src={uiux} className='img-fluid'/>
                                        </div>
                                    </Col>
                                   
                                </Row>
                                
                            </div>
                            </div>
                            <div className='py-5'>
                            <div style={{ border: "1px solid #67EEFF", boxShadow: "0px 0px 14.4px #529FEFD6" }} className='rounded rounded-5 px-lg-5 py-5 my-2'>
                                <Row className='px-5 ' >
                                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='hide-col1'>
                                        <div className='text-start'>
                                            <img src={graphic} className='img-fluid'/>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                                        <div className=''>
                                            <h3>Graphic Design</h3>
                                            <p className='text-secondary text'>
                                            Visually compelling graphics that make an impact.
                                            </p>
                                            <div className='text'>
                                                <p>Logo & brand design</p>
                                                <p></p>
                                                <p>Marketing & social media graphics</p>
                                                <p>Print & digital media</p>
                                                <p>Motion graphics & animations</p>
                                            </div>
                                        </div>
                                    </Col>
                                    
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}className='hide-col'>
                                        <div className='text-end'>
                                            <img src={graphic} className='img-fluid'/>
                                        </div>
                                    </Col>
                                </Row>
                                
                            </div>
                            </div>
                            <div className='py-5'>
                            <div style={{ border: "1px solid #67EEFF", boxShadow: "0px 0px 14.4px #529FEFD6" }} className='rounded rounded-5 px-lg-5 py-5 my-2'>
                                <Row className='px-5 ' >
                                    
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                                        <div className=''>
                                            <h3> IT Sales & Support</h3>
                                            <p className='text-secondary text text'>
                                            Reliable IT solutions and support to keep your business running smoothly.
                                            </p>
                                            <div className='text'>
                                                <p>Hardware & software sales</p>
                                                <p></p>
                                                <p>IT infrastructure setup</p>
                                                <p> Technical support & troubleshooting</p>
                                                <p>Managed IT services</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                                        <div className='text-end'>
                                            <img src={itSale} className='img-fluid'/>
                                        </div>
                                    </Col>
                                   
                                </Row>
                                
                            </div>
                            </div>
                            <div className='py-5'>
                            <div style={{ border: "1px solid #67EEFF", boxShadow: "0px 0px 14.4px #529FEFD6" }} className='rounded rounded-5 px-lg-5 py-5 my-2'>
                                <Row className='px-5 ' >
                                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className='hide-col1'>
                                        <div className='text-start'>
                                            <img src={itConsulting} className='img-fluid'/>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                                        <div className=''>
                                            <h3>IT Consulting</h3>
                                            <p className='text-secondary text'>
                                            Expert guidance to optimize your IT strategies and operations.
                                            </p>
                                            <div className='text'>
                                                <p>Digital transformation consulting</p>
                                                <p></p>
                                                <p>IT strategy & roadmap development</p>
                                                <p>System integration solutions</p>
                                                <p>Cost optimization & risk management</p>
                                            </div>
                                        </div>
                                    </Col>
                                    
                                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}className='hide-col'>
                                        <div className='text-end'>
                                            <img src={itConsulting} className='img-fluid'/>
                                        </div>
                                    </Col>
                                </Row>
                                
                            </div>
                        </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default OurServices