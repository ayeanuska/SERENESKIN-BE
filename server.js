import express, { response } from "express";
const app = express();
const PORT = process.env.PORT || 9002;

import cors from "cors";
import morgan from "morgan";
import { dbConnect } from "./src/config/dbConfig.js";

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); //parse json file from fe to req.body

//apiEP

import authRoute from "./src/routes/authRoute.js";

import { responseClient } from "./src/middleware/responseClient.js";
import { errorHandler } from "./src/middleware/errorHandler.js";

// check server status
app.get("/", (req, res) => {
  console.log("server is running");

  const message = "server is running";
  responseClient({ req, res, message });
});

//error handler
app.use(errorHandler);

app.use("/api/v1/auth", authRoute);

//db conect
dbConnect()
  .then(() => {
    app.listen(PORT, (error) => {
      error
        ? console.log(error)
        : console.log("server is running at http://localhost:" + PORT);
    });
  })
  .catch((error) => console.log(error));
