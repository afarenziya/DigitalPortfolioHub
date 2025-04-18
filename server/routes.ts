import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against schema
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact message
      const contactMessage = await storage.createContactMessage(validatedData);
      
      res.status(201).json({
        message: "Message received successfully!",
        data: contactMessage
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details 
        });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ 
          message: "There was a problem processing your request. Please try again." 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
