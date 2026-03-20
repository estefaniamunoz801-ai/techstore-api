import { request, response } from "express";

export class HealthController {
  public async check(req = request, res = response) {
    return res.status(200).json({
      status: "ok",
      message: "TechStore API is running",
    });
   }
}