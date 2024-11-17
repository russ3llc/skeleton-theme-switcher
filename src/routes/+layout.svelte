<script lang="ts">
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import '../app.css';
	let { data, children } = $props();
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<!-- Header -->
	<header class="p-4"><ThemeSwitcher currentTheme={data.theme} /></header>
	<!-- Main -->
	<main class="space-y-4 p-4">
		{@render children()}
	</main>
	<!-- Footer -->
	<footer class="p-4"></footer>
</div>
