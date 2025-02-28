import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import f1 from '../../assets/2.png';
import f2 from '../../assets/1.png';
import f3 from '../../assets/3.png';
import f4 from '../../assets/4.png';
import HederNav from '../HeaderNav/HederNav';
import OurBusiness from '../OurBusiness/OurBusiness';
import OurServices from '../OurServices/OurServices1';
import WhyToChoose from './WhyToChoose/WhyToChoose';
import ShapeTheFuture from '../ShapeTheFuture/ShapeTheFuture';
import FAQs from '../FAQs/FAQs';
import SEO from "../SEO";

function Home() {
    const location = useLocation();
    const shapeTheFutureRef = useRef(null);

    useEffect(() => {
        if (location.state?.scrollTo === "shape-the-future") {
            shapeTheFutureRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
 const carouselItems = [
    {
      id: 1,
      image: f1,
      title: "Welcome to the Future of Technology Innovation, Insights, and Ideas",
      description: "At FTFL Technology, we create cutting-edge tech solutions that drive progress and redefine possibilities. Let’s build the future together.",
    },
    {
      id: 2,
      image: f2,
      title: "Welcome to the Future of Technology Innovation, Insights, and Ideas",
      description: "At FTFL Technology, we create cutting-edge tech solutions that drive progress and redefine possibilities. Let’s build the future together.",
    },
    {
      id: 3,
      image: f3,
      title: "Welcome to the Future of Technology Innovation, Insights, and Ideas",
      description: "At FTFL Technology, we create cutting-edge tech solutions that drive progress and redefine possibilities. Let’s build the future together.",
    },
    {
        id: 3,
        image: f4,
        title: "Welcome to the Future of Technology Innovation, Insights, and Ideas",
        description: "At FTFL Technology, we create cutting-edge tech solutions that drive progress and redefine possibilities. Let’s build the future together.",
      },
  ];
    return (
        <div>
            <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
            <div className="carousel-container">
                <div className="overlay-nav1">
                    <HederNav />
                </div>

                <Carousel fade className="carousel-container about position-relative text-center">
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id} interval={1000} >
          <img src={item.image} className="img-fluid w-100 about-img" alt={`Slide ${item.id}`} />
          <div className="position-absolute translate-middle p-3 header-content w-75">
            <h1 className="text-white fw-bold my-4 h1">{item.title}</h1>
            <p className="text-white header-p mb-5">{item.description}</p>
           
           <span className="py-2  px-md-5 px-lg-5 px-xl-5 rounded rounded-5 text-white scrash" style={{backgroundColor:" #FFFFFF57", border:"1px solid white", fontWeight:"500"}}>From Scratch to Success</span>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
            </div>

            <OurBusiness />
            <OurServices />
            <WhyToChoose />

            <div >
                <ShapeTheFuture />
            </div>

            <FAQs />
        </div>
    );
}

export default Home;
