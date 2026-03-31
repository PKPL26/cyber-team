"use client";
import Link from "next/link";
import { NAV_LINKS, NAV_LINKS_AUTH } from "./const";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "../../../lib/auth-client";

export default function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const { data: session } = authClient.useSession();
  
  const links = session ? NAV_LINKS : NAV_LINKS_AUTH;

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <nav className="flex justify-between items-center w-full py-4 px-14 fixed z-50">
      <Link href="/">
        <h1 className="font-jetbrains font-extralight text-foreground">cyber-team</h1>
      </Link>
      <ul className="flex gap-4 font-jetbrains font-extralight text-foreground/50">
        {links.map((link) => {
          const isActive = link.href === path;
          
          if (link.label === "sign-out") {
            return (
              <button 
                key={link.label} 
                onClick={handleSignOut} 
                className={`hover:text-foreground transition-colors hover:border-b-2 hover:cursor-pointer`}
              >
                {link.label}
              </button>
            )
          }

          return (
            <Link href={link.href} key={link.href} className={`hover:text-foreground transition-colors hover:border-b-2 ${isActive ? "border-b-2 text-foreground" : ""}`}>
              {link.label}
            </Link>
          )
        })}
      </ul>
    </nav>
  );
}
