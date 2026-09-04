import React from 'react';
import { Metadata } from 'next';
import { CalendlyBookingView } from '@/components/booking/calendly-view';

export const metadata: Metadata = {
  title: 'Book a Demo | Achtrex Automotive Technology',
  description: 'Schedule a live demonstration of Achtrex automotive data infrastructure, VIN APIs, and AI platform solutions.',
  openGraph: {
    title: 'Book a Demo | Achtrex Automotive Technology',
    description: 'Schedule a live demonstration of Achtrex automotive data infrastructure.',
    images: ['/projects/aaia_ui_v2.png'],
  }
};

export default function BookADemoPage() {
  return <CalendlyBookingView />;
}
