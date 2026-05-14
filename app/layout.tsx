import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Equity Dilution Calculator — Model Your Startup Funding Rounds",
  description: "Visualize how founder and employee equity gets diluted across multiple funding rounds. Built for startup founders raising Series A-C and employees evaluating equity offers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c26a0154-fb63-4aca-b922-0b89d3fb4150"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
