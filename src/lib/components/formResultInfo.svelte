<script lang="ts">
	import { CheckCircle, Icon, XCircle } from "svelte-hero-icons";

	const { form, extraClasses = "" } = $props();

	const errorMessageClass = "bg-rose-400 border-rose-600";
	const successMessageClass = "bg-emerald-400 border-emerald-600";
</script>


{#if form?.message}
<span class={[`
	px-2
	py-2
	flex gap-1 items-center
	rounded-xl
	border-2
`,
	form.error ? errorMessageClass : successMessageClass,
	extraClasses,
]}>
	{#if form.error}
		<Icon src={ XCircle } solid size="24" />
	{:else}
		<Icon src={ CheckCircle } solid size="24" />
	{/if}
	{ form.message }
</span>
{/if}
