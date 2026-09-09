import React from 'react';
import { Metadata } from 'next';
import { CalendlyBookingView } from '@/components/booking/calendly-view';

export const metadata: Metadata = {
  title: 'Book a Demo | Achtrex Automotive Technology',
  description: 'Schedule a live demonstration of Achtrex bespoke automotive software builds, cognitive AI diagnostics, and enterprise dealership platforms.',
  openGraph: {
    title: 'Book a Demo | Achtrex Automotive Technology',
    description: 'Schedule a live demonstration of Achtrex automotive software and AI solutions.',
    images: ['/images/solutions/auto_software_builds.jpg'],
  }
};

export default function BookADemoPage() {
  return <CalendlyBookingView />;
}
