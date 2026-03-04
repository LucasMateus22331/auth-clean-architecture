import { Request, Response } from "express";

export class AuthController {
  constructor(
    private registerUseCase: any,
    private loginUseCase: any
  ) {}

  async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const user = await this.registerUseCase.execute(name, email, password);
      return res.status(201).json(user);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await this.loginUseCase.execute(email, password);
      return res.json(token);
    } catch (err: any) {
      return res.status(401).json({ error: err.message });
    }
  }
}