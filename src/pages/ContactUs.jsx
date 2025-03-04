import { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <p>
        Have any questions? Fill out the form below and we'll get back to you
        soon.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 contact-form">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
      <br />
      <hr />
      <br />
      <section>
        <div>
          <img
            src="https://img.icons8.com/?size=100&id=12580&format=png&color=000000"
            alt=""
            width={20}
          />
          Email- support@onebyt.cloud
        </div>
        <div>
          <img
            src="https://img.icons8.com/?size=100&id=9659&format=png&color=000000"
            alt=""
            width={20}
          />
          Phone- +91 7367036311
        </div>
        <div>
          <img
            src="https://img.icons8.com/?size=100&id=53383&format=png&color=000000  "
            alt=""
            width={20}
          />
          Address- BH3 Panchsakha Nagar, Bhubhaneswar, Odisha, India, 751020
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
