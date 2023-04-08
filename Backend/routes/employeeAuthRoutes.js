const router = require("express").Router();
const {
  login,
  refresh,
  logout,
} = require("../controller/employeeAuthController");

router.post("/", login).get("/refresh", refresh).post("/logout", logout);

module.exports = router;
