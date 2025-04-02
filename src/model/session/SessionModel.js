import SessionSchema from "./SessionSchema.js";

// insert new Session(query)
export const CreateNewSession = (SessionObj) => {
  return SessionSchema(SessionObj).save();
};


