import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import Image from "../../assets/profile 1.png";
import SEO from "../SEO";
import { motion } from "framer-motion";

// Star Rating Component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
 
  return (
    <div style={{ color: "#298CF3", display: "flex" }}>
      {[...Array(fullStars)].map((_, i) => (
        <IoMdStar key={`full-${i}`} />
      ))}
      {halfStar && <IoMdStarHalf />}
      {[...Array(emptyStars)].map((_, i) => (
        <IoMdStarOutline key={`empty-${i}`} />
      ))}
    </div>
  );
};

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { id: 1, title: "Manish (Dubai)", name: "Cleaning Services App", description: "Effortless, professional cleaning services—book anytime with our easy-to-use app!", rating: 4.5 },
    { id: 2, title: "Neeraj (Delhi)", name: " Social Media App", description: "Stay connected, share your moments, and engage with a vibrant community effortlessly.", rating: 3.8 },
    { id: 3, title: "Mayur (USA)", name: "Learning Management System", description: "An all-in-one platform for seamless learning, collaboration, and skill development.", rating: 5 },
    { id: 4, title: "Anwar (Usa)", name: "Auto Parts Management System", description: "Efficiently manage, track, and optimize auto parts inventory with our all-in-one system.", rating: 3.5 },
  
  ];
 const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="py-4 text-center">
      <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={false} // Disables pagination
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          320: { slidesPerView: 1 },
          375: { slidesPerView: 1 },
          425: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
        className="py-3"
      >
        {cards.map((card, index) => (
             <SwiperSlide key={card.id} className="">
             <div
               className={`card shadow-sm text-center ${
                 window.innerWidth < 768 ? "py-4" : "py-md-3"
               } p-lg-4 ${index === activeIndex + 1 ? "active-card" : ""}`}
               style={{ border: "1px solid #298CF3" }}
             >
               <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
               <div className="d-flex mb-3">
                 <img
                   src={Image}
                   alt="Profile"
                   className="rounded-circle me-4 d-block ms-2"
                   style={{
                     border: "2px solid #298CF3",
                     padding: "5px",
                     width: "80px",
                     height: "80px",
                   }}
                 />
                 <div className="text-start mt-2">
                   <h2 className="h5">{card.title}</h2>
                   <p>{card.name}</p>
                 </div>
               </div>
               <div className="ms-2">
                 <StarRating rating={card.rating} />
                 <p className="mt-3 text-start">{card.description}</p>
               </div>
               {/* Pagination inside card */}
               </motion.div>
             </div>
           </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="d-flex justify-content-center mt-3">
        <button className="custom-prev mx-3 nav-btn rounded-circle p-2" style={{ border: "1px solid #298CF3" }}>
          <FaChevronLeft size={20} />
        </button>
        <button className="custom-next mx-3 nav-btn rounded-circle p-2" style={{ border: "1px solid #298CF3" }}>
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Custom Styles */}
      <style>{`
        .nav-btn {
          background: none;
          border: none;
          color: #298CF3;
          cursor: pointer;
        }
        .nav-btn:hover {
          color: #1b6db0;
        }
        .active-card {
          transform: scale(1.1);
          transition: transform 0.5s ease-in-out;
          box-shadow: 0px 10px 20px rgba(41, 140, 243, 0.3);
        }
      `}</style>
    </div>
  );
};

export default CardSlider;
