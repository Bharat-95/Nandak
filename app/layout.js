import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nandak Innovations ",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#DDE3FE] text-black lg:px-16 md:px-16 px-4 py-6">
      <body className={inter.className}>
        <Header />
        {children}   
        <Footer />  
        </body>
     
      
    </html>
  );
}
