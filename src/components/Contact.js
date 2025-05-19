import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6fd738e",
        "template_w7hggxj",
        form.current,
        "iKeA4Ae_2KuETZy1z"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();  // Reset the form after successful submission
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        <h2>Contact Me</h2>

        {/* Social Links */}
        <div className="contact-links">
          <a href="mailto:jtiwari_be22@thapar.edu" target="_blank" rel="noopener noreferrer">EMAIL</a>
          <span className="separator">|</span>
          <a href="https://www.linkedin.com/in/jahnavii25/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <span className="separator">|</span>
          <a href="https://github.com/jahnavii-25" target="_blank" rel="noopener noreferrer">GITHUB</a>
        </div>

        {/* Contact Form */}
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
