import { Button, Col, Row } from "react-bootstrap"
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
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import Positions from "../Positions/Positions"
import CarreerOpportunities from "../CarreerOpportunities/CarreerOpportunities"
import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import SEO from "../SEO"

function Carreers() {
  const location = useLocation();
  const jobListingsRef = useRef(null);

  // Function to scroll to the job listings section
  const handleApplyNowClick = () => {
    jobListingsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (location.state?.scrollTo === "job-listings") {
      jobListingsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const content = [
    { img: why1, title: "Innovative", p: 'Join FTFL Technology and innovate with us to shape the future of IT.' },
    { img: why2, title: "Expertise", p: "FTFL Technology – Unmatched expertise that transforms ideas into reality." },
    { img: why3, title: "Partnership", p: "FTFL Technology – Building strong partnerships for a smarter future together." },
    { img: why4, title: "Scalability", p: "Technology that grows as fast as your vision—powered by FTFL Technology." },
    { img: why5, title: "Success", p: "Success isn’t a destination; with FTFL Technology, it’s a journey of growth." },
    { img: why6, title: "Support", p: "Reliable solutions, dedicated support—FTFL Technology has your back." },
  ];

  return (
    <div>
      <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
      <div className="overlay-nav overlay-nav1">
        <HeaderNav />
      </div>
      <div>
        <div className="flex-grow-1">
          {/* Carousel Section */}
          <div className="carousel-container about position-relative text-center">
            <img src={carrers} className="img-fluid w-100 about-img" alt="Slide 1" />
            <div className="position-absolute translate-middle py-4 my-4  header-content w-100 px-3">
              <p className="text-white text">Carreers</p>
              <h1 className="text-white fw-bold my-4 mx-3 h1">
                Shape the Future With Us
              </h1>
              <p className="text-white header-p">
                Be part of an innovative, dynamic, and forward-thinking team. At FTFL Technology, we foster creativity, collaboration, and growth, empowering you to make an impact in the world of technology.
              </p>

              {/* Updated Button with onClick */}
              <Button
                variant=""
                className="mt-4 blue-btn text-white"
                onClick={handleApplyNowClick} // Scrolls to job listings
              >
                Apply Now <MdArrowForwardIos />
              </Button>
            </div>
          </div>

          {/* Additional Content */}
          <div className='Carreers-wrapper'>
            <div className=" Carreers-div">
              <img src={carrersbg} alt="Background" className="w-100 bg-carreer " />
              <div className='Carreers-Container pt-5'>
                <div className="text-start my-lg-5 py-lg-5" >
                  <p>
                    <span className='text-dark' style={{ fontWeight: "400", fontSize: "40px" }}>Why</span>
                    <span className="blue" style={{ fontWeight: "600", fontSize: "40px" }}> Work With Us?</span>
                  </p>
                </div>
                <Row className="" >
                  {content.map((item, index) => {
                    const ref = useRef(null);
                    const controls = useAnimation();
                    const isInView = useInView(ref, { threshold: 0.3 });

                    useEffect(() => {
                      if (isInView) {
                        controls.start({ opacity: 1, y: 0 });
                      } else {
                        controls.start({ opacity: 0, y: 50 }); // Reset animation on scroll up
                      }
                    }, [isInView, controls]);

                    return (
                      <Col
                        key={index}
                        xs={12}
                        sm={12}
                        md={6}
                        lg={4}
                        xl={4}
                        xxl={4}
                        className="animated-col pt-4"
                      >
                        <motion.div
                          ref={ref}
                          className="col-content py-lg-4 my-lg-4 mx-3 shadow-box p-3"
                          initial={{ opacity: 0, y: 50 }}
                          animate={controls}
                          transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                        >
                          <motion.img
                            src={item.img}
                            alt={item.title}
                            className="col-image"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={controls}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                          />
                          <motion.h3
                            className="col-title pt-3 pb-1"
                            initial={{ opacity: 0, y: -20 }}
                            animate={controls}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                          >
                            {item.title}
                          </motion.h3>
                          <motion.p
                            className="col-text text"
                            initial={{ opacity: 0, y: 10 }}
                            animate={controls}
                            transition={{ duration: 0.5, delay: index * 0.4 }}
                          >
                            {item.p}
                          </motion.p>
                        </motion.div>
                      </Col>
                    );
                  })}
                </Row>
                <div className="text-center my-lg-5 pt-5" >
                  <p className="">
                    <span className='text-dark' style={{ fontWeight: "400", fontSize: "40px" }}>Open</span>
                    <span className="blue" style={{ fontWeight: "600", fontSize: "40px" }}> Positions</span>
                  </p>
                  <p className="text text-center text-secondary pt-5 pb-5">FTFL Technology is looking for skilled professionals to join our growing team. Exciting opportunities await in a dynamic and innovative environment. Take the next step in your career and apply today! 🚀</p>
                </div>
                <div>
                  <Positions />
                </div>
                <div className="my-lg-5 py-lg-5">
                  <div className="text-start my-lg-5 py-5" >
                    <p>
                      <span className='text-dark' style={{ fontWeight: "400", fontSize: "40px" }}>Explore</span>
                      <span className="blue" style={{ fontWeight: "600", fontSize: "40px" }}> Career Opportunities</span>
                    </p>
                  </div>

                  {/* Scroll Target Section */}
                  <div ref={jobListingsRef}>
                    <CarreerOpportunities />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carreers;
