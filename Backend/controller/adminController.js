const { Users } = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Create an Account for Employees or Admin
const register = async (req, res) => {
  try {
    const { email, password, fullname } = req.body;
    // Validating Fullname
    if (!fullname) return res.status(400).json("Fullname is required");

    // Validating Email
    if (!email) return res.status(400).json("Email is required");

    // Validating Password
    if (!password) return res.status(400).json("Password is required");

    // Checking for Existing Email in the database
    const existingEmail = await Users.findOne({ email });
    if (existingEmail) {
      // Checking for existing Email on database to avoid registering with same email
      return res.status(400).json("This user has an account");
    }

    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(req.body.password, salt); // Hashing the password
    const user = new Users({
      fullname: req.body.fullname,
      email: req.body.email,
      password: hashPassword,
    });

    const newUser = await user.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Login Controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      // Checking for existing Emails
      return res.status(400).json("Email doesnt have an account");
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      // Checking if the password is correct
      return res.status(400).json("Invalid email or password");
    }
    const accessToken = await jwt.sign({ user }, "MySecretEMP", {
      // JWT Token
      expiresIn: "1hr",
    });
    const refressToken = await jwt.sign({ user }, "refreshTonkenEMP", {
      expiresIn: "1d",
    });

    res.cookie("jwt", refressToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ user, accessToken });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Update other account info

const updateInfo = async (req, res) => {
  try {
    const id = req.params.id;
    const updateInfo = await Users.findByIdAndUpdate(id, {
      $set: req.body,
    });
    res.status(200).json(updateInfo);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { register, login, updateInfo };
