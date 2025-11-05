'use client';

import { createContext, useContext, useMemo, useEffect, useState } from 'react';

// 🔤 Dizionario interno (niente import esterni)
const messages = {
  it: {
    menu: {
      progetto: "Progetto",
      prodotti: "Prodotti",
      territori: "Territori",
      verifica: "Verifica Origine",
      contatti: "Contatti",
    },
    hero: {
      title: "La blockchain al servizio dell’autenticità alimentare italiana",
      subtitle: "Tracciabilità, trasparenza e tutela del Made in Italy.",
      ctaProject: "Scopri il progetto",
      ctaVerify: "Verifica un prodotto",
    },
    footer: {
      diritti: "© Blockchain Food Trust — Tutti i diritti riservati",
    },
  },
  en: {
    menu: {
      progetto: "Project",
      prodotti: "Products",
      territori: "Territories",
      verifica: "Verify Origin",
      contatti: "Contact",
    },
    hero: {
      title: "Blockchain for the authenticity of Italian food",
      subtitle: "Traceability, transparency and protection of Made in Italy.",
      ctaProject: "Learn more",
      ctaVerify: "Verify a product",
    },
    footer: {
      diritti: "© Blockchain Food Trust — All rights reserved",
    },
  },
};

const I18nCtx = createContext(null);

// utility per leggere chiavi “a.b.c”
function getByPath(obj, path) {
  return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
}

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState('it');

  // persistenza semplice
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('locale') : null;
    if (saved && (saved === 'it' || saved === 'en')) setLocale(saved);
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') window.localStorage.setItem('locale', locale);
  }, [locale]);

  const t = useMemo(() => {
    return (key) => {
      const val = getByPath(messages[locale], key);
      return val ?? key; // fallback: mostra la chiave se mancante
    };
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

// Hook da usare nei componenti client
export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error('useI18n must be used within <I18nProvider>');
  return ctx;
}
