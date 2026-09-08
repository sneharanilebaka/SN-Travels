const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const carRoutes = require("./routes/CarRoutes");
const bookingRoutes = require("./routes/BookingRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error.message);
  });

app.use("/api/cars", carRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("SN Travels Backend API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});