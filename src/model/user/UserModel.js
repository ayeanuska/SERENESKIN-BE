import UserSchema from "./UserSchema";

// inser new user(query)
export const CreateNewUser = (userObj) => {
  return UserSchema(userObj).save();
};
