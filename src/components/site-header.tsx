"use client";

import { useState } from "react";
import Link from "next/link";
import { HOTLINE, WECHAT_ID } from "@/data/contact";
import { CopyButton } from "./copy-button";

const navItems = [
  { label: "首页", href: "#hero" },
  { label: "赛事资讯", href: "#overview" },
  { label: "历届战报", href: "#events" },
  { label: "品牌与团队", href: "#brand" },
  { label: "合作方案", href: "#partners" },
  { label: "联系我们", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-brand-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:py-4">
        <Link href="#hero" onClick={closeMenu} className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-brand-gold/10 ring-1 ring-brand-gold/40" />
          <div className="text-white">
            <p className="text-sm uppercase tracking-[0.32em] text-brand-gold">YES BILLIARDS</p>
            <p className="text-base font-semibold">耶氏赛事品牌中心</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-brand-gold">
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${HOTLINE}`}
              className="rounded-full border border-brand-gold px-4 py-2 text-brand-gold transition hover:bg-brand-gold hover:text-brand-navy"
            >
              {HOTLINE}
            </a>
            <CopyButton
              label="复制微信号"
              value={WECHAT_ID}
              compact
              className="whitespace-nowrap"
            />
          </div>
        </nav>

        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
        >
          <span className="sr-only">切换导航</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-brand-navy px-4 py-6 text-white lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={closeMenu} className="text-base">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={`tel:${HOTLINE}`}
              className="w-full rounded-full border border-brand-gold py-3 text-center text-brand-gold"
            >
              拨打 {HOTLINE}
            </a>
            <CopyButton label="复制微信号" value={WECHAT_ID} />
          </div>
        </div>
      )}
    </header>
  );
}
