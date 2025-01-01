
import { Link } from "react-router-dom";
import './footer.css'; // Add this file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link to="/" className="footer-link">Home</Link>
        <Link to="/browsebook" className="footer-link">Browse Books</Link>
        <Link to="/addbook" className="footer-link">Add Book</Link>
      </nav>
      <p className="footer-text">&copy; 2025 Library System. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
