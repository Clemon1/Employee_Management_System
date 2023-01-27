// const router = require("express").Router();

// const seat = require("../model/seatModel");

// router.get("/", async (req, res) => {
//   const seats = await seat.find();
//   res.json(seats);
// });
// router.post("/", async (req, res) => {
//   const train = new seat(req.body);

//   train.seat = Array.from({ length: train.seat }, (_, i) => i + 1);

//   const savedNo = await train.save();

//   res.json(savedNo);
//   //   if (error) {
//   //     console.log(error.message);
//   //   }
// });

// module.exports = router;
