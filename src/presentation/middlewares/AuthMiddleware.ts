import { Request, Response, NextFunction } from "express";
import { JwtService } from "../../infrastructure/services/JwtService";

const jwtService = new JwtService();

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token missing" });

  try {
    jwtService.verifyToken(token);
    next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}