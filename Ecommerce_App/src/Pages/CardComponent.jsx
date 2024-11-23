import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveCartToLocalStorage, getCartFromLocalStorage } from '../utils/localStorage';
import { updateCart } from '../actions/cartAction';
import '../Pages/CardComponent.css';
import { Link, useNavigate } from 'react-router-dom';
import { getUserFromLocalStorage } from '../utils/localStorage';

function CardComponent() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const navigate = useNavigate();

    const user = getUserFromLocalStorage();

    useEffect(() => {
        const storedCart = getCartFromLocalStorage();
        if (storedCart.length > 0) {
            dispatch(updateCart(storedCart));
        }
    }, [dispatch]);

    useEffect(() => {
        saveCartToLocalStorage(cartItems);
    }, [cartItems]);

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity >= 1 && newQuantity <= 5) {
            const updatedItems = cartItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            );
            dispatch(updateCart(updatedItems));
        }
    };

    const handleDeleteItem = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        dispatch(updateCart(updatedItems));
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

    const handleReturnToShop = () => {
        navigate('/');
    };

    const handleUpdateCart = () => {
        saveCartToLocalStorage(cartItems);
        alert('Cart updated successfully');
    };

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            {cartItems.length > 0 ? (
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Action</th>
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
                                    <div className="quantity-controls">
                                        <button
                                            className="quantity-btn decrease"
                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.id, Math.min(5, Math.max(1, parseInt(e.target.value))))}
                                            className="quantity-input"
                                            min="1"
                                            max="5"
                                        />
                                        <button
                                            className="quantity-btn increase"
                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                            disabled={item.quantity >= 5}
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td>₹{item.price * item.quantity}</td>
                                <td>
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDeleteItem(item.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Your cart is empty. Please add some products to your cart.</p>
            )}

            <div className="cart-actions">
                <button className="btn return-shop" onClick={handleReturnToShop}>Return To Shop</button>
                <button className="btn update-cart" onClick={handleUpdateCart}>Update Cart</button>
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

                {cartItems.length > 0 ? (
                    user ? (
                        <Link to="/checkout" className="btn checkout">
                            Proceed to Checkout
                        </Link>
                    ) : (
                        <p>Please <Link to="/login">log in</Link> to proceed to checkout.</p>
                    )
                ) : (
                    <p>Please add products to your cart before proceeding.</p>
                )}
            </div>
        </div>
    );
}

export default CardComponent;
