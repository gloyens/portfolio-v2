import "./globals.scss";
import { fontClasses } from "@/utils/fonts";

export const metadata = {
  title: "George Gloyens",
  description: "Personal portfolio for George Gloyens, a creative full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontClasses}>
      <body>{children}</body>
    </html>
  );
}
