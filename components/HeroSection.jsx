'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useI18n } from './I18nProvider';

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative w-full border-b bg-white">
      
      {/* ✅ IMMAGINE CENTRATA NON FULLSCREEN */}
      <div className="relative w-full flex justify-center pt-10 pb-16">
        <div className="max-w-xl w-full relative">
          <Image
            src="/sfondo.png"
            alt="Blockchain Food Trust"
            width={800}
            height={600}
            className="w-full h-auto object-contain opacity-90"
            priority
          />

          {/* ✅ TESTO SOPRA IMMAGINE */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 drop-shadow-lg"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-700 mb-6 drop-shadow"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* ✅ PULSANTI CORRETTI */}
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

        </div>
      </div>

    </section>
  );
}
