import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import Footer from '../components/Footer';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'ACM Static Site Template',
  description: 'Template for making ACM websites!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Footer />
    </html>
  );
}
