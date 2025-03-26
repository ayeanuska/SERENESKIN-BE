// started at 16

import mongoose from "mongoose";

export const dbConnect = async () => {
  if (!process.env.MONGO_URL) {
    throw new Error("provide MONGO_URl connection string");
  }
  return mongoose.connect(process.env.MONGO_URL);
};

// export const dbConnect = async () => {
//   try {
//     if (!process.env.MONGO_URL) {
//       throw new Error("provide MONGO_URl connection string");
//     }
//     const con = await mongoose.connect(process.env.MONGO_URL);
//     con && console.log("Mongodb is connected");
//   } catch (error) {
//     console.log(error);
//   }
// };
