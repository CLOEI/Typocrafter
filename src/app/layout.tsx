import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400"],
});

export const metadata: Metadata = {
  title: "Typocrafter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(montserrat.variable, poppins.className, "scroll-smooth")}
      >
        <div vaul-drawer-wrapper="" className="bg-white min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
