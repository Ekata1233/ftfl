import contactbg from "../../assets/image 40.png";
import { FiUpload } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import '../../Components/CarreerOpportunities/CarreersOpportunities.css';
import '../JobContact/JobContact.css';
import SEO from "../SEO";
import { motion } from "framer-motion";
function JobContact() {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "", // Updated from phone to mobileNumber
    workplaceType: "", // Updated from workplace to workplaceType
    fieldOfWork: "",
    employmentType: "",
    jobLocation: "",
    backgroundDescription: "", // Updated from message to backgroundDescription
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]); // State to store job data
  const [selectedJobId, setSelectedJobId] = useState(""); // State to store selected job ID

  // Fetch jobs from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://ftfl-backend.vercel.app/api/jobs/all-jobs/');
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched jobs:", data);

          // Check if the response contains the expected structure
          if (data && Array.isArray(data.jobs)) {
            setJobs(data.jobs); // Set the fetched jobs array
          } else {
            console.error("Expected an array of jobs but got:", data);
            setJobs([]); // Set jobs to an empty array if the structure is not as expected
          }
        } else {
          console.error("Failed to fetch jobs");
          setJobs([]); // Set jobs to an empty array if the response is not OK
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobs([]); // Set jobs to an empty array if there's an error
      }
    };

    fetchJobs();
  }, []);

  // Handle file input change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle drag-and-drop for file upload
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      setFile(event.dataTransfer.files[0]);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Update selectedJobId when fieldOfWork changes
    if (name === "fieldOfWork") {
      const selectedJob = jobs.find((job) => job.jobTitle === value);
      if (selectedJob) {
        setSelectedJobId(selectedJob._id); // Set the selected job ID
      }
    }
  };

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate the form
  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Phone number must be exactly 10 digits";
    }
    if (!formData.workplaceType) newErrors.workplaceType = "Workplace type is required";
    if (!formData.fieldOfWork) newErrors.fieldOfWork = "Field of Work is required";
    if (!formData.employmentType) newErrors.employmentType = "Employment type is required";
    if (!formData.jobLocation.trim()) newErrors.jobLocation = "Job location is required";
    if (!file) newErrors.file = "File upload is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);

      // Create a FormData object to send the form data
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('mobileNumber', formData.mobileNumber); // Updated to mobileNumber
      formDataToSend.append('email', formData.email);
      formDataToSend.append('workplaceType', formData.workplaceType); // Updated to workplaceType
      formDataToSend.append('employmentType', formData.employmentType);
      formDataToSend.append('jobLocation', formData.jobLocation);
      formDataToSend.append('backgroundDescription', formData.backgroundDescription); // Updated to backgroundDescription
      if (file) {
        formDataToSend.append('resume', file); // Append the file directly
      }

      try {
        // Send the request to the backend
        const response = await fetch(`https://ftfl-backend.vercel.app/api/jobs/apply/${selectedJobId}`, {
          method: 'POST',
          body: formDataToSend, // Send FormData directly
        });

        console.log("Selected Job ID:", selectedJobId);

        // Handle the response
        if (!response.ok) {
          const errorText = await response.text(); // Log the raw response text
          console.error("Server Error Response:", errorText);
          setSuccessMessage(`Error: ${errorText}`);
        } else {
          const responseData = await response.json();
          console.log("Server Response:", responseData);
          setSuccessMessage("Form submitted successfully!");

          // Clear form data after successful submission
          setFormData({
            fullName: "",
            email: "",
            mobileNumber: "",
            workplaceType: "",
            fieldOfWork: "",
            employmentType: "",
            jobLocation: "",
            backgroundDescription: "",
          });
          setFile(null);
          setErrors({});
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        setSuccessMessage("An error occurred while submitting the form.");
      } finally {
        setIsLoading(false);
      }
    }
  };
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="carrer-div">
      <SEO title="FTFL Technology" description="FTFL Technology specializes in software development, web applications, and IT consulting services." />
      <div className="text-center mt-5 pt-5 mb-5 pb-5 pt-5">
      <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
        <p>
          <span style={{ fontWeight: "400", fontSize: "45px" }}>Take the </span>
          <span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Next Step in Your Career</span>
        </p>
        </motion.div>
      </div>
      <div className="contact-form-container rounded rounded-5 mt-5">
      <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
        <img src={contactbg} alt="Background" className="contact-form-bg con-bg" />
        </motion.div>
        <Container className="contact-form-content">
        <motion.div initial="hidden" whileInView="visible" variants={scrollVariants} transition={{ duration: 1 }} viewport={{ once: false }}>
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
                      <Form.Control type="text" name="mobileNumber" placeholder="Phone Number" className="custom-input border border-1 rounded rounded-5" onChange={handleChange} value={formData.mobileNumber} />
                      {errors.mobileNumber && <p style={{ color: "#298CF3" }}>{errors.mobileNumber}</p>}
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} lg={4} xl={4} xxl={4} className="pb-3 my-3">
                    <Form.Group>
                      <Form.Label>Workplace Type<span className="blue"> *</span></Form.Label>
                      <Form.Select name="workplaceType" className="form-control custom-input border border-1 rounded rounded-5" onChange={handleChange} value={formData.workplaceType}>
                        <option value="">Select Workplace Type</option>
                        <option value="On-Site">On-Site</option>
                      </Form.Select>
                      {errors.workplaceType && <p style={{ color: "#298CF3" }}>{errors.workplaceType}</p>}
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} lg={4} xl={4} xxl={4} className="pb-3 my-3">
                    <Form.Group>
                      <Form.Label>Field of Work<span className="blue"> *</span></Form.Label>
                      <Form.Select name="fieldOfWork" className="form-control custom-input border border-1 rounded rounded-5" onChange={handleChange} value={formData.fieldOfWork}>
                        <option value="">Select Field of Work</option>
                        {Array.isArray(jobs) && jobs.map((job) => (
                          <option key={job._id} value={job.jobTitle}>
                            {job.jobTitle}
                          </option>
                        ))}
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
                    <Form.Label>Upload Resume<span className="blue"> *</span></Form.Label>
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
                    <Form.Control as="textarea" name="backgroundDescription" className="custom-textarea border border-1 rounded rounded-5" rows={3} onChange={handleChange} value={formData.backgroundDescription} />
                  </Form.Group>
                </Col>
                <Button type="submit" className="w-100 border border-1 rounded rounded-5 blue-btn py-2 mb-5 mt-4" disabled={isLoading}>
                  {isLoading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="me-2"
                    />
                  ) : null}
                  {isLoading ? "Submitting..." : "Submit"}
                </Button>
              </Col>
            </Row>
          </Form>
          </motion.div>
          {successMessage && <p style={{ color: "#28a745", fontWeight: "bold" }} className="text-center">{successMessage}</p>}
        </Container>
      </div>
    </div>
  );
}

export default JobContact;