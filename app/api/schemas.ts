import { z } from "zod"

// Schemas para Validação do Body.

const loginUserBodySchema = z.object({
    email:     z.string(),
    password: z.string()
})

const sendEmailBodySchema = z.object({
    name:  z.string(),
    email: z.string(),
    need:  z.string()
})

export { loginUserBodySchema, sendEmailBodySchema }