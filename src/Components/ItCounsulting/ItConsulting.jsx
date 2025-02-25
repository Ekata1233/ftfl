import { Button } from 'react-bootstrap'
import BlogHeader from '../../assets/IT 1.png'
import '../ItCounsulting/ItConsulting.css'
import { useNavigate } from 'react-router-dom'
import { useRef, forwardRef } from 'react'

// Forwarding ref to allow scrolling from parent (OurBlog.js)
const ItConsulting = forwardRef((props, ref) => {
  const navigate = useNavigate();

  return (
    <div ref={ref} className='pt-5'>
      <div className="flex-grow-1 my-5 py-5">
        <div className="carousel-container about position-relative text-start it-blog">
          <img src={BlogHeader} className="img-fluid w-100 consulting-img" alt="Slide 1" />
          <div className="position-absolute translate-middle p-3 header-content w-100">
            <h2 className="text-white fw-bold my-2 h1 pb-3">
              IT Consulting & Business Growth
            </h2>
            <p className="text-white header-p">
              How IT Consulting Can Boost Business Efficiency?
            </p>
            <Button 
              className='border-none px-4' 
              style={{ backgroundColor: "rgba(255, 255, 255, 0.37)" }}
              onClick={() => navigate("/blogs/it-consulting")}
            >
              Read More
            </Button>
          </div>
        </div> 
      </div>
    </div>
  );
});

export default ItConsulting;
