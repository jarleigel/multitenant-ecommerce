import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  username: z
    .string()
    .min(3, 'Brukernavn minst 3 karakterer')
    .max(63, 'Brukernavn max 63 karakterer')
    .regex(
      /^[a-z0-9][a-z0-9-]*[a-z0-9]$/,
      'Kun små bokstaver, tall eller hypens i brukernavnet - må starte og slutt med bokstav eller nummer',
    )
    .refine((val) => !val.includes('--'), 'Brukernavn kan ikke inneholde --')
    .transform((val) => val.toLocaleLowerCase()),
})
