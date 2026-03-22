import express from "express"; 
import healthRouters  from "./infrastructure/api/http/routes/v1/health.routes";
import v1ProductRouters from "./infrastructure/api/http/routes/v1/product.routes";
import { errorMiddleware } from "./infrastructure/api/http/middlewares/error.middleware";
import { NotFoundError } from "./core/errors/NotFoundError";  

const app = express();

app.use(express.json());
app.use("/api", v1ProductRouters);
app.use("/healthRouters", healthRouters);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "TechStore is running",
  });
});

app.get("/error", (req, res) => {
  throw new NotFoundError("Test error");
});

app.use(errorMiddleware);

export default app;