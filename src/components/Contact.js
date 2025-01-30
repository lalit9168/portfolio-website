import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = ({ onContactSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onContactSubmit(formData);
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' }); // Reset form after submission
  };

  return (
    <>
      <section id="contact" className="bg-dark text-white py-5">
        <div className="container">
          <div className="d-flex justify-content-end mb-4">
            <a
              href="https://www.linkedin.com/in/lalit-chaudhari-988627296/"
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-outline-light mx-2"
            >
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
            <a href="tel:+919168018581" className="btn btn-outline-light mx-2">
              <i className="fa-solid fa-phone"></i> Call Me
            </a>
          </div>

          <div className="text-center mb-5">
            <h2 className="display-4">Contact Me</h2>
            <p>Feel free to reach out if you have any questions or inquiries!</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
                <div className="form-group mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-warning text-white w-50">
                    Send Message
                  </button>
                </div>
              </form>

              <div className="text-center mt-4">
                <h4>Or contact me directly:</h4>
                <a
                  href="https://wa.me/919168018581"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-outline-success mx-2"
                >
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ParentComponent = () => {
  const handleContactSubmit = (formData) => {
    emailjs.send(
      'service_ejs1pje',  // ✅ Updated Service ID
      'template_0wv8etq',  // ✅ Updated Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'qEYzEnhqcfNWe36pD'  // ✅ Updated Public Key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Your message has been sent!');
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Oops! Something went wrong.');
    });
  };

  return <Contact onContactSubmit={handleContactSubmit} />;
};

export default ParentComponent;
