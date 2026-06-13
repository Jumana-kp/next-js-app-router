import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/BootstrapClient";

export const metadata: Metadata = {
  title: "NextCart",
  description: "E-commerce App built with Next.js"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">

        <BootstrapClient/> 
        <Navbar/>

        <main className="flex-grow-1 container py-4">
          {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
}