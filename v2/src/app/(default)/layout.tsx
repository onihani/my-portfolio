// components
import { Profile } from "@/components/layout";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative w-full h-min flex items-center justify-center flex-nowrap gap-2.5 overflow-visible">
      <div className="max-w-7xl container flex flex-[1_1_0] gap-12">
        <div className="sticky top-10 z-1 w-min h-min flex flex-col items-center justify-center flex-nowrap gap-10 overflow-hidden">
          <div className="contents">
            <Profile />
          </div>
        </div>
        <div className="relative h-min flex flex-col flex-[1_1_0] items-center justify-center flex-nowrap overflow-visible">
          {children}
        </div>
      </div>
    </main>
  );
}
