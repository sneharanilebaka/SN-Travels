import { Link } from "react-router-dom";
import { FaCar, FaPhone } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <FaCar />
        <span>
          SN <b>TRAVELS</b>
        </span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/services">Services</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <a href="tel:+919999999999" className="nav-call">
        <FaPhone /> Call Now
      </a>
    </nav>
  );
}

export default Navbar;