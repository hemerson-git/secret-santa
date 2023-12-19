import { RequestHandler } from "express";
import { z } from "zod";
import * as auth from "../services/auth";

export const login: RequestHandler = (req, res) => {
  const loginSchema = z.object({
    password: z.string().min(8),
  });

  const body = loginSchema.safeParse(req.body);

  if (!body.success)
    return res.status(400).json({ message: "Invalid request" });

  if (!auth.validatePassword(body.data.password)) {
    return res.status(403).json({ message: "Invalid password" });
  }

  res.json({ token: auth.createToken() });
};

export const validate: RequestHandler = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  if (!auth.validateToken(token.split(" ")[1]))
    return res.status(401).json({ message: "Unauthorized" });

  console.log(token);

  next();
};
