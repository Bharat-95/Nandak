// Import necessary modules
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";
import Script from "next/script"; // Import next/script

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nandak Innovations",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#DDE3FE] text-black lg:px-16 md:px-16 px-4 py-6">
      <Head>
        <title>Nandak Innovations</title>
      </Head>
      
      {/* Add Google Tag Manager script with next/script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16754470845"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16754470845');
          `,
        }}
      />

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
