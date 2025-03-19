import "../globals.css";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "MrVTC, Chauffeur VTC Privée",
  description: "MrVTC, Votre Service Vts, ....",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
