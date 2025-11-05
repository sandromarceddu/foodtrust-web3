'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useI18n } from './I18nProvider';

export default function Header() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/" className="text-xl font-extrabold tracking-wide">
          BlockchainFoodTrust
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-bold">
          <Link href="/progetto">{t('menu.progetto')}</Link>
          <Link href="/prodotti">{t('menu.prodotti')}</Link>
          <Link href="/territori">{t('menu.territori')}</Link>
          <Link href="/verifica">{t('menu.verifica')}</Link>
          <Link href="/contatti">{t('menu.contatti')}</Link>

        {/* SELECT LINGUA DESKTOP */}
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
            className="border px-2 py-1 rounded-md text-sm ml-2"
          >
            <option value="it">IT</option>
            <option value="en">EN</option>
          </select>
        </div>

        {/* HAMBURGER MOBILE */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-1 w-7 bg-black transition ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-1 w-7 bg-black transition ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-1 w-7 bg-black transition ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t px-6 py-6 space-y-4 text-lg font-bold">
          <Link href="/progetto" onClick={() => setOpen(false)}>{t('menu.progetto')}</Link>
          <Link href="/prodotti" onClick={() => setOpen(false)}>{t('menu.prodotti')}</Link>
          <Link href="/territori" onClick={() => setOpen(false)}>{t('menu.territori')}</Link>
          <Link href="/verifica" onClick={() => setOpen(false)}>{t('menu.verifica')}</Link>
          <Link href="/contatti" onClick={() => setOpen(false)}>{t('menu.contatti')}</Link>

          <div className="pt-2">
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value)}
              className="border px-2 py-1 rounded-md text-sm"
            >
              <option value="it">IT</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}
