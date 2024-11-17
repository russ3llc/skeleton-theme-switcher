export async function load({cookies}) {
  const theme = cookies.get('theme') ?? 'cerberus'
	return {
    theme: theme
	};
}