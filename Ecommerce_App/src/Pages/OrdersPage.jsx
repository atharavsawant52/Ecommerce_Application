import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrdersPage.css';

function OrdersPage() {
    const navigate = useNavigate();
    
    // State to hold orders data
    const [orders, setOrders] = useState([]);
    
    // Load orders from localStorage when the component mounts
    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(storedOrders);
    }, []);
    
    const handleCancelProduct = (orderIndex, itemIndex) => {
        const updatedOrders = [...orders];
        const canceledProduct = updatedOrders[orderIndex].items.splice(itemIndex, 1)[0]; // Remove product

        // If the order has no items left, remove the entire order
        if (updatedOrders[orderIndex].items.length === 0) {
            updatedOrders.splice(orderIndex, 1);
        }

        // Update orders in localStorage
        localStorage.setItem('orders', JSON.stringify(updatedOrders));

        // Add canceled product to cancellations
        const cancellations = JSON.parse(localStorage.getItem('cancellations')) || [];
        cancellations.push(canceledProduct);
        localStorage.setItem('cancellations', JSON.stringify(cancellations));

        // Update orders state to reflect changes in the UI
        setOrders(updatedOrders);

        // Show alert and navigate to cancellations page
        alert(`Product "${canceledProduct.title}" has been canceled.`);
        navigate('/cancellations');
    };

    return (
        <div className="orders-page">
            <h2>My Orders</h2>
            {orders.length > 0 ? (
                orders.map((order, orderIndex) => (
                    <div key={orderIndex} className="order-item">
                        <div className="order-header">
                            <h3>Order #{orderIndex + 1}</h3>
                        </div>
                        <p className="order-date">Date: {order.date}</p>
                        <p className="order-total">Total: ₹{order.totalAmount}</p>
                        <div className="order-items">
                            <h4>Items:</h4>
                            <ul>
                                {order.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="order-item-details">
                                        <img src={item.image || 'default-image.png'} alt="Product" className="item-image" />
                                        <div className="item-info">
                                            <span className="item-name">{item.title}</span>
                                            <span className="item-price">₹{item.price}</span>
                                            <span className="item-quantity">x{item.quantity}</span>
                                        </div>
                                        <button 
                                            className="cancel-button" 
                                            onClick={() => handleCancelProduct(orderIndex, itemIndex)}
                                        >
                                            Cancel Product
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-summary">
                            <h4>Shipping Address:</h4>
                            <p>{order.shippingAddress}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
}

export default OrdersPage;
