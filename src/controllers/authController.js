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




    //create an unique user activation link and send to their email

    res.json({
      status: "success",
      message: "TO DO",
    });
  } catch (error) {
    next(error);
  }
};
