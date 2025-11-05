'use client';

import Link from 'next/link';
import { useI18n } from './I18nProvider';

const mockRegions = ['Sardegna','Toscana','Piemonte','Lombardia','Sicilia','Veneto'];

export default function RegionsSection() {
  const { t } = useI18n();
  return (
    <section className="container py-12">
      <h2 className="section-title">{t.regions.title}</h2>
      <p className="section-sub">{t.regions.sub}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {mockRegions.map((r,i)=>(
          <div key={i} className="card text-center">{r}</div>
        ))}
      </div>
      <div className="mt-6">
        <Link href="/territori" className="btn btn-secondary">{t.regions.viewAll}</Link>
      </div>
    </section>
  );
}
