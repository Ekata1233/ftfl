import HeaderNav from "../HeaderNav/HederNav"
import BlogHeader from '../../assets/Blog.png'
import OurBlog from "./OurBLog/OurBlog"
import SEO from "../SEO"

function Blog() {
  return (
    <div className="d-flex flex-column min-vh-100">
        <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
       <div className="overlay-nav overlay-nav1">
      <HeaderNav />
    </div>
    <div  className="flex-grow-1">
    <div className="carousel-container about position-relative text-center">
        <img src={BlogHeader} className="img-fluid w-100 about-img" alt="Slide 1" />
        <div className="position-absolute translate-middle p-5 header-content w-100">
          <p className="text-white text">Blog</p>
          <h1 className="text-white fw-bold my-4 h1 pb-2">
          Insights & Innovation: Our Blogs
          </h1>
         
          <p className="text-white header-p">
          Stay ahead in the digital world with expert insights, industry trends, and technology updates. Explore our latest articles on web development, IT solutions, mobile apps, and more.
          </p>

         
        </div>
      </div>
     
    </div>
    <OurBlog/>
    </div>
  )
}

export default Blog