import "./globals.css";
import { Varela_Round } from "next/font/google";

const varelaRound = Varela_Round({
  subsets: ["hebrew", "latin"],
  weight: "400",
});

export const metadata = {
  title: "Daniel & Ella",
  description: "Daniel & Ella invitation website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={varelaRound.className}>{children}</body>
    </html>
  );
}
