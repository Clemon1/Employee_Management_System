const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Fullname is required"],
    },

    email: {
      type: String,
      unique: true,
      required: [true, "Your email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },

    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    profile: {
      type: String,
      default:
        "https://www.flaticon.com/free-icon/user_3177440?term=profile&page=1&position=7&related_id=3177440&origin=tag&k=1668022752520",
    },
    phoneNumber: {
      type: Number,
    },
    description: {
      type: String,
    },
    role: {
      type: String,
      enum: ["Admin"],
      default: "Admin",
    },
  },
  {
    timestamps: true,
  },
);

const Users = mongoose.model("Users", userSchema);

module.exports = { Users };
