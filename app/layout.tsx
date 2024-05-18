import Header from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cyrus | Portfolio",
  description: "Cyrus is a full-stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-[#f5f5f7] text-gray-950 relative pt-28 sm:pt-18 dark:bg-[#0f0f0f] dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#f0ab3d] absolute top-[-6rem] -z-10 left-[15rem] h-[41.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]  invisible sm:visible" />

        <div className="bg-[#53ccd4] absolute top-[-6rem] -z-10 right-[15%] h-[41.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[58.75rem]  ?invisible sm:visible" />

        <div className="bg-[#0c52cc] absolute top-[-6rem] -z-10 right-0 h-[41.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[48.75rem]  invisible sm:visible" />

        <div className="bg-[#f25920] absolute top-[1rem] -z-10 left-[-20rem] h-[41.25rem] w-[41.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] invisible sm:visible" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
