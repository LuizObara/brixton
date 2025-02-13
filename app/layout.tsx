import { Montserrat } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header";
import Footer from '@/components/footer';

import WhatsappButton from '@/components/whatsapp-button';
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
        <main className="min-h-screen flex flex-col w-full">
          <Header />          
          <div className="flex-1 w-full flex flex-col items-center overflow-y-auto overflow-x-hidden">
            <div className="flex flex-col w-full ">
              {children}
              <WhatsappButton/>
            </div>
            <Toaster/>
          </div>
          <Footer/>
        </main>
      </body>
  </html>
  );
}