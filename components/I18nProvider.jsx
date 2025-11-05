'use client';

import { createContext, useContext, useMemo, useEffect, useState } from 'react';

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

function getByPath(obj, path) {
  return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
}

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState('it'); // fallback server-side

  // ✅ FIX: fallback sicuro lato server
  const currentMessages = messages[locale] || messages.it;

  // browser load
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('locale') : null;
    if (saved && messages[saved]) setLocale(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') window.localStorage.setItem('locale', locale);
  }, [locale]);

  const t = useMemo(() => {
    return (key) => {
      const val = getByPath(currentMessages, key);
      return val ?? key;
    };
  }, [currentMessages]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error('useI18n must be used within <I18nProvider>');
  return ctx;
}
