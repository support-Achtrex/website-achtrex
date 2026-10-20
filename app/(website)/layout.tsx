import { StudioHeader } from '@/components/studio/StudioHeader';
import { StudioFooter } from '@/components/studio/StudioFooter';
import { CustomCursor } from '@/components/studio/CustomCursor';
import { VisitorTracker } from '@/components/analytics/VisitorTracker';

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white selection:bg-white selection:text-black">
      <VisitorTracker />
      <CustomCursor />
      <StudioHeader />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <StudioFooter />
    </div>
  );
}
