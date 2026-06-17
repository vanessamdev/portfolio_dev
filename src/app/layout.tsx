import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vanessa | DEV",
  description:
    "Portfólio de Vanessa Mendes — Desenvolvedora Web Full Stack com especialização em AWS. E-commerce, sites institucionais, landing pages e automação cloud.",
  keywords: [
    "desenvolvedora web",
    "aws",
    "freelancer",
    "e-commerce",
    "next.js",
    "cloud",
  ],
  openGraph: {
    title: "Vanessa | DEV",
    description:
      "E-commerce, sites institucionais, landing pages e automação cloud.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
