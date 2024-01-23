"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Image } from "../Image";

const greetings = [
  "Olá",
  "Hello",
  "こんにちは",
  "Bonjour",
  "Hola",
  "你好",
  "Ciao",
  "Xin chào",
];

export const SplashScreen = () => {
  const [currentGreetingIndex, setCurrentGreetingIndex] = React.useState(0);
  const [isSplashScreenOpen, setIsSplashScreenOpen] = React.useState(true);
  const currentPath = usePathname();

  React.useEffect(() => {
    const nextGreetingInterval = setInterval(() => {
      if (currentGreetingIndex < greetings.length - 1) {
        setCurrentGreetingIndex((state) => state + 1);
      } else {
        clearInterval(nextGreetingInterval);
      }
    }, 200);

    const closeSplashScreenTimeout = setTimeout(() => {
      setIsSplashScreenOpen(false);
    }, greetings.length * 250);

    return () => {
      clearInterval(nextGreetingInterval);
      clearTimeout(closeSplashScreenTimeout);
    };
  }, [currentGreetingIndex]);

  if (isSplashScreenOpen && currentPath === "/")
    return (
      <div className="animate-splash-screen fixed inset-0 flex items-center justify-center overflow-hidden bg-black">
        <div className="relative animate-fade-in">
          {greetings?.map((greeting, index) => {
            if (currentGreetingIndex !== index) return null;
            return (
              <h1
                key={greeting}
                className="flex items-center gap-4 text-4xl text-white md:text-5xl"
              >
                <Image
                  src="/assets/icon-detail.svg"
                  alt="Ícone em formato de asterisco na cor azul"
                  className="mb-2 w-8"
                />
                {greeting}
              </h1>
            );
          })}
        </div>
      </div>
    );
};
