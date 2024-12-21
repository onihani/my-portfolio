// components
import { Profile } from "@/components/layout";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative w-full h-min flex items-center justify-center flex-nowrap gap-2.5 overflow-visible">
      <div className="max-w-6xl container flex flex-[1_1_0] gap-12">
        <div className="sticky z-1 w-min h-min flex flex-col items-center justify-center flex-nowrap gap-10 overflow-hidden">
          <div className="contents">
            <Profile />
          </div>
        </div>
      </div>
      <div className="p-[84px] flex flex-col gap-12">
        {children}
      </div>
    </main>
  );
}
