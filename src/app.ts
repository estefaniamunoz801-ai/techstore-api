import express from "express";
import { errorMiddleware } from "./infrastructure/api/http/middlewares/error.middleware";
import { NotFoundError } from "./core/errors/NotFoundError";  

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "TechStore API is running",
  });
});

app.get("/error", (req, res) => {
  throw new NotFoundError("Test error");
});

app.use(errorMiddleware);

export default app;