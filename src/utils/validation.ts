import { z, ZodError } from "zod";

// Define the schema outside for reusability
const schema = z.object({
  text: z.string().min(1, "Text is required"), // Field must be a non-empty string
  select: z.enum(["option1", "option2"]), // Must be one of the predefined options
});

// Infer the type of formData from the schema
export type FormData = z.infer<typeof schema>;

export interface ValidationResult {
  valid: boolean;
  errors: null | ZodError["errors"];
}

export const validateForm = (formData: FormData): ValidationResult => {
  try {
    schema.parse(formData);
    return { valid: true, errors: null };
  } catch (error) {
    if (error instanceof ZodError) {
      return { valid: false, errors: error.errors };
    }
    throw error; // Re-throw unexpected errors
  }
};
