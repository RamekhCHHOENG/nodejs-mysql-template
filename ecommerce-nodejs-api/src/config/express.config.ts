import express from "express";

export function expressConfig(app: express.Application): void {
  app.use(express.json());
  // Add any other middleware or configuration here
}
