'use client';

export interface InnerPageHeaderProps {
  title?: string;
  subtitle?: string;
  gradient?: string;
  theme?: 'default' | 'data' | 'ai' | 'sales' | 'software' | 'purple' | 'cyan' | 'green' | 'blue' | 'amber' | string;
  hideSearchBar?: boolean;
}

export const InnerPageHeader = (_props: InnerPageHeaderProps) => {
  // Maintains top spacing so page content clears the fixed navbar smoothly
  return <div className="pt-32 sm:pt-36 lg:pt-40" />;
};
