'use client';

import { useI18n } from './I18nProvider';
export default function HowItWorks() {
  const { t } = useI18n();
  return (
    <section className="container py-12">
      <h2 className="section-title">{t.how.title}</h2>
      <p className="section-sub">{t.how.sub}</p>
      <div className="grid md:grid-cols-3 gap-6">
        {t.how.steps.map((s, idx) => (
          <div key={idx} className="card">
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
