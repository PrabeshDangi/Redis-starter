import { limiter } from "../config/rate-limit";
import { Request, Response } from "express";

export const rateLimiter = async (req: Request, res: Response, next) => {
  try {
    await limiter(req);
    next();
  } catch (err) {
    res.status(429).send("Rate limit exceeded");
  }
};
