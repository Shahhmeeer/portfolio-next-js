import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shahmeer Asim | Portfolio",
  description:
    "Welcome to my portfolio website, showcasing the skills and expertise of a dedicated web and Salesforce developer. Explore my project, built with Next.js, to discover a dynamic showcase of my work, including web development and Salesforce solutions. Unlock the potential of digital innovation through my diverse range of projects and accomplishments, and let's connect to explore how I can help you achieve your technology goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
