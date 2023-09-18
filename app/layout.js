import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata = {
  title: "Password Generator",
  description: "FrontEnd mentor challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen h-screen">
      <body className={`${jetbrains.className} w-full h-full`}>{children}</body>
    </html>
  );
}
