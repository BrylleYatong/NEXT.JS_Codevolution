import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // title: "Create Next App",
  title: {
    absolute:"",
    default:"Next.js Tutorial - Codevolution",
    template:"%s | Codevolution",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem"
          }}
        >
          <p>Header</p>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem"
          }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
