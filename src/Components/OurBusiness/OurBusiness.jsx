import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation, useInView } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../SEO";

// Variants for smooth animations
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.5, ease: "easeInOut" } 
  }
};

// Counter Component
const Counter = ({ end }) => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      const duration = 2000; // Total animation duration in ms
      const steps = end;
      const intervalTime = duration / steps;

      intervalRef.current = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < end) {
            return prevCount + 1;
          } else {
            clearInterval(intervalRef.current);
            return end;
          }
        });
      }, intervalTime);
    } else {
      controls.start("hidden");
      setCount(0);
    }

    return () => clearInterval(intervalRef.current);
  }, [end, inView, controls]);

  return (
    <motion.h2 ref={ref} className="blue" variants={textVariants} initial="hidden" animate={controls}>
      {count}+
    </motion.h2>
  );
};

Counter.propTypes = {
  end: PropTypes.number.isRequired,
};

// Our Business Section
function OurBusiness() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="poppins-regular text-center pt-2 my-lg-5 text">
      <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
      <Container>
        <motion.h2 variants={textVariants} initial="hidden" animate={controls}>
          Our Business in <span className="blue">Action</span>
        </motion.h2>
        <motion.p
          className="text-secondary my-4"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          At FTFL Technology, we transform ideas into reality with cutting-edge
          solutions in software development, branding, and digital strategy. Our
          expertise ensures seamless innovation, empowering businesses to scale
          and succeed in the ever-evolving tech landscape.
        </motion.p>
      </Container>
      <Container>
        <Row className="mt-5 py-5">
          {[
            { label: "Happy Clients", end: 15 },
            { label: "Projects Completed", end: 9 },
            { label: "Employees", end: 20 },
          ].map((item, index) => (
            <Col key={index}>
              <motion.div variants={textVariants} initial="hidden" animate={controls}>
                <Counter end={item.end} />
                <p>{item.label}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default OurBusiness;
