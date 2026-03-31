"use client";
import Link from "next/link";
import { NAV_LINKS, NAV_LINKS_AUTH } from "./const";
import { usePathname } from "next/navigation";
import { authClient } from "../../../lib/auth-client";
import { useState } from "react";
import LogoutModal from "../../ui/logout-modal";

export default function Navbar() {
  const path = usePathname();
  const { data: session } = authClient.useSession();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  
  const links = session ? NAV_LINKS : NAV_LINKS_AUTH;

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
              <span 
                key={link.label} 
                onClick={() => setIsLogoutModalOpen(true)} 
                className={`hover:text-foreground transition-colors hover:border-b-2 hover:cursor-pointer`}
              >
                {link.label}
              </span>
            )
          }

          return (
            <Link href={link.href} key={link.href} className={`hover:text-foreground transition-colors hover:border-b-2 ${isActive ? "border-b-2 text-foreground" : ""}`}>
              {link.label}
            </Link>
          )
        })}
      </ul>
      {isLogoutModalOpen && <LogoutModal onClose={() => setIsLogoutModalOpen(false)} />}
    </nav>
  );
}
