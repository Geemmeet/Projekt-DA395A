import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

//Context for using UseState functionality for saving recipes globally
import { SavedRecipesProvider } from "@/lib/localstorageFunctionality/savedRecipesContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RECIPE INSPIRATION!",
  description: "The place to find your next favorite recipe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SavedRecipesProvider>{children}</SavedRecipesProvider>
      </body>
    </html>
  );
}
