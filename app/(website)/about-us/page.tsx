import { CTASection } from "@/components/cta";
import { AboutHero } from "@/components/about-page/about-hero";
import { TeamSection } from "@/components/about-page/team-section";
import { createClient } from "@/utilities/supabase/server";

export default async function AboutPage() {
    const supabase = await createClient();
    
    const { data: teamMembers } = await supabase
        .from('teams')
        .select('*')
        .order('created_at', { ascending: true });

    return (
        <main className="bg-gray-50">
            <div className="pt-20">
                <AboutHero />
                <TeamSection teamMembers={teamMembers || []} />
                <CTASection />
            </div>
        </main>
    );
}

