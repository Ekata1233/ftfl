import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import '../Testimonial/Testimonial.css';
import Image from '../../assets/Ellipse 159.png';
import { Col, Row } from "react-bootstrap";

function Testimonial() {
  const [activeButton, setActiveButton] = useState('');
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonial = [
    { para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", src: "/testimonial-1.jpg", title: "Johan Abraham", text1: "New York, USA", text2: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></> },
    { para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", src: "/testimonial-2.jpg", title: "Johan Abraham", text1: "New York, USA", text2: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></> },
    { para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", src: "/testimonial-3.jpg", title: "Johan Abraham", text1: "New York, USA", text2: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></> },
    { para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", src: "/testimonial-4.jpg", title: "Johan Abraham", text1: "New York, USA", text2: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></> }
  ];

  const extendedCards = [...testimonial, ...testimonial.slice(0, 3)];

  const handleButtonClick = (direction) => {
    if (isTransitioning) {
      setVisibleIndex(prevIndex => direction === 'LeftArrow' ? (prevIndex > 0 ? prevIndex - 1 : testimonial.length - 1) : prevIndex + 1);
    }
    setActiveButton(direction);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex(prevIndex => prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (visibleIndex === extendedCards.length - 3) {
      setTimeout(() => {
        setIsTransitioning(false);
        setVisibleIndex(0);
      }, 500);

      setTimeout(() => {
        setIsTransitioning(true);
      }, 600);
    }
  }, [visibleIndex, extendedCards.length]);

  const centerIndex = (visibleIndex + 1) % testimonial.length;

  return (
    <div className="testi" style={{ marginTop: "120px" }}>
      <Container style={{ overflow: 'hidden' }}>
        <h4 className="colorBlue pt-5 pb-2 text-center">----- Testimonial -----</h4>
        <h1 className="text-center">Our Client Say!!!</h1>

        <div className='d-flex justify-content-between align-items-center py-2'>
          <Button variant="" className={`destiBtn rounded-pill mx-2 ${activeButton === 'LeftArrow' ? 'active-btn' : ''}`} onClick={() => handleButtonClick('LeftArrow')}>
            <FaArrowLeft />
          </Button>

          <Button variant="" className={`destiBtn rounded-pill mx-2 ${activeButton === 'RightArrow' ? 'active-btn' : ''}`} onClick={() => handleButtonClick('RightArrow')}>
            <FaArrowRight />
          </Button>
        </div>

       <Row>
        <Col>
        <div className="card-container d-flex my-5" style={{ display: 'flex', transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none', transform: `translateX(-${visibleIndex * (100 / 3)}%)` }}>
          {extendedCards.map((testi, index) => (
            <Card 
              className={`packCard1 rounded rounded-4 mx-2 ${index % testimonial.length === centerIndex ? 'center-card' : ''}`} 
              style={{ 
                width: index % testimonial.length === centerIndex ? '620px' : '550px', 
                border: "1px solid #298CF3", 
                backgroundColor: index % testimonial.length === centerIndex ? '#98C8F9' : 'white',
                boxShadow: index % testimonial.length === centerIndex ? '0px 4px 15px rgba(0, 0, 0, 0.2)' : 'none'
              }} 
              key={index}>

              <Row>
                <Col xs={3} sm={3} md={3}><Card.Img variant="top" src={Image} className="rounded-circle mx-auto d-block mt-3 ms-4 mt-4" style={{ border: '2px solid #298CF3', padding: '5px', width: '80px', height: '80px' }} /></Col>
                <Col xs={8} sm={8}  md={8}><Card.Body className="text-start">
                  <Card.Title className="mt-3">{testi.title}</Card.Title>
                  <Card.Text className="text-muted">{testi.text1}</Card.Text>
                  <Card.Text className="testi-stars">{testi.text2}</Card.Text>
                </Card.Body></Col>
                <Col md={12}><Card.Text className="text-muted px-3">{testi.para}</Card.Text></Col>
              </Row>
            </Card>
          ))}
        </div>
        </Col>
       </Row>
      </Container>
    </div>
  );
}

export default Testimonial;
