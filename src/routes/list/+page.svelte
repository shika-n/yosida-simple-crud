<script lang="ts">
	import { browser } from "$app/environment";
	import FormResultInfo from "$lib/components/formResultInfo.svelte";
	import { Icon, PencilSquare, TableCells, Trash } from "svelte-hero-icons"

	const { data, form } = $props();
</script>

<FormResultInfo form={ form } extraClasses="mb-2"/>
<div class="
	grid
	list-grid
	rounded-md
	overflow-x-scroll
">
	<h3 class="py-2 font-bold text-center bg-sky-800">店舗名</h3>
	<h3 class="py-2 font-bold text-center bg-sky-800">住所</h3>
	<h3 class="py-2 font-bold text-center bg-sky-800">電話番号</h3>
	<h3 class="py-2 font-bold text-center bg-sky-800">責任者</h3>
	<h3 class="py-2 font-bold text-center bg-sky-800">アクション</h3>
	{#each data.result as entry, i}
		{@const lastRowClass = i === data.result.length - 1 ? "last-row" : ""}
		{@const evenClass = i % 2 ? "bg-sky-700/30" : ""}
		<div class={["data-cell", lastRowClass, evenClass]}>{entry.name}</div>
		<div class={["data-cell", lastRowClass, evenClass]}>
			{entry.address}
		</div>
		<div class={["data-cell", lastRowClass, evenClass]}>
			{entry.telephone}
		</div>
		<div class={["data-cell", lastRowClass, evenClass]}>{entry.owner}</div>
		<form method="POST" class={[
			"data-cell flex items-center gap-2 last-col min-w-36",
			lastRowClass, evenClass
		]}>
			<input type="hidden" name="id" value={entry.id}>
			<a href={"/info/" + entry.id} class="icon-button">
				<Icon src={ TableCells } solid class="size-5" />
			</a>
			<a href={"/edit/" + entry.id} class="icon-button">
				<Icon src={ PencilSquare } solid class="size-5" />
			</a>
			<button formaction="?/delete" class="icon-button">
				<Icon src={ Trash } solid class="size-5 text-red-400" />
			</button>
		</form>
	{/each}
</div>
