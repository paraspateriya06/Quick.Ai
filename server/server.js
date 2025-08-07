import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware } from "@clerk/express";
import { requireAuth } from "@clerk/express";

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Public route
app.get("/", (req, res) => res.send("Server is Live!!!"));

// Example of a protected route
app.get("/protected", requireAuth(), (req, res) => {
  res.send("You are authenticated");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});
