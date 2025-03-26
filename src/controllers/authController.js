export const insertNewUser = (req, res, next) => {
  try {
    // signup process
    //recieve user data
    // encrypt the password

    //create an unique user activation link and send to their email

    res.json({
      status: "success",
      message: "TO DO",
    });
  } catch (error) {
    next(error);
  }
};
