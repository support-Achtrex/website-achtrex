import React from 'react';
import { notFound } from 'next/navigation';
import { portfolioDetails } from '@/data/portfolio-details';
import { PortfolioDetailTemplate } from '@/components/portfolio/portfolio-detail-template';

export default function UseCaseDetailPage({ params }: { params: { slug: string } }) {
    const data = portfolioDetails[params.slug as keyof typeof portfolioDetails];
    
    if (!data) {
        notFound();
    }

    return <PortfolioDetailTemplate data={data} backLink="/#portfolio" />;
}
