'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].menu;
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* ✅ LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo Blockchain Food Trust"
            width={45}
            height={45}
            priority
          />
          <span className="text-xl font-extrabold tracking-wide">
            BlockchainFoodTrust
          </span>
        </Link>

        <div className="hidden md:flex space-x-8 text-lg font-bold">
          <Link href="/progetto">{t.progetto}</Link>
          <Link href="/prodotti">{t.prodotti}</Link>
          <Link href="/territori">{t.territori}</Link>
          <Link href="/verifica">{t.verifica}</Link>
          <Link href="/contatti">{t.contatti}</Link>
        </div>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="hidden md:block border px-2 py-1 rounded-md text-sm ml-4"
        >
          <option value="it">IT</option>
          <option value="en">EN</option>
        </select>

        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-1 w-7 bg-black transition ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-1 w-7 bg-black transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-1 w-7 bg-black transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>
    </header>
  );
}
