import { Volume2 } from "lucide-react";
import { speak } from "@/lib/speech";

export function SpeakButton({ text, label = "تلفظ" }: { text: string; label?: string }) {
  return (
    <button
      type="button"
      className="press inline-flex h-11 items-center gap-2 rounded-lg border border-line bg-surface px-3 text-sm"
      onClick={() => speak(text)}
    >
      <Volume2 className="size-4" />
      {label}
    </button>
  );
}
