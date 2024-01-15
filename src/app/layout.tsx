import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import "keen-slider/keen-slider.min.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Pablo Henrique",
  description:
    "Um site de um desenvolvedor Front End, apaixonado pelo universo da tecnologia e dos games.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={epilogue.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
