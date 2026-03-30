import ProfileCard from "@/src/components/ui/profile-card";
import { TEAM_MEMBERS } from "./const";

export default function About() {
  return (
    <div className="flex flex-col gap-4 font-jetbrains font-extralight items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-2 text-center max-w-2xl px-6">
        <h1 
          className="text-foreground text-3xl opacity-0 animate-fade-in" 
          style={{ animationDelay: "200ms" }}
        >
          about-us
        </h1>
        {/* TODO: update typography */}
        <p 
          className="opacity-0 animate-fade-in text-foreground/70 text-sm md:text-base leading-relaxed" 
          style={{ animationDelay: "400ms" }}
        >
          we are a team of students who are passionate about web development and
          we are here to share our knowledge with you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-6 mt-8">
        {TEAM_MEMBERS.map((member, index) => (
          <div 
            key={index}
            className="opacity-0 animate-fade-in flex flex-col group"
            style={{ animationDelay: `${600 + index * 150}ms` }}
          >
            <ProfileCard data={member} />
          </div>
        ))}
      </div>
    </div>
  );
}
