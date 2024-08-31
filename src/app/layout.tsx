'use client';

import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { DarkModeProvider } from './context/DarkModeContext';
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <DarkModeProvider>
        <body className={inter.className}>{children}</body>
      </DarkModeProvider>
    </html>
  );
}