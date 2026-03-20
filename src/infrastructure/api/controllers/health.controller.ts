import { request, response } from "express";
import { getHealthUseCase } from "../../../application/use-cases/getHealth.usecase";

export class HealthController {
  public async check(req = request, res = response) {
    const healthData = getHealthUseCase();
    return res.status(200).json(healthData);
  }
}
    