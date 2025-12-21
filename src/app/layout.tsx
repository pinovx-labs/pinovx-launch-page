import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { inter, montserrat, geist, roboto } from "./fonts";
import Footer from "@/shared/components/footer/Footer";
import Header from "@/shared/components/header/header";
import ScrollProgressIndicator from "@/utils/ScrollProgress";

export const metadata: Metadata = {
  title: "Pinovx",
  description:
    "Send money across borders instantly with speed, clarity, and confidence.",
  icons: {
    icon: "https://res.cloudinary.com/danxk4ua5/image/upload/v1766226348/Vector_2_oxx7rl.svg",
    shortcut: "https://res.cloudinary.com/danxk4ua5/image/upload/v1766226348/Vector_2_oxx7rl.svg",
    apple: "https://res.cloudinary.com/danxk4ua5/image/upload/v1766226348/Vector_2_oxx7rl.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${montserrat.variable}
          ${roboto.variable}
          ${geist}
        `}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollProgressIndicator />
        </Providers>
      </body>
    </html>
  );
}