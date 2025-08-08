import * as Joi from "joi";

export const createUserSchema = Joi.object({
  username: Joi.string().min(3).max(50).required(),
  password: Joi.string().min(6).max(20).required(),
  email: Joi.string().email().optional(),
  role: Joi.string().valid("admin", "editor", "user").optional(), // Add this line
});

export const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
