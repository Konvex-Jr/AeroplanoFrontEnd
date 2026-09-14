import { z } from "zod"

// Schemas para Validação do Body.

const loginUserBodySchema = z.object({
    email:     z.string(),
    password: z.string()
})

export { loginUserBodySchema }