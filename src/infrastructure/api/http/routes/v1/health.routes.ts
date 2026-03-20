import { Router } from "express";
import { HealthController } from "../../../controllers/health.controller";

const router = Router();

const healthControllerInstance = new HealthController();

router.get("/health", (req, res) => healthControllerInstance.check(req, res));

export default router;