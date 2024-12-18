// styles
import "@/styles/globals.css";

// data
export { metadata } from "@/common/data";

// fonts
import { poppins } from "@/common/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
