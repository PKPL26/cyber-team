interface ProfileCardProps {
  data: ProfileData;
}

interface ProfileData {
  name: string;
  email: string;
  major: string;
  year: string;
  motto: string;
}

export default function ProfileCard({
  data,
}: ProfileCardProps) {
  const { name, email, major, year, motto } = data;
  return (
    <div className="border border-foreground/20 p-6 flex flex-col gap-3 bg-background w-full h-full transition-colors duration-300 hover:border-foreground/50">
      <h1 className="font-jetbrains font-extralight text-foreground">{name}</h1>
      <p className="font-jetbrains font-extralight text-foreground/60">{email}</p>
      <p className="font-jetbrains font-extralight text-foreground/60">{major}</p>
      <p className="font-jetbrains font-extralight text-foreground/60">{year}</p>
      <p className="font-jetbrains font-extralight text-foreground/60 italic">"{motto}"</p>
    </div>
  );
}
