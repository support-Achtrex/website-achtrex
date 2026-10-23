import React from 'react';
import { SettingsDB } from '@/lib/local-db';
import { HeroDB } from '@/lib/hero-db';
import { SettingsClient } from './SettingsClient';

export const dynamic = 'force-dynamic';

export default async function SettingsPage() {
  const settings = await SettingsDB.getAsync();
  const heroConfig = await HeroDB.getConfigAsync();

  return (
    <SettingsClient
      initialSettings={settings}
      initialHeroConfig={heroConfig}
    />
  );
}
