import type { Metadata } from "next";
import "./globals.css";
import SocialButtons from "@/components/SocialButtons";

export const metadata: Metadata = {
  title: "Tuti Ancestral | Turismo Vivencial en el Valle del Colca",
  description: "Vive una experiencia auténtica de cultura, tradiciones y naturaleza en el corazón del Valle del Colca, Arequipa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <SocialButtons />
      </body>
    </html>
  );
}
