import React from 'react';
import { redirect } from 'next/navigation';
import { getCurrentMember } from '@/lib/portal-auth';
import { getMemberProjects, getProjectUpdates } from '@/lib/portal-db';
import MemberDashboardClient from './MemberDashboardClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Members Dashboard & Project Hub | Achtrex',
  description: 'Manage your active projects, view interactive architecture diagrams, track live updates, and configure scope deliverables.'
};

export const dynamic = 'force-dynamic';

export default async function MemberDashboardPage() {
  const member = await getCurrentMember();
  if (!member) {
    redirect('/portal');
  }

  const projects = await getMemberProjects(member.id);
  
  // Fetch updates for all projects
  let allUpdates: any[] = [];
  for (const proj of projects) {
    const updates = await getProjectUpdates(proj.id);
    allUpdates = [...allUpdates, ...updates];
  }

  return (
    <MemberDashboardClient 
      member={member} 
      projects={projects} 
      updates={allUpdates} 
    />
  );
}
