import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { CSPostHogProvider } from './providers';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});



export const metadata: Metadata = {
  title: 'Mars Habitat At Berkeley',
  description: 'React Next JS app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <head>
          <link rel="shortcut icon" href="images/icon.ico" type="image/x-icon" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-700`}>
          {children}
        </body>
      </CSPostHogProvider>
    </html>
  );
}
