import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Navbar from "@app/components/navbar/Navbar";
import Footer from "@app/components/footer/Footer";
import "./globals.css";
import BottomTabBar from "@app/components/bottomtabbar/BottomTabBar";

const ubuntu = Ubuntu({
  subsets: ["greek"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Software Developer | Nodejs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <div className="max-w-6xl min-h-screen m-auto p-8 flex flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
          <BottomTabBar />
        </div>
      </body>
    </html>
  );
}
