import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TURISM | Hotel & Restaurante Turístico",
  description: "Experiencia inolvidable de lujo y naturaleza en nuestro hotel y restaurante boutique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
