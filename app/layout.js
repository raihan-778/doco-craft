import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DocuCraft - A dcumentation website by Protocol",
  description: "A dcumentation website by Protocol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div class="h-full lg:ml-72 xl:ml-80">{children}</div>
      </body>
    </html>
  );
}
