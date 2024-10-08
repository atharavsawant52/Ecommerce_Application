import React, { useEffect, useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import '../Pages/CardComponent.css';

function CardComponent() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const handleQuantityChange = (id, quantity) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity: parseInt(quantity) } : item
        );
        setCartItems(updatedItems);
    };

    const handleApplyCoupon = () => {
        if (couponCode === 'happy10') {
            setDiscount(10);
        } else {
            setDiscount(0);
            alert('Invalid Coupon Code');
        }
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        return subtotal - (subtotal * discount) / 100;
    };

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td className="product-info">
                                <img src={item.image} alt={item.name} />
                                <span>{item.name}</span>
                            </td>
                            <td>₹{item.price}</td>
                            <td>
                                <select
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(qty => (
                                        <option key={qty} value={qty}>{qty}</option>
                                    ))}
                                </select>
                            </td>
                            <td>₹{item.price * item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="cart-actions">
                <button className="btn return-shop">Return To Shop</button>
                <button className="btn update-cart">Update Cart</button>
            </div>

            <div className="coupon-section">
                <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Coupon Code"
                />
                <button className="btn apply-coupon" onClick={handleApplyCoupon}>
                    Apply Coupon
                </button>
            </div>

            <div className="cart-total">
                <div className="total-details">
                    <p>Subtotal: <span>₹{calculateSubtotal()}</span></p>
                    <p>Discount: <span>{discount}%</span></p>
                    <p>Shipping: <span>Free</span></p>
                    <p>Total: <span>₹{calculateTotal()}</span></p>
                </div>
                <button className="btn checkout">Proceed to Checkout</button>
            </div>
        </div>
    );
}

export default CardComponent;
