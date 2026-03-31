"use client";

import { useTransition, useState } from "react";
import {
  updateGlobalBackground,
  updateGlobalBackgroundColor,
} from "../actions/config";

const BACKGROUNDS = [
  { id: "grid", label: "normal-grid" },
  { id: "dot", label: "dot" },
  { id: "diamond", label: "diamond-grid" },
  { id: "scanline", label: "scanline" },
  { id: "radial", label: "radial-rings" },
];

export default function ConfigForm({
  currentBg,
  currentBgColor,
}: {
  currentBg: string;
  currentBgColor: string;
}) {
  const [isPending, startTransition] = useTransition();
  const [localColor, setLocalColor] = useState(currentBgColor);
  const colors = [
    "#2f1313",
    "#2f2313",
    "#2d2f13",
    "#132b2f",
    "#15132f",
    "#2f132f",
    "#0a0a0a",
  ]

  const handleSelect = (bgId: string) => {
    startTransition(async () => {
      const response = await updateGlobalBackground(bgId);
      if (!response.success) {
        alert(response.error);
      }
    });
  };

  const handleColorUpdate = (color: string) => {
    startTransition(async () => {
      const response = await updateGlobalBackgroundColor(color);
      setLocalColor(color);
      if (!response.success) {
        alert(response.error);
      }
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <p className="text-foreground/60 text-sm">background color</p>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleColorUpdate(color)}
              className={`w-10 h-10 rounded-full border border-foreground/20 ${color === localColor ? "outline-2 outline-offset-3 outline-foreground" : ""}`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-foreground/60 text-sm">background</p>
        <div className="flex flex-col gap-2">
          {BACKGROUNDS.map((bg) => (
            <button
              key={bg.id}
              disabled={isPending}
              onClick={() => handleSelect(bg.id)}
              className={`
              w-full text-left px-4 py-3 transition-colors 
              ${
                currentBg === bg.id
                  ? "bg-foreground text-background font-medium"
                  : "bg-foreground/5 hover:bg-foreground/10 text-foreground"
              }
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
            >
              {bg.label} {currentBg === bg.id && " (active)"}
            </button>
          ))}
        </div>
      </div>

      {isPending && (
        <p className="text-sm text-foreground/50 animate-pulse mt-2">
          updating theme...
        </p>
      )}
    </div>
  );
}
