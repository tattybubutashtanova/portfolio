import React from 'react';
import './Contact.css'; // Style for the form

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <form className="contact-form">
        <h2>Contact Me</h2>
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
