import { authClient } from "@/src/lib/auth-client";
import { useRouter } from "next/navigation";

interface LogoutModalProps {
  onClose: () => void;
}

export default function LogoutModal({ onClose }: LogoutModalProps) {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          onClose();
          router.push("/login");
        },
      },
    });
  };

  return (
    <div className="fixed inset-0 z-100 grid place-items-center w-screen h-screen">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative border p-6 flex flex-col gap-3 bg-background transition-colors duration-300 border-foreground/20 w-[90vw] max-w-sm">
        <h1 className="font-jetbrains font-extralight text-foreground text-xl">
          logout
        </h1>
        <p className="font-jetbrains font-extralight text-foreground/60">
          are you sure you want to logout?
        </p>
        <div className="flex gap-4 justify-end mt-2">
          <button
            onClick={onClose}
            className=" hover:cursor-pointer font-jetbrains font-extralight text-foreground/60 transition-colors hover:text-foreground"
          >
            cancel
          </button>
          <button
            className=" hover:cursor-pointer font-jetbrains font-extralight text-red-500/80 transition-colors hover:text-red-500"
            onClick={handleSignOut}
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
}
