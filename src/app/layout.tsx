import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import Footer from '@/components/Footer';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'ACM Outreach at UCSD',
  description:
    'Welcome to ACM Outreach at UCSD, where our mission is to ignite a passion for computing and STEM among K-12 students, with a special focus on those who are underrepresented in the computing community.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Footer />
    </html>
  );
}
