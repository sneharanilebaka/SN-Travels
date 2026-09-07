import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope
} from "react-icons/fa";

function Contact() {
  return (
    <section className="page-section">

      <h1>Contact SN Travels</h1>

      <div className="contact-grid">

        <div>
          <FaPhone />
          <h3>Phone</h3>
          <p>+91 8309975518</p>
        </div>

        <div>
          <FaWhatsapp />
          <h3>WhatsApp</h3>
          <p>+91 8309975518</p>
        </div>

        <div>
          <FaEnvelope />
          <h3>Email</h3>
          <p>sntravels@gmail.com</p>
        </div>

        <div>
          <FaMapMarkerAlt />
          <h3>Location</h3>
          <p>Hyderabad, Telangana</p>
        </div>

      </div>

    </section>
  );
}

export default Contact;