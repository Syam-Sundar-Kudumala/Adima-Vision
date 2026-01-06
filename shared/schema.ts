import { z } from "zod";

// Simplified schema without Drizzle/DB dependencies
export const insertInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = InsertInquiry & { id: number };
