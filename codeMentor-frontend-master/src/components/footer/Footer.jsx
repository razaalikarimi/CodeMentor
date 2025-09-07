import React from 'react';
import './footer.css';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Your E-Learning Platform</h3>
          <p>
            &copy; 2025 Your E-Learning Platform. All rights reserved. <br />
            Made with ❤️ by <a href="#">Ali Raza Karimi</a>
          </p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/"><FaFacebook /></a>
            <a href="https://x.com/?lang=en-in"><AiFillTwitterCircle /></a>
            <a href="https://www.instagram.com/"><AiFillInstagram /></a>
            <a href="https://www.linkedin.com/in/ali-raza-karimi/"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-navigation">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
