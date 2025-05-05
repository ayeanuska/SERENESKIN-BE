//

import mongoose from "mongoose";

export const dbConnect = async () => {
  const res = mongoose.connect(`${process.env.MONGO_URL}`);

  if (res) {
    console.log("MongoDB is connected");
  } else {
    console.log("MongoDB connection failed");
  }
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
