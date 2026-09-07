const express = require("express");
const Car = require("../models/Car");

const router = express.Router();

// GET all cars
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();

    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// GET single car
router.get("/:id", async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({
        message: "Car not found"
      });
    }

    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// POST new car
router.post("/", async (req, res) => {
  try {
    const car = new Car(req.body);

    const savedCar = await car.save();

    res.status(201).json({
      message: "Car added successfully",
      car: savedCar
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

// DELETE car
router.delete("/:id", async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);

    if (!car) {
      return res.status(404).json({
        message: "Car not found"
      });
    }

    res.status(200).json({
      message: "Car deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;