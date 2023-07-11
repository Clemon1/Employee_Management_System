const router = require("express").Router();
const {
  getNotification,
  createNotification,
  updateNotification,
} = require("../controller/notificationController");

router.get("/api/getnotifications", getNotification);
router.post("/api/createnotifications", createNotification);
router.patch("/api/updatenotifications", updateNotification);

module.exports = router;
