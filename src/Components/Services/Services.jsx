import HeaderNav from "../HeaderNav/HederNav"
import ServicesHeader from '../../assets/Services Hero Section.png'
import OurServices from "../Services/OurServices/OurServices.jsx"
import WhyChooseUS from "../WhyChooseUs/WhyChooseUS.jsx"
import SEO from "../SEO.jsx"


function Services() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
       <div className="overlay-nav overlay-nav1">
      <HeaderNav />
    </div>
    <div  className="flex-grow-1">
    <div className="carousel-container about position-relative text-center">
        <img src={ServicesHeader} className="img-fluid w-100 about-img" alt="Slide 1" />
        <div className="position-absolute translate-middle p-3 header-content w-100">
          <p className="text-white text">Services</p>
          <h1 className="text-white fw-bold my-4 h1 pb-3">
           Empowering Businesses With  Cutting Edge Technology
          </h1>
         
          <p className="text-white header-p">
          Helping Businesses Thrive with Advanced Technology Solutions for the Digital Age
          </p>

          {/* <Button variant="" className="mt-4 blue-btn text-white">
            Join Our Team <MdArrowForwardIos />
          </Button> */}
        </div>
      </div>
      <OurServices/>
    </div>
   
    <WhyChooseUS/>
    </div>
  )
}

export default Services