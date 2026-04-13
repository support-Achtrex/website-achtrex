
// Mock Users (Replace with Env Variables in Production)
const MOCK_USER = {
    email: 'achtrex',
    password: 'support0413',
    name: 'Admin User'
};

export async function authenticateUser(formData: FormData) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (email === MOCK_USER.email && password === MOCK_USER.password) {
        // In a real app, you would set an HTTP-only cookie here
        // For this simple demo, we will just return success 
        // and let the client handle redirection (or set a cookie via server action)
        return { success: true, user: { name: MOCK_USER.name, email: MOCK_USER.email } };
    }

    return { success: false, error: 'Invalid credentials' };
}
