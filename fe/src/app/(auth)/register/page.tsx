"use client";

import Link from "next/link";

export default function Register() {
  return (
    <section className="grid place-items-center h-screen text-lg font-jetbrains font-extralight">
      <div className="flex flex-col gap-6 w-full max-w-xl">
        <div className="border border-foreground/20 p-6 flex flex-col gap-5 bg-background">
          <h1 className=" text-foreground">create-account</h1>

          <form className="flex flex-col gap-5">
            {/* GRID INPUT */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-foreground/60">$</span>
                  <input
                    type="email"
                    placeholder="email"
                    className="w-full bg-transparent border-b border-foreground/20 focus:border-foreground/80 outline-none placeholder:text-foreground/30"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-foreground/60">$</span>
                  <input
                    type="password"
                    placeholder="password"
                    className="w-full bg-transparent  border-b border-foreground/20 focus:border-foreground/80 outline-none placeholder:text-foreground/30"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-foreground/60">$</span>
                  <input
                    type="text"
                    placeholder="name"
                    className="w-full bg-transparent  border-b border-foreground/20 focus:border-foreground/80 outline-none placeholder:text-foreground/30"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-foreground/60">$</span>
                  <select className="w-full border-b border-foreground/20 bg-background focus:border-foreground/80 outline-none text-foreground/30 focus:text-foreground">
                    <option value="">select-major</option>
                    <option value="COMPUTER_SCIENCE">Computer Science</option>
                    <option value="INFORMATION_SYSTEM">
                      Information System
                    </option>
                    <option value="INTERNATIONAL_CLASS">KKI</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-foreground/60">$</span>
                  <input
                    type="text"
                    placeholder="year"
                    className="w-full bg-transparent border-b border-foreground/20 focus:border-foreground/80 outline-none placeholder:text-foreground/30"
                  />
                </div>

                {/* TEXTAREA */}
                <div className="flex items-center gap-2">
                  <span className="text-foreground/60">$</span>
                  <input
                    type="text"
                    placeholder="motto"
                    className="w-full bg-transparent border-b border-foreground/20 focus:border-foreground/80 outline-none placeholder:text-foreground/30 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                text-center
                border border-foreground/20
                px-3 py-2
                hover:bg-foreground hover:text-background
                transition-colors
                
              "
            >
              register
            </button>
          </form>

          {/* FOOTER */}
          <p className=" text-center text-foreground/60 text-sm">
            have an account?{" "}
            <Link
              href="/login"
              className="hover:text-foreground transition-colors"
            >
              login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
