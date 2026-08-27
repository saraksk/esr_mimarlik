import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
