import { auth, prisma } from "@/src/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import ConfigForm from "./config-form";

export default async function ConfigPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user) {
    redirect("/login");
  }

  const adminEmails = process.env.ADMIN_EMAILS ? process.env.ADMIN_EMAILS.split(",") : [];
  if (!adminEmails.includes(session.user.email)) {
    redirect("/");
  }

  const globalConfig = await prisma.siteConfig.findUnique({
    where: { id: "global" }
  });
  
  const currentBg = globalConfig?.background || "grid";

  return (
    <section className="grid place-items-center h-screen text-lg font-jetbrains font-extralight px-4">
      <div className="flex flex-col gap-6 w-full max-w-md">
        {/* Box */}
        <div className="border border-foreground/20 p-8 flex flex-col gap-6 bg-background animate-fade-in transition-all relative z-10 rounded shadow-2xl">
          <h1 className="text-foreground text-2xl font-extralight border-b border-foreground/10 pb-4">
            theme-configuration
          </h1>
          <ConfigForm currentBg={currentBg} />
        </div>
      </div>
    </section>
  );
}
