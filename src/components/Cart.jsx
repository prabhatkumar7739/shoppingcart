import React from 'react';

const Cart = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart" onClick={onClose}>
            ×
          </button>
        </div>
        {items.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="item-details">
                    <h4 className="item-name">{item.title}</h4>
                    <p className="item-price">${item.price.toFixed(2)}</p>
                    <div className="item-quantity">
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                    <button
                      className="remove-item"
                      onClick={() => onRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <p className="total-amount">
                Total: ${totalAmount.toFixed(2)}
              </p>
              <button className="checkout-button"> Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;