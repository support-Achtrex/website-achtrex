import { Metadata } from 'next';
import { BookMeetingClient } from './BookMeetingClient';

export const metadata: Metadata = {
  title: 'Book a Strategic Meeting | Achtrex Studio',
  description: 'Schedule a direct strategic session or technical architecture briefing with Achtrex creative and technology directors.',
  alternates: {
    canonical: 'https://achtrex.com/book-a-meeting',
  },
};

export default function BookAMeetingPage() {
  return <BookMeetingClient />;
}
