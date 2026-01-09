import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_FORMSPREE_FORM_ID: z.string().min(1, "Form ID is required."),
});

const rawEnv = {
  NEXT_PUBLIC_FORMSPREE_FORM_ID: process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID,
};

const parsedEnv = envSchema.safeParse(rawEnv);
const isProduction = process.env.NODE_ENV === "production";

if (!parsedEnv.success && isProduction) {
  const message = parsedEnv.error.flatten().fieldErrors
    .NEXT_PUBLIC_FORMSPREE_FORM_ID?.join(", ");
  throw new Error(
    `Missing required environment variable NEXT_PUBLIC_FORMSPREE_FORM_ID. ${message ?? ""}`.trim(),
  );
}

export const env = {
  NEXT_PUBLIC_FORMSPREE_FORM_ID: parsedEnv.success
    ? parsedEnv.data.NEXT_PUBLIC_FORMSPREE_FORM_ID
    : undefined,
};
