import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Please enter a password")
    .min(8, "Please enter a password with at least 8 characters"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
