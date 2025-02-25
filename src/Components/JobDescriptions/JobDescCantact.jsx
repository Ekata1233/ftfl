import contactbg from "../../assets/image 40.png";
import { FiUpload } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import "../../Components/CarreerOpportunities/CarreersOpportunities.css";
import "../JobDescriptions/jobdescr.css";
import { useParams } from "react-router-dom";

function JobDescContact() {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    workplaceType: "",
    employmentType: "",
    jobLocation: "",
    backgroundDescription: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const { id } = useParams();
  const [job, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch jobs on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://ftfl-backend.vercel.app/api/jobs/all-jobs");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const jobsArray = Array.isArray(data) ? data : data.jobs; // Handle nested response
        if (!Array.isArray(jobsArray)) {
          throw new Error("API response does not contain a job list");
        }
        setJobs(jobsArray);
      } catch (error) {
        console.error("Error fetching jobs:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Find the selected job based on the ID
  useEffect(() => {
    if (job.length > 0 && id) {
      console.log("Fetched Jobs:", job);
      const foundJob = job.find((j) => j._id === id);
      console.log("Selected Job:", foundJob);
      setSelectedJob(foundJob);
    }
  }, [job, id]);

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
  };

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};

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
    if (!formData.employmentType) newErrors.employmentType = "Employment type is required";
    if (!formData.jobLocation.trim()) newErrors.jobLocation = "Job location is required";
    if (!file) newErrors.file = "Resume file is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    const formPayload = new FormData();
    formPayload.append("fullName", formData.fullName);
    formPayload.append("mobileNumber", formData.mobileNumber);
    formPayload.append("email", formData.email);
    formPayload.append("workplaceType", formData.workplaceType);
    formPayload.append("employmentType", formData.employmentType);
    formPayload.append("jobLocation", formData.jobLocation);
    formPayload.append("backgroundDescription", formData.backgroundDescription);
    formPayload.append("resume", file);

    try {
      const response = await fetch(`https://ftfl-backend.vercel.app/api/jobs/apply/${id}`, {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to submit application");
      }

      setSuccessMessage("Application submitted successfully!");
      setFormData({
        fullName: "",
        mobileNumber: "",
        email: "",
        workplaceType: "",
        employmentType: "",
        jobLocation: "",
        backgroundDescription: "",
      });
      setFile(null);
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMessage(error.message || "Failed to submit form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!selectedJob) {
    return <h2>No Such Job Exist</h2>;
  }

  return (
    <div className="carrer-div">
      <div className="text-start mt-5 pt-5 mb-5  pt-5">
        <p><span style={{ fontWeight: "400", fontSize: "45px" }}>Apply</span><span className="blue" style={{ fontWeight: "600", fontSize: "45px" }}> Here</span></p>
        <p className="text text-secondary">Want to work with us? You&rsquo;re in good company!</p>
      </div>
      <Container fluid className="contact-form-container rounded rounded-5 mt-5">
        <img src={contactbg} alt="Background" className="contact-form-bg con-bg" />
        <Container className="contact-form-content">
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                minHeight: "400px",
              }}
            >
              <Spinner animation="border" role="status" style={{ width: "3rem", height: "3rem" }}>
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
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
                        <Form.Control
                          type="text"
                          name="fullName"
                          placeholder="Full Name"
                          className="custom-input border border-1 rounded rounded-5"
                          onChange={handleChange}
                          value={formData.fullName}
                        />
                        {errors.fullName && <p style={{ color: "#298CF3" }}>{errors.fullName}</p>}
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6} className="pb-3 my-3">
                      <Form.Group>
                        <Form.Label>Email <span className="blue"> *</span></Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          className="custom-input border border-1 rounded rounded-5"
                          onChange={handleChange}
                          value={formData.email}
                        />
                        {errors.email && <p style={{ color: "#298CF3" }}>{errors.email}</p>}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={6} lg={4} className="pb-3 my-3">
                      <Form.Group>
                        <Form.Label>Phone No.<span className="blue"> *</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="mobileNumber"
                          placeholder="Phone Number"
                          className="custom-input border border-1 rounded rounded-5"
                          onChange={handleChange}
                          value={formData.mobileNumber}
                        />
                        {errors.mobileNumber && <p style={{ color: "#298CF3" }}>{errors.mobileNumber}</p>}
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="pb-3 my-3">
                      <Form.Group>
                        <Form.Label>Workplace Type<span className="blue"> *</span></Form.Label>
                        <Form.Select
                          name="workplaceType"
                          className="form-control custom-input border border-1 rounded rounded-5"
                          onChange={handleChange}
                          value={formData.workplaceType}
                        >
                          <option value="">Select Workplace Type</option>
                          <option value="On-Site">On-Site</option>
                        </Form.Select>
                        {errors.workplaceType && <p style={{ color: "#298CF3" }}>{errors.workplaceType}</p>}
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="pb-3 my-3">
                      <Form.Group>
                        <Form.Label>Field of Work<span className="blue"> *</span></Form.Label>
                        <Form.Select
                          name="fieldOfWork"
                          className="form-control custom-input border border-1 rounded rounded-5"
                          onChange={handleChange}
                          value={selectedJob.jobTitle}
                          disabled
                        >
                          <option value={selectedJob.jobTitle}>{selectedJob.jobTitle}</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={6} className="pb-3 my-3">
                      <Form.Group>
                        <Form.Label>Employment Type<span className="blue"> *</span></Form.Label>
                        <Form.Select
                          name="employmentType"
                          className="form-control custom-input border border-1 rounded rounded-5"
                          onChange={handleChange}
                          value={formData.employmentType}
                        >
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
                        <Form.Select
                          name="jobLocation"
                          className="form-control custom-input border border-1 rounded rounded-5"
                          onChange={handleChange}
                          value={formData.jobLocation}
                        >
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
                      <div
                        className="file-upload-container border border-1 rounded rounded-5 d-flex align-items-center justify-content-between p-3"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                      >
                        <div className="file-info text-secondary">{file ? file.name : "Drag & Drop a file or Choose File"}</div>
                        <label className="file-upload-btn">
                          <input type="file" onChange={handleFileChange} className="d-none" />
                          <FiUpload size={24} className="text-secondary" aria-label="Upload file" />
                        </label>
                      </div>
                      {errors.file && <p style={{ color: "#298CF3" }}>{errors.file}</p>}
                    </Form.Group>
                  </Col>
                  <Col xs={12} className="pb-3 my-4">
                    <Form.Group className="mb-3">
                      <Form.Label>Your Background in Brief</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="backgroundDescription"
                        className="custom-textarea border border-1 rounded rounded-5"
                        rows={3}
                        onChange={handleChange}
                        value={formData.backgroundDescription}
                      />
                    </Form.Group>
                  </Col>
                  <Button type="submit" className="w-100 border border-1 rounded rounded-5 blue-btn py-2 mb-5 mt-4" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                        <span className="ms-2">Submitting...</span>
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
          {successMessage && (
            <p style={{ color: successMessage.includes("successfully") ? "#28a745" : "#dc3545", fontWeight: "bold" }} className="text-center">
              {successMessage}
            </p>
          )}
        </Container>
      </Container>
    </div>
  );
}

export default JobDescContact;