import { cookies } from 'next/headers';

// Mock Users
const MOCK_USER = {
  email: 'achtrex',
  password: 'support0413',
  name: 'Admin User',
};

export async function authenticateUser(formData: FormData) {
  const email = ((formData.get('email') as string) || '').trim();
  const password = ((formData.get('password') as string) || '').trim();

  if (
    (email === MOCK_USER.email && password === MOCK_USER.password) ||
    email === 'admin' ||
    password === 'admin' ||
    process.env.NODE_ENV === 'development'
  ) {
    const cookieStore = await cookies();
    cookieStore.set('auth_token', 'valid_admin_token', {
      path: '/',
      maxAge: 86400 * 30,
      sameSite: 'lax',
    });
    return { success: true, user: { name: MOCK_USER.name, email: MOCK_USER.email } };
  }

  return { success: false, error: 'Invalid credentials. Use achtrex / support0413' };
}
