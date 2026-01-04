'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function addTeamMember(formData: FormData) {
    const name = formData.get('name') as string;
    const role = formData.get('role') as string;
    const bio = formData.get('bio') as string;
    const email = formData.get('email') as string;
    const image = '/team/placeholder-user.jpg'; // Pending real file upload implementation

    await sql`
        INSERT INTO team_members (name, role, bio, email, image)
        VALUES (${name}, ${role}, ${bio}, ${email}, ${image})
    `;

    revalidatePath('/admin/team');
}

export async function deleteTeamMember(id: number) {
    await sql`DELETE FROM team_members WHERE id = ${id}`;
    revalidatePath('/admin/team');
}
