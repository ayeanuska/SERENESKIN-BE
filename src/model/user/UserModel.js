import UserSchema from "./UserSchema.js";

// insert new user(query)
export const CreateNewUser = (userObj) => {
  return UserSchema(userObj).save();
};


