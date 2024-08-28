const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { logger } = require("./middlewares/logger");
dotenv.config();
// const userRoutes
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger());

app.get("/user", (req, res) => {
  res.json({ message: "sdasdasda" });
  console.log("all user is read successfully");
});
app.post("/user", (req, res) => {
  console.log("New user is created successfully");
});
app.put("/user", (req, res) => {
  console.log("user is updated successfully");
});
app.delete("/user", (req, res) => {
  console.log("user is deleted successfully");
});

app.get("/category", (req, res) => {
  console.log("all user is read successfully");
});
app.post("/category", (req, res) => {
  console.log("New user is created successfully");
});
app.put("/category", (req, res) => {
  console.log("user is updated successfully");
});
app.delete("/category", (req, res) => {
  console.log("user is deleted successfully");
});

app.listen(PORT, () => {
  console.log(PORT, "SERVER");
});
