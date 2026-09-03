'use client';

export interface InnerPageHeaderProps {
  title?: string;
  subtitle?: string;
  gradient?: string;
  theme?: 'default' | 'data' | 'ai' | 'sales' | 'software' | 'purple' | 'cyan' | 'green' | 'blue' | 'amber' | string;
  hideSearchBar?: boolean;
}

export const InnerPageHeader = (_props: InnerPageHeaderProps) => {
  // Completely removed the visual header (title, subtitle, accent line, and schematic diagram)
  // Maintains top spacing so page content clears the fixed navbar smoothly
  return <div className="pt-24 sm:pt-28 lg:pt-32" />;
};
