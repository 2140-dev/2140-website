import "../tailwind.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  weight: "400",
});

export { metadata, viewport } from "next-sanity/studio";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
