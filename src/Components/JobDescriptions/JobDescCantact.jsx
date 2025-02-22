import contactbg from "../../assets/image 40.png";
import { FiUpload } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import '../../Components/CarreerOpportunities/CarreersOpportunities.css';
import '../JobDescriptions/jobdescr.css'
import { useParams } from "react-router-dom";

function JobDescContact() {
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phone: "",
      workplace: "",
      fieldOfWork: "",
      employmentType: "",
      jobLocation: "",
      message: ""
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const { id } = useParams(); // Get job ID from URL
    const [job, setJobs] = useState([]);

    useEffect(() => {
        fetch("https://ftfl-backend.vercel.app/api/jobs/all-jobs")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("API Response:", data); // Log the actual response

                // Check if job listings are inside a key
                const jobsArray = Array.isArray(data) ? data : data.jobs;

                if (!Array.isArray(jobsArray)) {
                    throw new Error("API response does not contain a job list");
                }

                const urgentJobs = jobsArray.filter((job) => job.openingType === "Urgent");
                setJobs(urgentJobs);
            })
            .catch((error) => console.error("Error fetching jobs:", error.message));
    }, []);

    console.log("Job : ", job)
    console.log("Id : ", id)

    const xyz = job.find(j => j._id === id); // Find the job with the matching ID

    if (!xyz) {
        return <h2>Job not found</h2>;
    }




  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      setFile(event.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }
    if (!formData.workplace) newErrors.workplace = "Workplace type is required";
    if (!formData.fieldOfWork) newErrors.fieldOfWork = "Field of Work is required";
    if (!formData.employmentType) newErrors.employmentType = "Employment type is required";
    if (!formData.jobLocation.trim()) newErrors.jobLocation = "Job location is required";
    if (!file) newErrors.file = "File upload is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formPayload = new FormData();
      // Append form data to formPayload
  
      try {
        const response = await fetch(`https://ftfl-backend.vercel.app/api/jobs/apply/${id}`, {
          method: "POST",
          body: formPayload,
        });
  
        if (!response.ok) {
          const errorData = await response.json(); 
          throw new Error(errorData.message || "Failed to submit application");
        }
  
        setSuccessMessage("Form submitted successfully!");
        // Reset form and errors
      } catch (error) {
        console.error("Error submitting form:", error);
        setSuccessMessage(error.message || "Failed to submit form. Please try again.");
        console.log("Job ID:", id);
      }
    }
  };
  return (
    <div className="carrer-div" >
      <div className="text-start mt-5 pt-5 mb-5  pt-5">
        <p><span style={{ fontWeight: "400", fontSize: "45px" }}>Apply</span><span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Here</span></p>
        <p className="text text-secondary">Want to work with us? You&rsquo;re in good company!</p>
      </div>
      <Container fluid className="contact-form-container  rounded rounded-5 mt-5">
        <img src={contactbg} alt="Background" className="contact-form-bg con-bg" />
        <Container className="contact-form-content">
          <Form className="contact-form-box" onSubmit={handleSubmit}>
            <Row className="pt-4 my-5">
              <Col xs={12} lg={3} className="text">
                <p style={{ fontSize: "25px", fontWeight: "500" }} className="pp">Join Us</p>
                <li className="py-3">Join our team of innovators and make an impact in the world of technology.</li>
                <li>Apply now and be part of something great!</li>
              </Col>
              <Col xs={12} lg={9}>
                <Row>
                  <Col xs={12} md={6} className="pb-3 my-3">
                    <Form.Group>
                      <Form.Label>Full Name<span className="blue"> *</span></Form.Label>
                      <Form.Control type="text" name="fullName" placeholder="Full Name" className="custom-input border border-1 rounded rounded-5" onChange={handleChange} value={formData.fullName} />
                      {errors.fullName && <p style={{ color: "#298CF3" }}>{errors.fullName}</p>}
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} className="pb-3 my-3">
                    <Form.Group>
                      <Form.Label>Email <span className="blue"> *</span></Form.Label>
                      <Form.Control type="email" name="email" placeholder="Email Address" className="custom-input border border-1 rounded rounded-5" onChange={handleChange} value={formData.email} />
                      {errors.email && <p style={{ color: "#298CF3" }}>{errors.email}</p>}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6} lg={4} xl={4} xxl={4} className="pb-3 my-3">
                    <Form.Group>
                      <Form.Label>Phone No.<span className="blue"> *</span></Form.Label>
                      <Form.Control type="text" name="phone" placeholder="Phone Number" className="custom-input border border-1 rounded rounded-5" onChange={handleChange} value={formData.phone} />
                      {errors.phone && <p style={{ color: "#298CF3" }}>{errors.phone}</p>}
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} lg={4} xl={4} xxl={4} className="pb-3 my-3">
                    <Form.Group>
                      <Form.Label>Workplace Type<span className="blue"> *</span></Form.Label>
                      <Form.Select name="workplace" className="form-control custom-input border border-1 rounded rounded-5" onChange={handleChange} value={formData.workplace}>
                        <option value="">Select Workplace Type</option>
                        <option value="On-Site">On-Site</option>
                      </Form.Select>
                      {errors.workplace && <p style={{ color: "#298CF3" }}>{errors.workplace}</p>}
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} lg={4} xl={4} xxl={4} className="pb-3 my-3">
                    <Form.Group>
                      <Form.Label>Field of Work<span className="blue"> *</span></Form.Label>
                      <Form.Select name="fieldOfWork" className="form-control custom-input border border-1 rounded rounded-5" onChange={handleChange} value={formData.fieldOfWork}>
                        <option value="">Select Field of Work</option>
                        <option value="aa">{xyz.jobTitle}</option>
                      </Form.Select>
                      {errors.fieldOfWork && <p style={{ color: "#298CF3" }}>{errors.fieldOfWork}</p>}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6} className="pb-3 my-3">
                    <Form.Group>
                      <Form.Label>Employment Type<span className="blue"> *</span></Form.Label>
                      <Form.Select name="employmentType" className="form-control custom-input border border-1 rounded rounded-5" onChange={handleChange} value={formData.employmentType}>
                        <option value="">Select Employment Type</option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Intern">Intern</option>
                      </Form.Select>
                      {errors.employmentType && <p style={{ color: "#298CF3" }}>{errors.employmentType}</p>}
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} className="pb-3 my-3">
                    <Form.Group>
                      <Form.Label>Job Location<span className="blue"> *</span></Form.Label>
                      <Form.Select name="jobLocation" className="form-control custom-input border border-1 rounded rounded-5" onChange={handleChange} value={formData.jobLocation}>
                        <option value="">Select Job Location</option>
                        <option value="Pune">Pune</option>
                      </Form.Select>
                      {errors.jobLocation && <p style={{ color: "#298CF3" }}>{errors.jobLocation}</p>}
                    </Form.Group>
                  </Col>
                </Row>
                <Col xs={12} className="pb-3 my-3">
                  <Form.Group>
                    <Form.Label>Upload File<span className="blue"> *</span></Form.Label>
                    <div className="file-upload-container border border-1 rounded rounded-5 d-flex align-items-center justify-content-between p-3" onDragOver={handleDragOver} onDrop={handleDrop}>
                      <div className="file-info text-secondary">{file ? file.name : "Drag & Drop a file or Choose File"}</div>
                      <label className="file-upload-btn">
                        <input type="file" onChange={handleFileChange} className="d-none" />
                        <FiUpload size={24} className="text-secondary" />
                      </label>
                    </div>
                    {errors.file && <p style={{ color: "#298CF3" }}>{errors.file}</p>}
                  </Form.Group>
                </Col>
                <Col xs={12} className="pb-3 my-4">
                  <Form.Group className="mb-3">
                    <Form.Label>Your Background in Brief</Form.Label>
                    <Form.Control as="textarea" name="message" className="custom-textarea border border-1 rounded rounded-5" rows={3} onChange={handleChange} value={formData.message} />
                  </Form.Group>
                </Col>
                <Button type="submit" className="w-100 border border-1 rounded rounded-5 blue-btn py-2 mb-5 mt-4">Submit</Button>
              </Col>
            </Row>
          </Form>
          {successMessage && <p style={{ color: "#28a745", fontWeight: "bold" }} className="text-center">{successMessage}</p>}
        </Container>
      </Container>
    </div>
  );
}

export default JobDescContact;