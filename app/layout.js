import { getAllDocument } from "@/lib/doc";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DocuCraft - A dcumentation website by Protocol",
  description: "A dcumentation website by Protocol",
};

export default function RootLayout({ children }) {
  const allDocuments = getAllDocument();

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="h-full lg:ml-72 xl:ml-80">
          <Header docs={allDocuments} />

          {children}
        </div>
      </body>
    </html>
  );
}
