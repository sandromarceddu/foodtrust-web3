'use client';

import Link from 'next/link';
import { useI18n } from './I18nProvider';

const mock = [
  { name: 'Olio EVO Toscano IGP', region: 'Toscana' },
  { name: 'Parmigiano Reggiano DOP', region: 'Emilia-Romagna' },
  { name: 'Pomodoro San Marzano DOP', region: 'Campania' }
];

export default function ProductsSection() {
  const { t } = useI18n();
  return (
    <section className="bg-white">
      <div className="container py-12">
        <h2 className="section-title">{t.products.title}</h2>
        <p className="section-sub">{t.products.sub}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {mock.map((p, i) => (
            <div key={i} className="card">
              <div className="h-36 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400">Immagine</div>
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-gray-600">{p.region}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/prodotti" className="btn btn-secondary">{t.products.viewAll}</Link>
        </div>
      </div>
    </section>
  );
}
