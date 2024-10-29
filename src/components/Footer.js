import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-white">About Us</a></li>
              <li><a href="#careers" className="text-white">Careers</a></li>
              <li><a href="#contact" className="text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-4">
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li><a href="#support" className="text-white">Support</a></li>
              <li><a href="#faq" className="text-white">FAQ</a></li>
              <li><a href="#terms" className="text-white">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#facebook" className="text-white">Facebook</a></li>
              <li><a href="#twitter" className="text-white">Twitter</a></li>
              <li><a href="#instagram" className="text-white">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4">
          <p>&copy; 2024 MedRed, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
