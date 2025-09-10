<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();

	let listRouteActive = $state("");
	let registerRouteActive = $state("");

	afterNavigate(() => {
		if (browser) {
			listRouteActive = window.location.pathname
				.startsWith("/list") ? "active" : "";
			registerRouteActive = window.location.pathname
				.startsWith("/register") ? "active" : "";
		}
	})
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex">
	<div class="
		sticky top-0
		px-4 py-2
		bg-sky-900
		min-w-60 h-screen
		flex flex-col gap-2
		shadow-md
	">
		<h1 class="py-2 text-xl font-bold">
			ファミリーレストランチェーン
		</h1>
		<a href="/list" class={[`
			px-4 py-2
			rounded-full
			hover:bg-sky-700 active:bg-black/10
			transition-all
		`, listRouteActive]}>一覧</a>
		<a href="/register" class={[`
			px-4 py-2
			rounded-full
			hover:bg-sky-700 active:bg-black/10
			transition-all
		`, registerRouteActive]}>新規登録</a>
	</div>
	<div class="
		mx-auto my-8
		p-8
		w-6/10
		bg-sky-900
		rounded-3xl
		shadow-xl
	">
		{@render children?.()}
	</div>
</div>
