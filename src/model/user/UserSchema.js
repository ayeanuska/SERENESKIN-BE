import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fName: {
      types: String,
      required: true,
    },
    lName: {
      types: String,
      required: true,
    },
    role: {
      types: String,
      default: user,
      required: true,
    },

    email: {
      types: String,
      required: true,
      unique: true,
      index: 1,
    },
    phone: {
      types: String, // "if you reuire a number to start w 0 too"
    },
    password: {
      types: String,
      required: true,
    },
    refreshJWT: {
      types: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema); // converts to users
