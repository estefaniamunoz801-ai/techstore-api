import { Request, Response, NextFunction } from "express";
import { AppError } from "../../../../core/errors/AppError";

export function errorMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  //Error controlado
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  //Error inesperado
  console.error("Unexpected error:", err);

  return res.status(500).json({
    message: "Internal server error",
  });
}