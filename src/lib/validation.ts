import { z } from "zod";
import { contactInquiryTypes } from "@/data/site";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  inquiryType: z.enum(contactInquiryTypes),
  message: z.string().trim().min(10, "Message should be at least 10 characters.").max(3000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function validateContactInput(data: unknown) {
  return contactSchema.safeParse(data);
}