import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { I18nProvider } from '../components/I18nProvider';

export const metadata = {
  title: 'Blockchain Food Trust',
  description: 'Tracciabilità e autenticità alimentare italiana garantita da blockchain.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <I18nProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
