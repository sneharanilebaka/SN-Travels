import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <div className="car-card">

      <img
        src={car.image}
        alt={`${car.name} car rental - SN Travels`}
      />

      <div className="car-info">
        <h3>{car.name}</h3>

        <p className="car-type">
          {car.type}
        </p>

        <div className="car-details">
          <span>👥 {car.seats} Seats</span>
          <span>⚙️ {car.transmission}</span>
          <span>❄️ AC</span>
        </div>

        <div className="price">
          ₹{car.price}
          <small> / Day</small>
        </div>

        <Link to="/booking" className="book-btn">
          Book Now
        </Link>
      </div>

    </div>
  );
}

export default CarCard;