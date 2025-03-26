import express from "express";
const app = express();
const PORT = process.env.PORT || 9002;

import cors from "cors";
import morgan from "morgan";

app.use(cors());
app.use(morgan("dev"));
app.use(express.json); //parse json file from fe to req.body

// check server status
app.get("/", (req, res) => {
  res.json({
    message: "Server is live",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log("server is running at http://localhost:" + PORT);
});
