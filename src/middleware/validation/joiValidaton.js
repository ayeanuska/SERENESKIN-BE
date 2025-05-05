import Joi from "joi";
import { responseClient } from "../responseClient";

export const validateData = (req, res, next) => {
  // create schema or rules

  const schema = Joi.object({
    fName: Joi.string().required(),
    lName: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    phone: Joi.number().required(),
    password: Joi.string().required(),
  });

  // pass your data , req.body , to the schema .. this will spit out response
  const value = schema.validate(req.body);
  console.log(value);

  if (value.error) {
    return responseClient({
      req,
      res,
      message: value.error.message,
      statusCode: 400,
    });
  }
  next();

  // IF pass go next() or respond error
};
