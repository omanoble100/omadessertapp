import { Red_Hat_Text } from "next/font/google";
import "./globals.css";


const redHatText = Red_Hat_Text ({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
});



export const metadata = {
  title: "Customer Dessert",
  description: "Product list with cart",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className={` ${redHatText.className} bg-[#fcf9f7]`}>{children}</body>
    </html>
  );
}
