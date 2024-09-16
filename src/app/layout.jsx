import { Josefin_Sans } from 'next/font/google';
import './styles/globals.css';
import ClientView from '@/app/components/ClientView';

const josefinsans = Josefin_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={josefinsans.className}>
        <ClientView>{children}</ClientView>
        <footer className={'text-xs'}>Semester Project by Marie Rohler</footer>
      </body>
    </html>
  );
}
