import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import GridBackground from "./components/GridBackground";
import Loader from "../components/Loader.js";

const jetbrainsMono = JetBrains_Mono({
 subsets: ["latin"],
 display: "swap",
});

export const metadata = {
 title: "Sharjeel | Portfolio",
 description: "From the frozen north of debug hell, comes one who builds, not destroys.",
};

export default function RootLayout({ children }) {
 return (
  <html lang="en" className="scroll-smooth" suppressHydrationWarning>
   <head>
    <script
     dangerouslySetInnerHTML={{
      __html: `
              if (window.location.pathname === '/') {
                window.history.scrollRestoration = 'manual';
                window.scrollTo(0, 0);
              }
            `,
     }}
    />
   </head>
   <body className={`${jetbrainsMono.className} text-white antialiased`}>
    <GridBackground />
    <Loader />
    <main className="relative">{children}</main>
   </body>
  </html>
 );
}
