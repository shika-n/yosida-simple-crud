<script lang="ts">
	const { data } = $props();

	const info = data.result!.length > 0 ? data.result![0] : null;
</script>

<h1 class="mb-4 text-center text-3xl font-bold">店舗情報</h1>
{#if info}
	<div class="info-grid grid grid-cols-5 gap-2">
		<div>店名</div>
		<div class="col-span-4">: { info.name }</div>
		
		<div>住所</div>
		<div class="col-span-4">: { info.address }</div>
		
		<div>電話番号</div>
		<div class="col-span-4">: { info.telephone }</div>
		
		<div>店舗責任者</div>
		<div class="col-span-4">: { info.owner }</div>
		
		<div>面積</div>
		<div class="col-span-4">: { info.area }</div>
		
		<div>席数</div>
		<div class="col-span-4">: { info.capacity }</div>
		
		<div>バリアフリー</div>
		<div class="col-span-4">: { info.is_barrier_free }</div>
		
		<div>駐車所</div>
		<div class="col-span-4">: { info.is_parking_available }</div>
		
		<div>台数</div>
		<div class="col-span-4">: { info.parking_capacity }</div>
		
		<div>営業開始</div>
		<div class="col-span-4">: { info.open_time }</div>
		
		<div>営業終了</div>
		<div class="col-span-4">: { info.close_time }</div>
	</div>
{:else}
	データ見つけませんでした
{/if}
