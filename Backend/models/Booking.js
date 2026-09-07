const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    car: {
      type: String,
      required: true
    },
    pickupDate: {
      type: Date,
      required: true
    },
    returnDate: {
      type: Date,
      required: true
    },
    pickupLocation: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Booking", bookingSchema);