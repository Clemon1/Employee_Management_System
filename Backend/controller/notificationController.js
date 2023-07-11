const { notification } = require("../model/notificationModel");

//Get notification
const getNotification = async (req, res) => {
  try {
    const getNoti = await notification.find();
    res.status(200).json(getNoti);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//Create a notification
const createNotification = async (req, res) => {
  try {
    const Noti = new notification(req.body);
    const newNoti = await Noti.save();
    res.status(200).json(newNoti);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// view single notification
const singleNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const singleNoti = await notification.findById(id);
    res.status(200).json(singleNoti);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Update notification to be read
const updateNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const updateNoti = await notification.findByIdAndUpdate(
      id,
      {
        $set: { isRead: true },
      },
      { new: true },
    );
    res.status(200).json(updateNoti);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { getNotification, createNotification, updateNotification };
