"use client";

import { authClient } from "@/src/lib/auth-client";
import { useState } from "react";
export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    const { error } = await authClient.signIn.social({ provider: "google" });
    if (error) {
      setIsLoading(false);
    }
  };

  return (
    <section className="grid place-items-center h-screen text-lg font-jetbrains font-extralight">
      <div className="flex flex-col gap-6 w-full max-w-md">
        {/* Box */}
        <div className="border border-foreground/20 p-6 flex flex-col gap-5 bg-background animate-fade-in transition-all">
          <h1 className="text-foreground">authentication-required</h1>

          <form className="flex flex-col gap-5">
            {/* GOOGLE LOGIN */}
            <button
              disabled={isLoading}
              type="button"
              onClick={handleGoogleSignIn}
              className="group border border-foreground/20
                px-3 py-2
                bg-foreground/5
                hover:bg-foreground hover:text-background
                transition-colors text-center flex items-center justify-center gap-4 hover:cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              <img
                src="/google.webp"
                alt="google"
                className="w-5 h-5 grayscale-100 brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all"
              />
              {isLoading ? "Loading..." : "Continue with Google"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
