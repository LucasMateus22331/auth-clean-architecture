import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "../../domain/entities/User";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

export class RegisterUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(name: string, email: string, password: string) {
    const userExists = await this.userRepository.findByEmail(email);
    if (userExists) throw new Error("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User(uuid(), name, email, hashedPassword);

    await this.userRepository.save(user);

    return user;
  }
}