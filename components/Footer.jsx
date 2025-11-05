'use client';

import { useI18n } from './I18nProvider';
export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-10 border-t">
      <div className="container py-6 text-sm text-gray-600 flex items-center justify-between">
        <span>{t.footer.rights}</span>
        <a className="underline" href="mailto:sandro.sservice@gmail.com">sandro.sservice@gmail.com</a>
      </div>
    </footer>
  );
}
