"use client";
import Link from "next/link";
import { NAV_LINKS, NAV_LINKS_AUTH } from "./const";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  return (
    <nav className="flex justify-between items-center w-full py-4 px-14 fixed z-50">
      <h1 className="font-jetbrains font-extralight text-foreground">cyber-team</h1>
      <ul className="flex gap-4 font-jetbrains font-extralight text-foreground/50">
        {NAV_LINKS_AUTH.map((link) => {
          const isActive = link.href === path;
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
