import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container">
      <div className="contact-info">
        <h3>📞 Call To Us</h3>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +8801611112222</p>
        <hr />
        <h3>✉️ Write To Us</h3>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Emails: customer@exclusive.com, support@exclusive.com</p>
      </div>
      <div className="contact-form">
        <input type="text" placeholder="Your Name *" />
        <input type="email" placeholder="Your Email *" />
        <input type="tel" placeholder="Your Phone *" />
        <textarea placeholder="Your Message" rows="5"></textarea>
        <button type="submit">Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
