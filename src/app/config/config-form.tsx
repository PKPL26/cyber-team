"use client";

import { useTransition } from "react";
import { updateGlobalBackground } from "../actions/config";

const BACKGROUNDS = [
  { id: "grid", label: "normal-grid" },
  { id: "dot", label: "dot" },
  { id: "diamond", label: "diamond-grid" },
  { id: "scanline", label: "scanline" },
  { id: "radial", label: "radial-rings" },
];

export default function ConfigForm({ currentBg }: { currentBg: string }) {
  const [isPending, startTransition] = useTransition();

  const handleSelect = (bgId: string) => {
    startTransition(async () => {
      const response = await updateGlobalBackground(bgId);
      if (!response.success) {
        alert(response.error);
      }
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-foreground/60 text-sm">background</p>
      <div className="flex flex-col gap-2">
        {BACKGROUNDS.map((bg) => (
          <button
            key={bg.id}
            disabled={isPending}
            onClick={() => handleSelect(bg.id)}
            className={`
              w-full text-left px-4 py-3 rounded-md transition-colors 
              ${currentBg === bg.id 
                ? 'bg-foreground text-background font-medium' 
                : 'bg-foreground/5 hover:bg-foreground/10 text-foreground'
              }
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            {bg.label} {currentBg === bg.id && " (active)"}
          </button>
        ))}
      </div>
      {isPending && (
        <p className="text-sm text-foreground/50 animate-pulse mt-2">
          Updating global background...
        </p>
      )}
    </div>
  );
}
