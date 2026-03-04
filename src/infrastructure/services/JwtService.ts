import jwt from "jsonwebtoken";

export class JwtService {
  private secret = "supersecret";

  generateToken(payload: object): string {
    return jwt.sign(payload, this.secret, { expiresIn: "1h" });
  }

  verifyToken(token: string) {
    return jwt.verify(token, this.secret);
  }
}