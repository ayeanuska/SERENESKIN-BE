import { responseClient } from "../middleware/responseClient.js";
import { CreateNewUser } from "../model/user/UserModel.js";
import { hashPassword } from "../utils/bcrypt.js";

export const insertNewUser = async (req, res, next) => {
  try {
      // signup process
    //recieve user data
    
    const {password}= req.body // destructure password from req.body

    // encrypt the password 
    req.body.password = hashPassword(password)
  
//insert user in db.
const user = await CreateNewUser(req.body);

 if (user?._id){
    //create an unique user activation link and send to their email
    
    const message="we have sent you an activtaion link to your email..plesase check your email to activate your account"
    return responseClient({req,res,message})
 }
 
   throw new Error("Unable to create an account. Please try again later.");
  } catch (error) {
    if (error.message.includes(" duplicate key error collection")) {
      error.message =
        "This email is already registered. Please use another email."
  error.statusCode = 400  ;
  }  next(error);
}
}
 