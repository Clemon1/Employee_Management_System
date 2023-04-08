require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const employeeAuthRoutes = require("./routes/employeeAuthRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const taskRoutes = require("./routes/taskRoutes");
const leaveRoute = require("./routes/leaveRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const payrollRoutes = require("./routes/payrollRoutes");

// MongoDB database Connection
mongoose.connect("mongodb://0.0.0.0:27017/opeDB");
const db = mongoose.connection;
db.on("error", (err) => console.log("Error connecting to database"));
db.once("open", () => console.log("Connected to DB"));
// Middlewares
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("uploads"));
// Routes
app.use("/auth", authRoutes);
app.use("/employee", employeeRoutes);
app.use("/employee/auth", employeeAuthRoutes);
app.use("/department", departmentRoutes);
app.use("/task", taskRoutes);
app.use("/leave", leaveRoute);
app.use("/attendance", attendanceRoutes);
app.use("/payroll", payrollRoutes);

// Listen to PORT number
app.listen(PORT, () => console.log(`Express app connected to port:${PORT}`));
