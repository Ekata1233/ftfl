import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaInfoCircle, FaBriefcase, FaUsers, FaBlog, FaEnvelope } from "react-icons/fa"; // Import icons
import logo from "../../assets/Group.png"; // Adjust the path if needed
import "../HeaderNav/HwaderNav.css";
import { useEffect, useState } from "react";
import SEO from "../SEO";

const HeaderNav = () => {
  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container className="navbar-container">
        <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
      <Navbar 
        expand="lg" 
        className={`bg-body-tertiary rounded rounded-pill navbar-custom ${isFixed ? 'fixed-top navbar-fixed' : ''}`} 
        style={isFixed ? { 
          top: 0, 
          left: '0%', 
          right: '0%', 
          transition: 'top 0.8s ease-in-out', 
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
        } : {}}>
        <Navbar.Brand href="/">
          <img src={logo} alt="Artisticify Logo" className="ftfl-logo ms-4"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"   
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="custom-offcanvas"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
            <Navbar.Brand href="/">
          <img src={logo} alt="Artisticify Logo" className="ftfl-logo ms-4"/>
        </Navbar.Brand>            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas-custom-bg">
            <Nav className="justify-content-end flex-grow-1 pe-2 me-4">
              <Nav.Link className="nav-link-custom mx-3 poppins-regular" onClick={() => navigate("/about")}>
                <span className="nav-icon"><FaInfoCircle /></span> About
              </Nav.Link>
              <Nav.Link className="nav-link-custom mx-3 poppins-regular" onClick={() => navigate("/services")}>
                <span className="nav-icon"><FaBriefcase /></span> Services
              </Nav.Link>
              <Nav.Link className="nav-link-custom mx-3 poppins-regular" onClick={() => navigate("/careers")}>
                <span className="nav-icon"><FaUsers /></span> Careers
              </Nav.Link>
              <Nav.Link className="nav-link-custom mx-3 poppins-regular" onClick={() => navigate("/blogs")}>
                <span className="nav-icon"><FaBlog /></span> Blogs
              </Nav.Link>
              <Nav.Link className="nav-link-custom mx-3 poppins-regular" onClick={() => navigate("/contact")}>
                <span className="nav-icon"><FaEnvelope /></span> Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </Container>
  );
};

export default HeaderNav;
