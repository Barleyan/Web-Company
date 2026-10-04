"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import s from "../modul_css/dashboard.module.css";

const menu = [
  { group: "Konten", items: [
    { href: "/dashboard/portfolio", label: "Portfolio" },
    { href: "/dashboard/contact", label: "Kontak" },
  ]},
];

export default function DashboardLayout({ children }) {
  const path = usePathname();
  const [open, setOpen] = useState(true);
  return (
    <div className={s.root}>
      <header className={s.topbar}>
        <strong>Akses Admin</strong>
        <button className={s.burger} onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        <span className={s.user}>Admin</span>
      </header>
      <div className={s.body}>
        {open && (
          <aside className={s.sidebar}>
            {menu.map((g) => (
              <div key={g.group}>
                <p className={s.group}>{g.group}</p>
                {g.items.map((m) => (
                  <Link key={m.href} href={m.href}
                    className={`${s.link} ${path.startsWith(m.href) ? s.active : ""}`}>
                    {m.label}
                  </Link>
                ))}
              </div>
            ))}
          </aside>
        )}
        <main className={s.main}>{children}</main>
      </div>
      <footer className={s.foot}>Copyright © {new Date().getFullYear()}. All rights reserved.</footer>
    </div>
  );
}