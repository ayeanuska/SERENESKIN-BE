import express from "express";
const app = express();
const PORT = process.env.PORT || 9002;

import cors from "cors";
import morgan from "morgan";
import { dbConnect } from "./src/config/dbConfig.js";

//db conect

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json); //parse json file from fe to req.body

//apiEP

import authRoute from "./src/routes/authRoute.js";
import { errorHandler } from "./src/middleware/errorhandler.js";

app.use("/api/v1/auth", authRoute);

// check server status
app.get("/", (req, res) => {
  res.json({
    message: "Server is live",
  });
});

//error handler
app.use(errorHandler)

dbConnect()
  .then(() => {
    app.listen(PORT, (error) => {
      error
        ? console.log(error)
        : console.log("server is running at http://localhost:" + PORT);
    });
  })
  .catch((error) => console.log(error));
