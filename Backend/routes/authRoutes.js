const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const {
  register,
  login,
  updateInfo,
} = require("../controller/adminController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "../Backend/uploads/adminUpload"),
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
router.post("/register", register); //SignUP Routes;
router.post("/login", login); // Login ROutes
router.put("/update", upload.single("image"), updateInfo);
module.exports = router;
