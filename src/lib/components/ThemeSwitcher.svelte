<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

	let theme = $state({theme: ''});

	const themes = [
		'catppuccin',
		'cerberus',
		'concord',
		'crimson',
		'fennec',
		'hamlindigo',
		'legacy',
		'mint',
		'modern',
		'mona',
		'nosh',
		'nouveau',
		'pine',
		'reign',
		'rocket',
		'rose',
		'sahara',
		'seafoam',
		'terminus',
		'vintage',
		'vox',
		'wintry'
	];

	let { currentTheme }: { currentTheme: string } = $props();

	$inspect(currentTheme).with(console.trace);

	let form: HTMLFormElement;

	// Set theme client-side
	const setTheme: SubmitFunction = ({ formData }) => {
		const formTheme = formData.get('theme')?.toString();

		if (formTheme) {
			document.body.dataset.theme = formTheme;
			document.body.setAttribute('data-theme', formTheme);
			theme.theme = formTheme;
		}

		// Don't reset dropdown selection on submit
		return async ({ update }) => {
			update({ reset: false });
		};
	};

</script>

<div class="flex items-center justify-end gap-2">
	<div class="input-group grid-cols-[auto_1fr] hover:preset-tonal">
		<form action="/?/setTheme" method="POST" use:enhance={setTheme} bind:this={form}>
			<select
				name="theme"
				class="select"
				bind:value={currentTheme}
				onchange={() => form.requestSubmit()}
			>
				{#each themes as themeOption}
					<option value={themeOption} id={themeOption}>{themeOption}</option>
				{/each}
			</select>
		</form>
	</div>
</div>