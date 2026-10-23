import { StudioHeader } from '@/components/studio/StudioHeader';
import { StudioFooter } from '@/components/studio/StudioFooter';
import { CustomCursor } from '@/components/studio/CustomCursor';
import { VisitorTracker } from '@/components/analytics/VisitorTracker';
import { SettingsDB } from '@/lib/local-db';
import { MaintenanceScreen } from '@/components/studio/MaintenanceScreen';

export const dynamic = 'force-dynamic';

export default async function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await SettingsDB.getAsync();

  if (settings.maintenanceMode) {
    return (
      <div className="min-h-screen flex flex-col bg-[#000000] text-white selection:bg-white selection:text-black">
        <VisitorTracker />
        <MaintenanceScreen siteName={settings.siteName} contactEmail={settings.contactEmail} />
      </div>
    );
  }

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
