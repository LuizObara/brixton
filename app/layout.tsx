import { Montserrat } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header"
import Footer from "@/components/footer"

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
    <html lang="en" suppressHydrationWarning={true} >
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen max-h-screen flex flex-col items-center w-full"> 
            <Header/>
            <div className="flex-1 w-full flex flex-col items-center overflow-y-auto overflow-x-hidden"> 
              <div className="flex flex-col w-full min-h-full max-w-7xl">
                {children}
              </div>
              <Toaster />
            </div>
            <Footer/>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}