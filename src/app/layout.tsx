import type { Metadata } from 'next';
import { Geist, Geist_Mono, Mona_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/Navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const monaSans = Mona_Sans({
  variable: '--font-mona-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'YONATANE MEKETE - FRONTEND DEVELOPER',
  description:
    'Portfolio of Yonatane Mekete, a skilled frontend developer specializing in React.js and Next.js to create engaging web experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${monaSans.variable} min-h-screen bg-background  antialiased max-w-2xl mx-auto font-geist-mono`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Navigation />
        </ThemeProvider>
      </body>
    </html>
  );
}
