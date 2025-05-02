import React from 'react';
import { FaShoppingCart, FaUser, FaSignOutAlt } from 'react-icons/fa';
import './Header.css';

const Header = ({ cartItemCount, onCartClick, onLogout }) => {
  return (
    <header className="app-header">
      <div className="header-container">

        <div className="brand">
          <h1>ShopEase</h1>
        </div>
        <nav className="main-nav">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">Categories</a>
          <a href="#" className="nav-link">About</a>
        </nav>

        
        <div className="user-actions">
          <button className="cart-button" onClick={onCartClick}>
            <FaShoppingCart className="icon" />
            {cartItemCount > 0 && (
              <span className="cart-badge">{cartItemCount}</span>
            )}
          </button>
          
          <div className="user-dropdown">
            <button className="user-button">
              <FaUser className="icon" />
            </button>
            <div className="dropdown-content">
              <a href="#">Profile</a>
              <a href="#">Orders</a>
              <button onClick={onLogout} className="logout-button">
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;