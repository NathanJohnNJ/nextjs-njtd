import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Image from "next/image";
import Navbar from "@/components/nav/navbar";

export const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  variable: "--font-poppins"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:title" content="NJTD" />
        <meta property="og:image" content="/logo.rainbow.png" />
        <meta property="og:url" content="https://www.njtd.xyz/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="A website built with Next JS, and styled with Tailwind CSS, to showcase my work and host my protfolio." />
        <title>NJTD</title>
      </head>
      <body className={`${poppins.variable} antialiased containerBG flex flex-col items-center justify-center`}>
        <div className="pt-8 mt-[20px] relative">
          <Navbar />
        </div>

        <div className="h-fit w-[100vw] max-w-[1600px] flex items-center justify-center">
          {children}
        </div>
      
        <div className="h-fit">
          <Footer />
        </div>
      </body>
    </html>
  );
}
