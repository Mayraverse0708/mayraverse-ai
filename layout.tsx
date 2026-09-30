import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"MAYRAVERSE AI",description:"Independent AI Cinema Story & Production Studio"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
