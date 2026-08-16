import React from 'react';
import { notFound } from 'next/navigation';
import { getProjectById, getProjectUpdates } from '@/lib/portal-db';
import AdminProjectDetailClient from './AdminProjectDetailClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Details & Management | Admin Dashboard',
  description: 'Manage member projects, post engineering updates, configure architecture diagrams and deliverables.'
};

export const dynamic = 'force-dynamic';

export default async function AdminProjectDetailPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id: idStr } = await params;
  const id = parseInt(idStr, 10);
  if (isNaN(id)) notFound();

  const project = await getProjectById(id);
  if (!project) notFound();

  const updates = await getProjectUpdates(id);

  return (
    <AdminProjectDetailClient 
      project={project} 
      updates={updates} 
    />
  );
}
