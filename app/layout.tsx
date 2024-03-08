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
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#0f0f0f] dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#0478cc] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#0478cc]"></div>

        <div className="bg-[#fe2400] absolute top-[-1rem] -z-10 left-[-55rem] h-[21.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-38rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#fe2400]"></div>

        <div className="bg-[#13fffd] absolute top-[-6rem] -z-10 right-[25%] h-[41.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#13fffd]"></div>
        <div className="bg-[#fe8e01] absolute top-[-6rem] -z-10 right-[35%] h-[41.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#fe8e01]"></div>

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
