import { auth, prisma } from "@/src/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import ConfigForm from "./config-form";
import Link from "next/link";

export default async function ConfigPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user) {
    redirect("/login");
  }

  const adminEmails = process.env.ADMIN_EMAILS
    ? process.env.ADMIN_EMAILS.split(",")
    : [];
  if (!adminEmails.includes(session.user.email)) {
    return (
      <section className="grid place-items-center h-screen text-lg font-jetbrains font-extralight px-4">
        <div className="flex flex-col gap-6 w-full max-w-md">
          <div className="border border-foreground/20 p-8 flex flex-col gap-6 bg-background animate-fade-in transition-all relative z-10 items-center shadow-2xl">
            <h1 className="text-foreground text-lg font-extralight pb-4 text-center">
              you are not authorized to access this page
            </h1>
            <Link href="/">
              <button className="w-full flex-1 text-center px-3 py-2 border border-foreground/20 hover:border-foreground bg-transparent hover:bg-foreground transition-all text-foreground  hover:text-background font-extralight ">
                back to home
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const globalConfig = await prisma.siteConfig.findUnique({
    where: { id: "global" },
  });

  const currentBg = globalConfig?.background || "grid";
  const currentBgColor = globalConfig?.backgroundColor || "#000000";

  return (
    <section className="grid place-items-center h-screen text-lg font-jetbrains font-extralight px-4">
      <div className="flex flex-col gap-6 w-full max-w-md">
        {/* Box */}
        <div className="border border-foreground/20 p-8 flex flex-col gap-6 bg-background animate-fade-in transition-all relative z-10 shadow-2xl">
          <h1 className="text-foreground text-2xl font-extralight border-b border-foreground/10 pb-4">
            theme-configuration
          </h1>
          <ConfigForm currentBg={currentBg} currentBgColor={currentBgColor} />
        </div>
      </div>
    </section>
  );
}
