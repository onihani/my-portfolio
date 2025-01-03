// imports
import { GoogleAnalytics } from "@next/third-parties/google";

// styles
import "@/styles/globals.css";

// components
import { Navbar, Footer } from "@/components/layout";

// data
export { metadata } from "@/common/data";

// fonts
import { poppins, bricolageGrotesque } from "@/common/fonts";

if (!process.env.FIREBASE_MEASUREMENT_ID) {
  throw new Error("FIREBASE_MEASUREMENT_ID is not defined");
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        <div className="relative min-h-screen h-min w-auto pt-40 flex flex-col flex-nowrap overflow-visible">
          <div className="contents">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
      <GoogleAnalytics gaId={process.env.FIREBASE_MEASUREMENT_ID!} />
    </html>
  );
}
