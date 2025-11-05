import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-about">
          <h3>Smart Krishi</h3>
          <p>
            Empowering farmers with AI-driven pest detection, real-time weather updates,
            and a direct marketplace to connect with buyers and sellers.
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📧 smartkrishi@gmail.com</p>
          <p>📞 +977-9800000000</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Smart Krishi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
