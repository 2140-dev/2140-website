import "../styles/normalize.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

import { Footer } from "@/app/shared/containers/footer/footer";
import { Header } from "@/app/shared/containers/header/header";
import { ThemeRegistry } from "@/app/theme-registry";
import { client } from "@/sanity/lib/client";
import * as demo from "@/sanity/lib/demo";
import { fetchSettings, fetchSettingsAndMenu } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await fetchSettings(client);
  const title = settings?.title || demo.title;
  const ogImage = resolveOpenGraphImage(settings?.ogImage);

  return {
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: settings?.description,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { settings, menu } = await fetchSettingsAndMenu(client);
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header logo={settings.logo} items={menu.items} />
          {children}
          {isDraftMode && <VisualEditing />}
          <Footer email={settings.email} disclaimer={settings.disclaimer} />
          <SpeedInsights />
        </ThemeRegistry>
      </body>
    </html>
  );
}
