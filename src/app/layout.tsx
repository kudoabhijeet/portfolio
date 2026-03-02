import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';
import '@/styles/index.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Abhijeet Prasad | Software Engineer',
  description:
    'Portfolio of Abhijeet Prasad — Software Engineer building elegant, scalable solutions to complex problems.',
  openGraph: {
    title: 'Abhijeet Prasad | Software Engineer',
    description:
      'Portfolio of Abhijeet Prasad — Software Engineer building elegant, scalable solutions to complex problems.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
