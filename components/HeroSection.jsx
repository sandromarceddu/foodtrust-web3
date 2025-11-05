'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useI18n } from './I18nProvider';

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative w-full bg-center bg-no-repeat bg-contain" style={{backgroundImage: "url('/sfondo.png')"}}>
      <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">

        {/* ✅ TESTO */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-700 mb-8"
          >
            {t.hero.subtitle}
          </motion.p>

          <div className="flex gap-3">
            <Link
              href="/progetto"
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
            >
              {t.hero.ctaProject}
            </Link>

            <a
              href="https://verify.blockchainfoodtrust.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition"
            >
              {t.hero.ctaVerify}
            </a>
          </div>
        </div>

        {/* ✅ IMMAGINE (NON fullscreen, non tagliata) */}
        <div className="flex justify-center">
          <Image
            src="/sfondo.png"
            alt="Blockchain Food Trust"
            width={500}
            height={500}
            className="rounded-xl shadow-lg w-full h-auto object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
