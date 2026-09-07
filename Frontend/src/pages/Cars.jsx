import CarCard from "../components/CarCard";

const cars = [
  {
    id: 1,
    name: "Maruti Swift Dzire",
    type: "Sedan",
    seats: 5,
    transmission: "Manual",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442"
  },
  {
    id: 2,
    name: "Hyundai i20",
    type: "Hatchback",
    seats: 5,
    transmission: "Manual",
    price: 2000,
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027"
  },
  {
    id: 3,
    name: "Toyota Innova Crysta",
    type: "SUV",
    seats: 7,
    transmission: "Automatic",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c"
  },
  {
    id: 4,
    name: "Toyota Fortuner",
    type: "Premium SUV",
    seats: 7,
    transmission: "Automatic",
    price: 5000,
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d"
  }
];

function Cars() {
  return (
    <section className="page-section">

      <h1>Our Cars</h1>

      <p>
        Choose the perfect car for your journey.
      </p>

      <div className="cars-grid">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

    </section>
  );
}

export default Cars;