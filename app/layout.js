import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LanguageProvider } from '@/LanguageContext';

export const metadata = {
  title: 'Blockchain Food Trust',
  description: 'Tracciabilità e autenticità alimentare italiana garantita da blockchain.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
