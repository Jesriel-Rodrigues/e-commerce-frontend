import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { PrimeReactProvider } from "primereact/api";
import NavDesktop from "@/components/Header/NavDesktop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxo de Bíblia",
  description: "Personalizada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrimeReactProvider>
      <html lang="pt-BR">
        <body className={inter.className}>
          <Header />
          <NavDesktop />
          {children}
        </body>
      </html>
    </PrimeReactProvider>
  );
}
