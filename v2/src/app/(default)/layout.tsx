// components
import { Navbar, Sidebar } from "@/components/layout";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full grid lg:grid-cols-3 gap-y-12">
      {/* static contact area */}
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
      {/* dynamic content area */}
      <div className="lg:col-span-2 p-10 flex flex-col gap-12">
        {/* nav */}
        <Navbar />
        {/* content */}
        {children}
      </div>
    </main>
  );
}
