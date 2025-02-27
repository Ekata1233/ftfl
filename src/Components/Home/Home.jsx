import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import f1 from '../../assets/F2 (1).png';
import f2 from '../../assets/1.png';
import f3 from '../../assets/3.png';
import f4 from '../../assets/4.png';
import HederNav from '../HeaderNav/HederNav';
import OurBusiness from '../OurBusiness/OurBusiness';
import OurServices from '../OurServices/OurServices1';
import WhyToChoose from './WhyToChoose/WhyToChoose';
import ShapeTheFuture from '../ShapeTheFuture/ShapeTheFuture';
import FAQs from '../FAQs/FAQs';

function Home() {
    const location = useLocation();
    const shapeTheFutureRef = useRef(null);

    useEffect(() => {
        if (location.state?.scrollTo === "shape-the-future") {
            shapeTheFutureRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div>
            <div className="carousel-container">
                <div className="overlay-nav">
                    <HederNav />
                </div>

                <Carousel >
                <Carousel.Item interval={1000} className="w-100 position-relative">
    <img src={f1} className="d-block w-100" alt="Slide 1" />
    <Carousel.Caption className="custom-caption w-100">
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
</Carousel.Item>
                    
                    <Carousel.Item interval={1000}>
                        <img src={f2} className="home-img" alt="Slide 2" />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img src={f3} className="home-img" alt="Slide 3" />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img src={f4} className="home-img" alt="Slide 4" />
                    </Carousel.Item>
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
