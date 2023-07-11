const { notification } = require("../model/notificationModel");

// Custom notification middleware
const sendNotifaction = async ({ message }) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    const noti = new notification({ message });
    await noti.save();
    console.log("notification sent successfully", notification);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = sendNotifaction;
