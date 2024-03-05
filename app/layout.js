import { Inter } from "next/font/google";
import "./globals.css";
import snakedrwaw from "../public/snakedraw.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "snakedraw",
  description: "SnakeDraw - Replica of Excalidraw",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
