"use client";

import Link from "next/link";

export default function Login() {
  return (
    <section className="grid place-items-center h-screen text-lg">
      <div className="flex flex-col gap-6 w-full max-w-md">
        {/* Box */}
        <div className="border border-foreground/20 p-6 flex flex-col gap-5 bg-background animate-fade-in transition-all">
          <h1 className="font-jetbrains font-extralight text-foreground">
            authentication-required
          </h1>

          <form className="flex flex-col gap-5">
            {/* EMAIL */}
            <div className="flex items-center gap-2 group">
              <span className="text-foreground/60">$</span>
              <input
                type="email"
                placeholder="enter_email"
                className="
                  w-full
                  font-jetbrains font-extralight
                  bg-transparent
                  border-b border-foreground/20
                  py-1
                  focus:outline-none
                  focus:border-foreground/80
                  placeholder:text-foreground/30
                "
              />
            </div>

            {/* PASSWORD */}
            <div className="flex items-center gap-2 group">
              <span className="text-foreground/60">$</span>
              <input
                type="password"
                placeholder="enter_password"
                className="
                  w-full
                  font-jetbrains font-extralight
                  bg-transparent
                  border-b border-foreground/20
                  py-1
                  focus:outline-none
                  focus:border-foreground/80
                  placeholder:text-foreground/30
                "
              />
            </div>

            {/* BUTTON */}
            {/* TODO: implement oauth */}
            <button
              type="submit"
              className="
                mt-2
                font-jetbrains font-extralight
                border border-foreground/20
                px-3 py-2
                hover:bg-foreground hover:text-background
                transition-colors text-center
              "
            >
              login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
