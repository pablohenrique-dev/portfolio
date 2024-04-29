import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import "keen-slider/keen-slider.min.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer";
import { SplashScreen } from "@/components/SplashScreen/Index";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Home | Pablo Henrique",
    template: "%s | Pablo Henrique",
  },
  openGraph: {
    images: [
      {
        url: "/assets/metatag-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
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
        <SplashScreen />
      </body>
    </html>
  );
}
