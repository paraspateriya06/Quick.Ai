// Middleware to check userID and hasPremiumPlan

import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
  try {
    const { userId } = req.auth();

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // Fetch user
    const user = await clerkClient.users.getUser(userId);

    // Extract plan and free usage from metadata
    const plan = user.privateMetadata?.plan || "free";
    const freeUsage = user.privateMetadata?.free_usage ?? 0;

    // Set request-scoped values
    req.plan = plan;
    req.free_usage = freeUsage;

    // Initialize free usage if missing
    if (plan !== "premium" && user.privateMetadata?.free_usage === undefined) {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: { free_usage: 0 },
      });
      req.free_usage = 0;
    }

    next();
  } catch (error) {
    console.error("Auth middleware error:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
