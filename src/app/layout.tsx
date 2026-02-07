import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/Navigation';
import { GridLines } from '@/components/ui/grid-lines';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="noise" />
          <GridLines />
          <main className="relative max-w-4xl mx-auto px-6 py-12 mb-24 z-10">
            {children}
          </main>
          {/* <Navigation /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
