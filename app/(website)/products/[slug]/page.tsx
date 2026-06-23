import React from 'react';
import { notFound } from 'next/navigation';
import { portfolioDetails } from '@/data/portfolio-details';
import { PortfolioDetailTemplate } from '@/components/portfolio/portfolio-detail-template';

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
 const resolvedParams = await params;
 const data = portfolioDetails[resolvedParams.slug as keyof typeof portfolioDetails];
 
 if (!data) {
 notFound();
 }

 return <PortfolioDetailTemplate data={data} backLink="/#portfolio" />;
}
