const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Car routes working successfully"
    });
});

module.exports = router;