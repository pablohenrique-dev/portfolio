import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

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
      <body className={epilogue.className}>{children}</body>
    </html>
  );
}
