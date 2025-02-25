import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Col, Row, Container } from "react-bootstrap";

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < end) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return end;
        }
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, [end]);

  return <h2 className="blue">{count}+</h2>;
};

Counter.propTypes = {
  end: PropTypes.number.isRequired,
};

function OurBusiness() {
  return (
    <div>
      <div className="poppins-regular text-center my-5 text">
        <Container>
          <h2 className=''>Our Business in <span className="blue">Action</span></h2>
          <p className='text-secondary my-4'>At FTFL Technology, we transform ideas into reality with cutting-edge solutions in software development, branding, and digital strategy. Our expertise ensures seamless innovation, empowering businesses to scale and succeed in the ever-evolving tech landscape.</p>
        </Container>
        <Container>
          <Row className="mt-5 py-5">
            <Col>
              <Counter end={9} />
              <p>Happy Clients</p>
            </Col>
            <Col>
              <Counter end={12} />
              <p>Projects Completed</p>
            </Col>
            <Col>
              <Counter end={15} />
              <p>Employees</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default OurBusiness;
