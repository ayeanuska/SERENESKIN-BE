import express from "express";
const router = express.Router();

//general user signUp
router.post("/register", (req, res, next) => {
  try {
    // to do signup process

    res.json({
      status: "success",
      message: "TO DO",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
