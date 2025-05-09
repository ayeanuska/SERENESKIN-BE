import e from "cors";

export const errorHandler = (error, req, res, next) => {
  const StatusCode = error.statusCode || 500;
  console.log();

  res.status(StatusCode).json({
    status: "error",
    message: error.message,
  });
};
