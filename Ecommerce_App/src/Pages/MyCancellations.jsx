import React, { useState, useEffect } from 'react';
import './MyCancellations.css';

const MyCancellations = () => {
    const [cancellations, setCancellations] = useState([]);

    // Load cancellations from localStorage when the component mounts or page is refreshed
    useEffect(() => {
        const cancellationsData = JSON.parse(localStorage.getItem('cancellations')) || [];
        setCancellations(cancellationsData);
    }, []); // Empty dependency array ensures this only runs on mount or when page is refreshed

    return (
        <div className="my-cancellations">
            <h2>My Cancellations</h2>
            {cancellations.length > 0 ? (
                <ul>
                    {cancellations.map((item, index) => (
                        <li key={index} className="cancellation-item">
                            <img src={item.image || 'default-image.png'} alt="Product" className="item-image" />
                            <div className="item-info">
                                <span className="item-name">{item.title}</span>
                                <span className="item-price">₹{item.price}</span>
                                <span className="item-quantity">x{item.quantity}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No canceled products found.</p>
            )}
        </div>
    );
};

export default MyCancellations;
