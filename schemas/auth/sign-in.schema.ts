// import zod
import { z } from "zod";

/**
 * Zod schema untuk validasi sign-in
 */
export const signInSchema = z.object({
    email: z.string().trim().email("Email tidak valid"),
    password: z.string().min(6, "Password minimal 6 karakter"),
});

export type SignInInput = z.infer<typeof signInSchema>;
