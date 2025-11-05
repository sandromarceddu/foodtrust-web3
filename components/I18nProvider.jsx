'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import it from '../i18n/it.json';
import en from '../i18n/en.json';

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('it');
  const dicts = { it, en };
  const t = dicts[lang];

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('bft-lang') : null;
    if (saved === 'it' || saved === 'en') setLang(saved);
  }, []);

  const toggle = () => {
    const next = lang === 'it' ? 'en' : 'it';
    setLang(next);
    if (typeof window !== 'undefined') localStorage.setItem('bft-lang', next);
  };

  return (
    <I18nContext.Provider value={{ lang, t, toggle }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
