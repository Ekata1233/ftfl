import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import Image from "../../assets/profile 1.png";

// Star Rating Component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div style={{ color: "#298CF3", display: "flex" }}>
      {[...Array(fullStars)].map((_, i) => <IoMdStar key={`full-${i}`} />)}
      {halfStar && <IoMdStarHalf />}
      {[...Array(emptyStars)].map((_, i) => <IoMdStarOutline key={`empty-${i}`} />)}
    </div>
  );
};

// Main Component
const CardSlider = () => {
  const testimonials = [
    {
      id: 1,
      title: "Manish (Dubai)",
      name: "Cleaning Services App",
      description: "Effortless, professional cleaning services—book anytime!",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Neeraj (Delhi)",
      name: "Social Media App",
      description: "Stay connected and share your moments easily.",
      rating: 3.8,
    },
    {
      id: 3,
      title: "Mayur (USA)",
      name: "LMS Platform",
      description: "Seamless learning, collaboration, and skill development.",
      rating: 5,
    },
    {
      id: 4,
      title: "Sonia (Mumbai)",
      name: "Travel Booking App",
      description: "Smooth and hassle-free travel planning in seconds!",
      rating: 4.2,
    },
    {
      id: 5,
      title: "Karan (London)",
      name: "E-commerce Platform",
      description: "Shop from anywhere, fast delivery guaranteed!",
      rating: 4.0,
    },
    {
      id: 6,
      title: "Riya (Bangalore)",
      name: "Fitness Tracker App",
      description: "Track your workouts and progress seamlessly.",
      rating: 4.7,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive logic
  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setItemsPerPage(1);
    } else if (width < 992) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(3);
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage) % testimonials.length);
  };

  const currentItems = testimonials.slice(currentIndex, currentIndex + itemsPerPage);
  const visibleItems =
    currentItems.length < itemsPerPage
      ? [...currentItems, ...testimonials.slice(0, itemsPerPage - currentItems.length)]
      : currentItems;

  return (
    <div className="py-5 text-center">
      <Container>
        <Row>
          {visibleItems.map((item) => (
            <Col key={item.id} md={12 / itemsPerPage} className="mb-4 d-flex">
              <Card className="w-100 text-start shadow-sm border" style={{ borderColor: "#298CF3" }}>
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={Image}
                      alt="Profile"
                      className="rounded-circle me-3"
                      style={{ width: "60px", height: "60px", border: "2px solid #298CF3", padding: "4px" }}
                    />
                    <div>
                      <h6 className="mb-1">{item.title}</h6>
                      <small>{item.name}</small>
                    </div>
                  </div>
                  <StarRating rating={item.rating} />
                  <p className="mt-3 mb-0">{item.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Navigation Buttons */}
        <div className="d-flex justify-content-center mt-4 gap-3">
          <button
            className="btn p-2"
            style={{ backgroundColor: "#298CF3", color: "#fff", borderRadius: "50%" }}
            onClick={handlePrev}
          >
            <BiLeftArrow size={20} />
          </button>
          <button
            className="btn p-2"
            style={{ backgroundColor: "#298CF3", color: "#fff", borderRadius: "50%" }}
            onClick={handleNext}
          >
            <BiRightArrow size={20} />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default CardSlider;
