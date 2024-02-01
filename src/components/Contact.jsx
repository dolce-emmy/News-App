import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import contactImage from "/contact/contact.jpg";

const Contact = () => {
  const form = useRef();
  const Service_ID = import.meta.env.VITE_MY_SERVICE_ID;
  const Template_ID = import.meta.env.VITE_MY_TEMPLATE_ID;
  const Public_Key = import.meta.env.VITE_MY_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${Service_ID}`,
        `${Template_ID}`,
        form.current,
        `${Public_Key}`
      )
      .then((response) => {
        if (response.status === 200) {
          alert("Your message has been sent successfully. Thank you!");
          console.log(response.text);
        } else {
          alert("Your message has not been sent. Please try again.");
          console.log(response.text);
        }
      })
      .catch((error) => {
        alert("Error sending the email. Please try again later.");
        console.error("Email send error:", error);
      });

    e.target.reset();
  };

  return (
    <>
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h1>Get In Touch</h1>
          <p>
            Have a question, suggestion, or just want to say hello? Drop us an
            email, and our team of developers will get back to you as soon as possible!
            For urgent matters or direct communication, feel free to reach out to our development team via LinkedIn. We're here to ensure your experience on our news website is seamless and enjoyable.
          </p>
          

          <label className="username">Name</label>
          <input
            className="username-input"
            type="text"
            name="from_name"
            required
            placeholder="Please enter your name here..."
          />

          <label className="email">Email</label>
          <input
            className="email-input"
            type="email"
            name="from_email"
            placeholder="Please enter your email here..."
            required
          />

          <label className="message">Message</label>
          <textarea
            className="message-input"
            name="message"
            placeholder="Please enter your message here..."
          />

          <input className="submit-button" type="submit" value="Send" />
        </form>

        <div className="image-container">
          {/* Add your image component or img tag here */}

          <img
            style={{ width: "100%", borderRadius: " 3px" }}
            src={contactImage}
            alt="Description"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
