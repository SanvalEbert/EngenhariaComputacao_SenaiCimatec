import type { Metadata } from "next";
import "./globals.css";
import "./rich.css";

export const metadata: Metadata = {
  title: "Engenharia de Computação | SENAI CIMATEC",
  description:
    "Uma visão da coordenação sobre a Engenharia de Computação do SENAI CIMATEC: formação, resultados, experiências, parcerias e trajetórias.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
