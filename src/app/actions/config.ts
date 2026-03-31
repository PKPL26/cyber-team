"use server";

import { prisma } from "@/src/lib/auth";
import { revalidatePath } from "next/cache";
import { auth } from "@/src/lib/auth";
import { headers } from "next/headers";

export async function updateGlobalBackground(bgName: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session || !session.user || !session.user.email) {
      throw new Error("Unauthorized");
    }

    const adminEmails = process.env.ADMIN_EMAILS?.split(",") || [];
    if (!adminEmails.includes(session.user.email)) {
      throw new Error("Forbidden: You are not an admin.");
    }

    await prisma.siteConfig.upsert({
      where: { id: "global" },
      update: { background: bgName },
      create: { id: "global", background: bgName },
    });

    // Revalidate the entire app so all users see it immediately
    revalidatePath("/", "layout");

    return { success: true };
  } catch (error: any) {
    console.error("Failed to set background:", error);
    return { success: false, error: error.message };
  }
}
