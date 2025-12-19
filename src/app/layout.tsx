import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { inter, montserrat, geist, roboto } from "./fonts";
import Footer from "@/shared/components/footer/Footer";

export const metadata: Metadata = {
  title: "E-commerce Multi Vendor Seller Ui",
  description:
    "E-commerce Multi Vendor app built with express.js and microservice",
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
        <Providers>{children}

          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
