import React from 'react';
import { Metadata } from 'next';
import { CalendlyBookingView } from '@/components/booking/calendly-view';

export const metadata: Metadata = {
  title: 'Book a Meeting | Achtrex Automotive Technology',
  description: 'Schedule a 30-minute technical consultation with an Achtrex solutions architect. Explore bespoke software builds, AI diagnostics, and custom platform integration.',
  openGraph: {
    title: 'Book a Meeting | Achtrex Automotive Technology',
    description: 'Schedule a 30-minute technical consultation with an Achtrex solutions architect.',
    images: ['/images/solutions/auto_consultation.jpg'],
  }
};

export default function BookAMeetingPage() {
  return <CalendlyBookingView />;
}
