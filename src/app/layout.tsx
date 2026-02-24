import type { Metadata } from 'next';
import '@/styles/index.css';

export const metadata: Metadata = {
  title: 'Abhijeet Kudo | Software Engineer',
  description:
    'Portfolio of Abhijeet Kudo. Building elegant solutions to complex problems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
