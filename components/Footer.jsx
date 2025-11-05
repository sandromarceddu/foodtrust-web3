'use client';

import { useI18n } from './I18nProvider';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-black text-white py-6 text-center mt-20">
      <p className="text-sm">{t('footer.diritti')}</p>
    </footer>
  );
}
