import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";
import Script from "next/script"; 
import { Poppins } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nandak Innovations",
  description: "",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" ">
      <Head>
        <title>Nandak Innovations</title>
      </Head>
    
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

      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
