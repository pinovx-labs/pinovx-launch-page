import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { inter, montserrat, geist, roboto } from "./fonts";
import Footer from "@/shared/components/footer/Footer";
import Header from "@/shared/components/header/header";
import ScrollProgressIndicator from "@/utils/ScrollProgress";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "Pinovx",
  description:
    "Send money across borders instantly with speed, clarity, and confidence.",

  icons: {
    icon: "https://res.cloudinary.com/danxk4ua5/image/upload/v1765368286/PinovX-removebg-preview_2_osjlot.png",
    shortcut:
      "https://res.cloudinary.com/danxk4ua5/image/upload/v1765368286/PinovX-removebg-preview_2_osjlot.png",
    apple:
      "https://res.cloudinary.com/danxk4ua5/image/upload/v1765368286/PinovX-removebg-preview_2_osjlot.png",
  },

  openGraph: {
    title: "Pinovx",
    description:
      "Send money across borders instantly with speed, clarity, and confidence.",
    url: "https://pinovx-launch-page.onrender.com",
    siteName: "Pinovx Inc",
    images: [
      {
        url: "https://res.cloudinary.com/danxk4ua5/image/upload/v1765368286/PinovX-removebg-preview_2_osjlot.png",
        width: 1200,
        height: 630,
        alt: "Pinovx – Cross-border payments made simple",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pinovx",
    description:
      "Send money across borders instantly with speed, clarity, and confidence.",
    images: [
      "https://res.cloudinary.com/danxk4ua5/image/upload/v1765368286/PinovX-removebg-preview_2_osjlot.png",
    ],
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
                    <Toaster position="top-center" />

          <Footer />
          <ScrollProgressIndicator />
        </Providers>
      </body>
    </html>
  );
}