import { Montserrat, Inter } from "next/font/google";

import { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "CoZar Architects",
  description:
    "Architecture studio designing spaces with clarity, function, and timeless detail.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
