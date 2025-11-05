'use client';

import { useI18n } from './I18nProvider';
export default function CTASection() {
  const { t } = useI18n();
  return (
    <section className="bg-green-700 text-white">
      <div className="container py-12">
        <h3 className="text-2xl font-bold mb-2">{t.cta.title}</h3>
        <a href="https://verify.blockchainfoodtrust.com" target="_blank" rel="noreferrer" className="btn bg-white text-green-800">
          {t.cta.button}
        </a>
      </div>
    </section>
  );
}
