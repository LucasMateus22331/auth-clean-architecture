import express from "express";
import { InMemoryUserRepository } from "../infrastructure/database/InMemoryUserRepository";
import { JwtService } from "../infrastructure/services/JwtService";
import { RegisterUserUseCase } from "../application/use-cases/RegisterUserUseCase";
import { LoginUserUseCase } from "../application/use-cases/LoginUserUseCase";
import { AuthController } from "../presentation/controllers/AuthController";

const app = express();
app.use(express.json());

const userRepository = new InMemoryUserRepository();
const jwtService = new JwtService();

const registerUseCase = new RegisterUserUseCase(userRepository);
const loginUseCase = new LoginUserUseCase(userRepository, jwtService);

const authController = new AuthController(registerUseCase, loginUseCase);

app.post("/register", (req, res) => authController.register(req, res));
app.post("/login", (req, res) => authController.login(req, res));

app.listen(3000, () => console.log("Server running on http://localhost:3000 🚀"));
