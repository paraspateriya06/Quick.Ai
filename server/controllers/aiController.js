import OpenAI from "openai";
import sql from "./../configs/db.js";
import { clerkClient } from "@clerk/express";

const AI = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

export const generateArticle = async (req, res) => {
  try {
    const { prompt, length } = req.body;

    const auth = await req.auth();
    const userId = auth?.userId;
    const plan = req.plan;
    const free_usage = req.free_usage ?? 0;

    if (!userId || !prompt || !length) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields.",
      });
    }

    if (plan !== "premium" && free_usage >= 10) {
      return res.json({
        success: false,
        message: "Limit reached. Upgrade to continue.",
      });
    }

    const response = await AI.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: length,
    });

    const content = response?.choices?.[0]?.message?.content ?? "";

    if (!content) {
      return res.json({
        success: false,
        message: "Failed to generate article.",
      });
    }

    await sql`
      INSERT INTO creations(user_id, prompt, content, type)
      VALUES (${userId}, ${prompt}, ${content}, 'article')
    `;

    if (plan !== "premium") {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          free_usage: free_usage + 1,
        },
      });
    }

    res.json({
      success: true,
      content,
    });

  } catch (error) {
    console.error("Error generating article:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};


//4:04 4 hour 4 min