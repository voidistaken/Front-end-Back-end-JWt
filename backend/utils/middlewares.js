import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;
export function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY);
  }
  //---------auth middleware----------
export function authMiddleware(req, res, next) {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).json("Access denied");
      }
    
      try {
        const payload = verifyToken(token);
        req.userId = payload.userId;
        req.role = payload.role;
        next();
      } catch (error) {
        res.status(403).json("Invalid token");
      }
    }