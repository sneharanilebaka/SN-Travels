import { useState } from "react";

function BookingForm() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    car: "",
    pickupDate: "",
    returnDate: "",
    pickupLocation: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Booking request submitted successfully!");

    console.log("Booking Details:", form);

    setForm({
      name: "",
      phone: "",
      email: "",
      car: "",
      pickupDate: "",
      returnDate: "",
      pickupLocation: ""
    });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
      />

      <select
        name="car"
        value={form.car}
        onChange={handleChange}
        required
      >
        <option value="">Select Car</option>
        <option value="Swift Dzire">Swift Dzire</option>
        <option value="Hyundai i20">Hyundai i20</option>
        <option value="Innova Crysta">Innova Crysta</option>
        <option value="Toyota Fortuner">Toyota Fortuner</option>
      </select>

      <input
        type="date"
        name="pickupDate"
        value={form.pickupDate}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="returnDate"
        value={form.returnDate}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="pickupLocation"
        placeholder="Pickup Location"
        value={form.pickupLocation}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Confirm Booking
      </button>

    </form>
  );
}

export default BookingForm;