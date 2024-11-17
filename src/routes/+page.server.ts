
export const actions = {
	setTheme: async ({ cookies, request }) => {
		const formData = await request.formData();
		const theme = formData.get('theme')?.toString() ?? 'cerberus';
		cookies.set('theme', theme, { path: '/' });
		return { theme };
	}
};