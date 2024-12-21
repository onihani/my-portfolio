// styles
import "@/styles/globals.css";

// components
import { Navbar } from "@/components/layout";

// data
export { metadata } from "@/common/data";

// fonts
import { poppins, bricolageGrotesque } from "@/common/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${bricolageGrotesque.variable} antialiased`}>
        <div className="relative min-h-screen h-min w-auto pt-40 flex flex-col flex-nowrap overflow-visible">
          <div className="contents">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
