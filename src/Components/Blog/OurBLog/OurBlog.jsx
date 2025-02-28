import { Col, Row } from 'react-bootstrap'
import Blogbg from '../../../assets/blogbg.png'
import cloud from '../../../assets/cloud.png'

import ai from '../../../assets/ai.png'

import mobileweb from '../../../assets/mobileweb.png'



import fronted from '../../../assets/fronted.png'
import react from '../../../assets/react.png'
import mmbolie from '../../../assets/MMobille.png'

import thepower from '../../../assets/thepower.png'
import costeffective from '../../../assets/costEffective.png'
import bussiness from '../../../assets/effective.png'
import '../OurBLog/OurBlog.css'
import ItConsulting from '../../ItCounsulting/ItConsulting'
import NewsLetter from '../../Newletter/NewsLetter'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import SEO from '../../SEO'

function OurBlog() {
    const navigate = useNavigate();
    const location = useLocation();
    const latestTechTrendsRef = useRef(null);
    const webMobileDevRef = useRef(null);
    const itConsultingRef = useRef(null);
const itAndBusinessRef=useRef(null);
    useEffect(() => {
        if (location.state?.scrollTo) {
            setTimeout(() => {
                if (location.state.scrollTo === "latest-tech-trends" && latestTechTrendsRef.current) {
                    latestTechTrendsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                if (location.state.scrollTo === "web-mobile-development" && webMobileDevRef.current) {
                    webMobileDevRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                if (location.state.scrollTo === "it-consultation" && itConsultingRef.current) {
                    itConsultingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                if (location.state.scrollTo === "it-bisiness" && itAndBusinessRef.current) {
                    itAndBusinessRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 100);
        }
    }, [location]); // Runs when location changes

    return (
        <div>
             <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
            <div>
                <div className='ourblog-wrapper'>
                    <div className=" ourblog-div">
                        <img src={Blogbg} alt="Background" className="w-100 bg-blog" />
                        <div>
                            <div className='ourblog-Container'>
                                <div className='ourblog-Container1'>
                                <div className="text-center mt-5" >
                                    <p>
                                        <span className='text-dark' style={{ fontWeight: "400", fontSize: "45px" }}>Our</span>
                                        <span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Blog</span>
                                    </p>
                                </div>
                               <div ref={latestTechTrendsRef} className='pt-5'>
                               <div  >
                                    <p className=' mt-5 pt-5' style={{ fontSize: "32px ", fontWeight: "500" }}>Latest Tech Trends</p>
                                    <p className='text text-secondary mt-3 mb-5'>Explore insights on AI, cloud computing, and emerging technologies shaping the future, driving innovation and transformation across industries, and unlocking new possibilities for businesses and individuals alike.</p>
                                </div >
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='my-4'>
                                        <div className='p-4 rounded rounded-5 blog-div ' style={{
                                            border: "",


                                            
                                        }}
                                        onClick={() => navigate("/blogs/latest-tech-trends/ai&machine")}>
                                            <div className='blog-div1'>
                                            <img src={ai} className='w-100 img-fluid' />
                                            <p className='mt-4 mb-2' style={{ fontSize: "22px ", fontWeight: "500" }}>AI & Machine Learning: The Next Big Leap</p>
                                            <p className='text text-secondary'>Discover how AI is transforming industries and what’s next in automation.</p>
                                            </div>
                                           
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='my-4'>
                                    <div className='p-4 rounded rounded-5 blog-div' style={{
                                            border: "",
                                            
                                        }}
                                        onClick={() => navigate("/blogs/latest-tech-trends/cloudcomputing")}>
                                            <div className='blog-div1'>
                                            <img src={cloud} className='w-100' />
                                            <p className='mt-4 mb-2' style={{ fontSize: "22px ", fontWeight: "500" }}>Cloud Computing Trends in 2025</p>
                                            <p className='text text-secondary'>Learn how businesses are leveraging cloud technology for scalability and efficiency.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='my-4'>
                                    <div className='p-4 rounded rounded-5 blog-div' style={{
                                            border: "",
                                            
                                        }}
                                        onClick={() => navigate("/blogs/latest-tech-trends/web&mobile")}>
                                            <div className='blog-div1'>
                                            <img src={mobileweb} className='w-100' />
                                            <p className='mt-4 mb-2' style={{ fontSize: "22px ", fontWeight: "500" }}>The Future of Web & Mobile Apps</p>
                                            <p className='text text-secondary'>Cloud technology is driving the future of web and mobile apps with scalability and efficiency.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                               </div>
                               <div  ref={webMobileDevRef} className='mt-5 pt-5'>
                               <div className='pt-5'>
                                    <p className='' style={{ fontSize: "32px ", fontWeight: "500" }}>Web & Mobile Development</p>
                                    <p className='text text-secondary mt-3 mb-5'>Learn about the latest frameworks, coding techniques, and performance optimization tips.</p>
                                </div>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='my-4'>
                                        <div className='p-4 rounded rounded-5 blog-div' style={{
                                            border: "",
                                            
                                        }}
                                        onClick={() => navigate("/blogs/web-&-mobile-development/frontendVsbackend")}
                                        >
                                            <div className='blog-div1'>
                                            <img src={fronted} className='w-100 img-fluid' />
                                            <p className='mt-4 mb-2' style={{ fontSize: "22px ", fontWeight: "500" }}>Frontend vs. Backend: What You Need to Know</p>
                                            <p className='text text-secondary'>A breakdown of web development roles and best practices.</p>
                                            </div>
                                           
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='my-4'>
                                    <div className='p-4 rounded rounded-5 blog-div' style={{
                                            border: "",
                                            
                                        }}
                                        onClick={() => navigate("/blogs/web-&-mobile-development/reactvsangular")}>
                                            <div className='blog-div1'>
                                            <img src={react} className='w-100' />
                                            <p className='mt-4 mb-2' style={{ fontSize: "22px ", fontWeight: "500" }}>React vs. Vue vs. Angular: Which One Wins?</p>
                                            <p className='text text-secondary'>React vs. Vue vs. Angular – React for scale, Vue for ease, Angular for enterprise.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='my-4'>
                                    <div className='p-4 rounded rounded-5 blog-div' style={{
                                            border: "",
                                            
                                        }}
                                        onClick={() => navigate("/blogs/web-&-mobile-development/mobileperformance")}>
                                            <div className='blog-div1'>
                                            <img src={mmbolie} className='w-100' />
                                            <p className='mt-4 mb-2' style={{ fontSize: "22px ", fontWeight: "500" }}>Mobile App Performance Optimization Tips</p>
                                            <p className='text text-secondary'>Optimize your mobile app by compressing assets, minimizing API calls, and improving rendering.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                               </div>
                              </div>
                              <div ref={itAndBusinessRef}>
                                    <ItConsulting />
                                </div> 
                              <div>
                               <div  ref={itConsultingRef} className='mt-5 pt-5'>
                               <div className='pt-5'>
                                    <p className='' style={{ fontSize: "32px ", fontWeight: "500" }}>Some more on IT Consultation</p>
                                    <p className='text text-secondary mt-3 mb-5'>Learn about the latest frameworks, coding techniques, and performance optimization tips. Discover cutting-edge tools that enhance development efficiency and streamline workflows. Stay updated with real-world case studies and expert recommendations.</p>
                                </div>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='my-4'>
                                        <div className='p-4 rounded rounded-5 blog-div' style={{
                                            border: "",
                                            
                                        }}
                                        onClick={() => navigate("/blogs/itconsultation/digitaltransformation")}
                                        >
                                            <div className='blog-div1'>
                                            <img src={thepower} className='w-100 img-fluid' />
                                            <p className='mt-4 mb-2' style={{ fontSize: "22px ", fontWeight: "500" }}>The Power of Digital Transformation</p>
                                            <p className='text text-secondary'>Strategies for integrating the latest tech into your business operations.</p>
                                            </div>
                                           
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='my-4'>
                                    <div className='p-4 rounded rounded-5 blog-div' style={{
                                            border: "",
                                            
                                        }}
                                        onClick={() => navigate("/blogs/itconsultation/costeffectivestartup")}
                                        >
                                            <div className='blog-div1'>
                                            <img src={costeffective} className='w-100' />
                                            <p className='mt-4 mb-2' style={{ fontSize: "22px ", fontWeight: "500" }}>Cost-Effective IT Solutions for Startups</p>
                                            <p className='text text-secondary'> Discover smart IT investments to grow your business on a budget.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className='my-4'>
                                    <div className='p-4 rounded rounded-5 blog-div' style={{
                                            border: "",
                                            
                                        }}
                                        onClick={() => navigate("/blogs/itconsultation/businessroadmaps")}
                                        >
                                            
                                            <div className='blog-div1'>
                                            <img src={bussiness} className='w-100' />
                                            <p className='mt-4 mb-2' style={{ fontSize: "22px ", fontWeight: "500" }}>Why Businesses Need IT Roadmaps</p>
                                            <p className='text text-secondary'> Learn how strategic IT planning helps companies stay ahead of tech changes.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                               </div>
                               <NewsLetter/>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurBlog
