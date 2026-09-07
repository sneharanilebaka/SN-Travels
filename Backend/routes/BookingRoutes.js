const express = require("express");
const Booking = require("../models/Booking");

const router = express.Router();

// CREATE BOOKING
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);

    const savedBooking = await booking.save();

    res.status(201).json({
      message: "Booking successful",
      booking: savedBooking
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

// GET ALL BOOKINGS
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({
      createdAt: -1
    });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// GET SINGLE BOOKING
router.get("/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// DELETE BOOKING
router.delete("/:id", async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    res.status(200).json({
      message: "Booking deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;