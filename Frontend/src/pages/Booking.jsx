import BookingForm from "../components/BookingForm";

function Booking() {
  return (
    <section className="page-section">

      <h1>Book Your Car</h1>

      <p>
        Fill the form below and submit your booking request.
      </p>

      <BookingForm />

    </section>
  );
}

export default Booking;