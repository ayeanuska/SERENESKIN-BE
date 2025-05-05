import UserSchema from "./UserSchema.js";

// insert new user(query)
export const CreateNewUser = (userObj) => {
  return UserSchema(userObj).save();
};


// update user 
export const updateUser =(filter, update)=>{
  return UserSchema.findOneAndUpdate(filter, update, {new:true})

  }

  //update user  @email: type string 
  export const updateUserByEmail = (email) => {
    return UserSchema.findOne({email})
  };

