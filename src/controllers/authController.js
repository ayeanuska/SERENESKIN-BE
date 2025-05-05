import { responseClient } from "../middleware/responseClient.js";
import { CreateNewSession } from "../model/session/SessionModel.js";
import { CreateNewUser } from "../model/user/UserModel.js";
import { userActivationUrlEmail } from "../services/email/emailService.js";
import { hashPassword } from "../utils/bcrypt.js";
import { v4 as uuidv4 } from "uuid";

export const insertNewUser = async (req, res, next) => {
  console.log(req);
  try {
    // signup process
    //recieve user data
    const { password } = req.body; // destructure password from req.body

    // encrypt the password
    req.body.password = hashPassword(password);

    //insert user in db.
    const user = await CreateNewUser(req.body);

    if (user?._id) {
      //create an unique user activation link and send to their email

      //we can use uuid to generate a unique token
      const session = await CreateNewSession({
        token: uuidv4(),
        association: user.email,
      });
      if (session?._id) {
        const url = `${process.env.ROOT_URL}/activate-user?sessionId=${session._id}&t=${session.token}`;
        // const url ="http//local:host:9002?sessionId="+session._id+"&t="+session.token
        // send this url to  email
        console.log(url);
        const emailId = await userActivationUrlEmail({
          email: user.email,
          name: user.fname,
          url,
        });

        if (emailId) {
          const message =
            "we have sent you an activtaion link to your email..plesase check your email to activate your account";
          return responseClient({ req, res, message });
        }
      }
    }

    throw new Error("Unable to create an account. Please try again later.");
  } catch (error) {
    if (error.message.includes(" duplicate key error collection")) {
      error.message =
        "This email is already registered. Please use another email.";
      error.statusCode = 400;
    }
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //get user by email
    console.log(email, password);

    // compare password

    //create jwts
    const jwts = await getJwts(email);

    // response jwts
    return responseClient({
      req,
      res,
      message: "login success",
      payload: jwts,
    });
  } catch (error) {
    next(error);
  }
};
