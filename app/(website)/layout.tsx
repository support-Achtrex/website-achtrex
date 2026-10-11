import { StudioHeader } from '@/components/studio/StudioHeader';
import { StudioFooter } from '@/components/studio/StudioFooter';
import { CustomCursor } from '@/components/studio/CustomCursor';

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white selection:bg-white selection:text-black">
      <CustomCursor />
      <StudioHeader />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <StudioFooter />
    </div>
  );
}
