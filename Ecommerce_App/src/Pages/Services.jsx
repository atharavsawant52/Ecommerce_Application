import React from "react";
import { FaShippingFast, FaAward, FaHeadset } from "react-icons/fa";
import "../Pages/Services.css";

function Services() {
  const services = [
    { id: 1, title: "Fast Delivery", icon: <FaShippingFast />, description: "Quick and reliable delivery to your doorstep." },
    { id: 2, title: "Best Quality", icon: <FaAward />, description: "Premium quality products with a satisfaction guarantee." },
    { id: 3, title: "Customer Support", icon: <FaHeadset />, description: "24/7 dedicated customer support just for you." },
  ];

  return (
    <div className="services">
      {services.map((service) => (
        <div className="service-item" key={service.id}>
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
