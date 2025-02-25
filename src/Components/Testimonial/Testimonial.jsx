import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";

const CardSlider = () => {
  const cards = [
    { id: 1, title: "Card 1", description: "This is the first card." },
    { id: 2, title: "Card 2", description: "This is the second card." },
    { id: 3, title: "Card 3", description: "This is the third card." },
    { id: 4, title: "Card 4", description: "This is the fourth card." },
    { id: 5, title: "Card 5", description: "This is the fifth card." },
  ];

  return (
    <Container className="py-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3} // Default: 3 cards per view
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          375: { slidesPerView: 1 }, // Mobile: 1 card
          425: { slidesPerView: 1 }, // Mobile: 1 card
          768: { slidesPerView: 2 }, // Tablet: 2 cards
          1024: { slidesPerView: 3 }, // Desktop: 3 cards
        }}
        className="py-3"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="card shadow-sm text-center p-4">
              <h2 className="h5">{card.title}</h2>
              <p className="text-muted">{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CardSlider;
