import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "dalliances.net",
    description: "Various projects",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
                {children}
            </body>
        </html>
    );
}
