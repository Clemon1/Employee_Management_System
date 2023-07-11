const mongoose = require("mongoose");
const notificationSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

// notificationSchema.static.createNotification = () =>
// {

// }
const notification = mongoose.model("notification", notificationSchema);

module.exports = { notification };
