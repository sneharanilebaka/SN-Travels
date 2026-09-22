import { Link } from "react-router-dom";
import {
  FaCar,
  FaRoad,
  FaPlane,
  FaShieldAlt,
  FaStar
} from "react-icons/fa";

function Home() {
  return (
    <div>

      <section className="hero">
        <div className="hero-content">

          <p>WELCOME TO</p>

          <h1>
            SN <span>TRAVELS</span> <br></br>
            Lakshmi Travels
          </h1>

          <h2>
            Premium Car Rental in Rajahmundry
          </h2>

          <p>
             SN Travels provides affordable, comfortable and reliable car
             rental services in Rajahmundry for local, airport and outstation travel.
          </p>

          <div className="hero-buttons">
            <Link to="/cars" className="primary-btn">
              Explore Cars
            </Link>

            <Link to="/booking" className="secondary-btn">
              Book Your Car
            </Link>
          </div>

        </div>
      </section>

      <section className="section">
        <h2 className="section-title">
          Our Services
        </h2>

        <div className="service-grid">

          <div className="service-card">
            <FaCar />
            <h3>Car Rental</h3>
            <p>Well-maintained cars at affordable prices.</p>
          </div>

          <div className="service-card">
            <FaRoad />
            <h3>Outstation Trips</h3>
            <p>Comfortable journeys to your favourite destinations.</p>
          </div>

          <div className="service-card">
            <FaPlane />
            <h3>Airport Transfer</h3>
            <p>Easy and reliable airport pickup and drop.</p>
          </div>

          <div className="service-card">
            <FaShieldAlt />
            <h3>Safe & Reliable</h3>
            <p>Safety and customer satisfaction are our priority.</p>
          </div>

        </div>
      </section>

      <section className="why-section">

        <h2>Why Choose SN Travels?</h2>

        <div className="stats">

          <div>
            <h3>100+</h3>
            <p>Happy Customers</p>
          </div>

          <div>
            <h3>25+</h3>
            <p>Cars Available</p>
          </div>

          <div>
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>

          <div>
            <h3>5 ★</h3>
            <p>Service Rating</p>
          </div>

        </div>
      </section>

      <section className="reviews">

        <h2 className="section-title">
          Customer Reviews
        </h2>

        <div className="review-grid">

          <div className="review-card">
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p>
              "Excellent service and very comfortable car."
            </p>
            <h4>Rahul</h4>
          </div>

          <div className="review-card">
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p>
              "Very good experience with SN Travels."
            </p>
            <h4>Priya</h4>
          </div>

          <div className="review-card">
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p>
              "Affordable price and friendly service."
            </p>
            <h4>Arun</h4>
          </div>

        </div>
      </section>

      <section className="cta">
        <h2>Ready For Your Journey?</h2>
        <p>Book your car with SN Travels today.</p>

        <Link to="/booking">
          Book Now
        </Link>
      </section>

    </div>
  );
}

export default Home;