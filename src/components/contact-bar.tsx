"use client";

import { HOTLINE, WECHAT_ID } from "@/data/contact";
import { CopyButton } from "./copy-button";

export function ContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-navy/95 backdrop-blur py-3 px-4 lg:hidden">
      <div className="mx-auto flex max-w-xl items-center gap-3">
        <a
          href={`tel:${HOTLINE}`}
          className="flex-1 rounded-full border border-brand-gold text-brand-gold text-sm font-medium py-3 text-center"
        >
          拨打 {HOTLINE}
        </a>
        <CopyButton label="复制微信号" value={WECHAT_ID} />
      </div>
    </div>
  );
}
