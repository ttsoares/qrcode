import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "QR Code",
  description: "FrontEnd Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen h-screen">
      <body className={`${outfit.className} w-full h-full bg-light_gray`}>
        {children}
      </body>
    </html>
  );
}
