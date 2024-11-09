import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const user = useSelector((state) => state.user); // Get user from Redux store
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [orderPlaced, setOrderPlaced] = useState(false);

    const calculateSubtotal = () => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const discount = 10; 
    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        return subtotal - (subtotal * discount) / 100;
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();

        if (!user) {
            alert('Please log in to place your order!');
            return;
        }

    
        const orderDetails = {
            user: user,
            items: cartItems,
            totalAmount: calculateTotal(),
            date: new Date().toLocaleString(),
        };

        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(orderDetails);
        localStorage.setItem('orders', JSON.stringify(orders));

        setOrderPlaced(true);
        alert('Order placed successfully!');
        navigate('/orders');  
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="checkout-content">
                <div className="billing-details">
                    <h3>Billing Details</h3>
                    <form onSubmit={handlePlaceOrder}>
                        <label>Name</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />

                        <label>Address</label>
                        <input 
                            type="text" 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)} 
                            required 
                        />

                        <label>City</label>
                        <input 
                            type="text" 
                            value={city} 
                            onChange={(e) => setCity(e.target.value)} 
                            required 
                        />

                        <label>ZIP Code</label>
                        <input 
                            type="text" 
                            value={zip} 
                            onChange={(e) => setZip(e.target.value)} 
                            required 
                        />
                        
                        <h3>Payment Details</h3>
                        <label>Card Number</label>
                        <input 
                            type="text" 
                            value={cardNumber} 
                            onChange={(e) => setCardNumber(e.target.value)} 
                            required 
                        />

                        <label>Expiry Date</label>
                        <input 
                            type="text" 
                            placeholder="MM/YY"
                            value={expiry} 
                            onChange={(e) => setExpiry(e.target.value)} 
                            required 
                        />

                        <label>CVV</label>
                        <input 
                            type="text" 
                            value={cvv} 
                            onChange={(e) => setCvv(e.target.value)} 
                            required 
                        />

                        <button type="submit" className="btn place-order">
                            Place Order
                        </button>
                    </form>
                </div>

                <div className="order-summary">
                    <h3>Order Summary</h3>
                    <p>Subtotal: ₹{calculateSubtotal()}</p>
                    <p>Discount: ₹{(calculateSubtotal() * discount) / 100}</p>
                    <p>Shipping: Free</p>
                    <h4>Total: ₹{calculateTotal()}</h4>
                </div>
            </div>
            
            {orderPlaced && <p className="order-confirmation">Thank you! Your order has been placed.</p>}
        </div>
    );
}

export default Checkout;
