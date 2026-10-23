'use server';

import { revalidatePath } from 'next/cache';
import { SettingsDB, SiteSettings } from '@/lib/local-db';
import { HeroDB } from '@/lib/hero-db';

export async function updateSettingsAction(formData: FormData) {
  try {
    const siteName = (formData.get('siteName') as string) || '';
    const contactEmail = (formData.get('contactEmail') as string) || '';
    const maintenanceModeVal = formData.get('maintenanceMode');
    const maintenanceMode = maintenanceModeVal === 'on' || maintenanceModeVal === 'true' || maintenanceModeVal === '1';

    const current = SettingsDB.get();

    const updated = await SettingsDB.update({
      siteName: siteName.trim() || current.siteName,
      contactEmail: contactEmail.trim() || current.contactEmail,
      maintenanceMode,
    });

    revalidatePath('/');
    revalidatePath('/admin/settings');

    return { success: true, settings: updated };
  } catch (err: any) {
    console.error('Error in updateSettingsAction:', err);
    return { success: false, error: err.message || 'Failed to update settings' };
  }
}

export async function toggleHeroModeAction() {
  try {
    const current = HeroDB.getConfig();
    const newMode = current.mode === 'single' ? 'slider' : 'single';
    HeroDB.setMode(newMode);

    revalidatePath('/');
    revalidatePath('/admin');
    revalidatePath('/admin/hero');
    revalidatePath('/admin/settings');

    return { success: true, mode: newMode };
  } catch (err: any) {
    console.error('Error toggling hero mode:', err);
    return { success: false, error: err.message || 'Failed to toggle mode' };
  }
}
