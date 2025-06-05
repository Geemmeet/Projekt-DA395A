import { Geist, Geist_Mono, Eczar, Fraunces, Londrina_Outline, Londrina_Solid } from "next/font/google";
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

const eczar = Eczar({
  weight: '400',
  subsets: ['latin'],
  variable: '--Eczar'
})

const fraunces = Fraunces({
  weight: '400',
  subsets: ['latin'],
  variable: '--fraunces'
})

const londrina_outline = Londrina_Outline({
  weight: '400',
  subsets: ['latin'],
  variable: '--londrina_outline'
})

const londrina_solid = Londrina_Solid({
  weight: '400',
  subsets: ['latin'],
  variable: '--londrina_solid'
})

export const metadata = {
  title: "RECIPE INSPIRATION!",
  description: "The place to find your next favorite recipe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${eczar.variable} ${fraunces.variable} ${londrina_outline.variable} ${londrina_solid.variable} antialiased`}
      >
        <SavedRecipesProvider>{children}</SavedRecipesProvider>
      </body>
    </html>
  );
}
