"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  {
    /* TODO: update typography */
  }
  const fullText = "cyber-team@system:~$ build something meaningful";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  // typing effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle Glow Effect background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-foreground/3 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-3xl w-full flex flex-col gap-8">
        {/* Terminal Line */}
        <h1 className="font-jetbrains font-extralight text-2xl md:text-4xl text-foreground flex items-center min-h-10">
          {text}
        </h1>

        {/* Subtitle */}
        {/* TODO: update typography */}
        <p
          className="font-jetbrains text-foreground/60 text-sm md:text-lg opacity-0 animate-fade-in"
          style={{ animationDelay: "1000ms" }}
        >
          a minimal system for building, experimenting, and shipping ideas with
          speed.
        </p>

        {/* Actions */}
        <div
          className="flex gap-5 opacity-0 animate-fade-in mt-2"
          style={{ animationDelay: "1200ms" }}
        >
          <Link
            href="/about"
            className="group relative px-6 py-2.5 font-jetbrains text-sm overflow-hidden border border-foreground/20 hover:border-foreground/40 transition-colors"
          >
            <span className="relative z-10 text-foreground group-hover:text-background transition-colors duration-300">
              get-started
            </span>
            <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </Link>
        </div>
      </div>
    </section>
  );
}
