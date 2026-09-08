import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h2>SN TRAVELS</h2>
          <p>
            Your trusted car rental partner for local,
            airport and outstation journeys.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>About</p>
          <p>Cars</p>
          <p>Services</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p><FaPhone /> +91 8309975518</p>
          <p><FaWhatsapp /> WhatsApp</p>
          <p><FaEnvelope /> naveen.pndm125@gmail.com sn</p>
          <p><FaMapMarkerAlt /> Rajamundry,Andhra pradesh</p>
        </div>

      </div>

      <div className="copyright">
        © 2026 SN Travels. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;