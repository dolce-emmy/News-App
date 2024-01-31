import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />

      <label>Email</label>
      <input type="email" name="from_email" />

            
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;
