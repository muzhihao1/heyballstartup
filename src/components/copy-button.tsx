"use client";

import { useState } from "react";
import clsx from "clsx";

type CopyButtonProps = {
  label: string;
  value: string;
  className?: string;
  compact?: boolean;
};

export function CopyButton({ label, value, className, compact }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("复制失败", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={clsx(
        "rounded-full bg-brand-gold text-brand-navy font-medium transition hover:opacity-90 active:scale-[0.99]",
        compact ? "px-4 py-2 text-sm" : "px-4 py-3 text-base",
        className
      )}
    >
      {copied ? "已复制" : label}
    </button>
  );
}
