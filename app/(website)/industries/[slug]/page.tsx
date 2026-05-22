import { Metadata } from 'next';
import IndustryClient from './industry-client';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const title = slug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return {
        title: `${title} Solutions | Achtrex Industries`,
        description: `Automotive data and AI infrastructure solutions for ${title}.`,
    };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <IndustryClient slug={slug} />;
}
