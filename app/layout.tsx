import { Montserrat } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import Header from "@/components/header";

import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({
  weight:  ['100', '400', '700', '900'],
  style:   ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Brixton",
  description: "Brixton Incorporações e Loteamentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={montserrat.className}>
          <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
          >
              <main className="min-h-screen flex flex-col w-full">
                  <Header />
                  
                  <div className="flex-1 w-full flex flex-col items-center overflow-y-auto overflow-x-hidden">
                      <div className="flex flex-col w-full ">
                          {children}
                      </div>
                  </div>
                  
                  <Toaster />
              </main>
          </ThemeProvider>
      </body>
  </html>
  );
}