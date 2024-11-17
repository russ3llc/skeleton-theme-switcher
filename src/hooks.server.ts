import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	let theme = '';
	const cookieTheme = event.cookies.get('theme');
	if (cookieTheme) {
		theme = cookieTheme;
	} else {
		// Default to cerberus
		event.cookies.set('theme', 'cerberus', { path: '/' });
		theme = 'cerberus';
	}
	return await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('data-theme="cerberus"', `data-theme="${theme}"`)
	});
};
