import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/sidebar";
import AdminTopbar from "@/components/admin/topbar";
import { createClient } from "@/utilities/supabase/server";
import { ToastProvider } from "@/components/ui/toast";

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    return (
        <ToastProvider>
            <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-primary/20 selection:text-primary">
                <AdminSidebar />

                <main className="ml-64 p-8 min-h-screen">
                    <div className="max-w-7xl mx-auto">
                        <AdminTopbar />

                        {children}
                    </div>
                </main>
            </div>
        </ToastProvider>
    );
}
