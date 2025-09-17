<script lang="ts">
	const { data } = $props();

	const info = data.result!.length > 0 ? data.result![0] : null;

	let isBarrierFree = Boolean(info?.is_barrier_free);
	let isParkingAvalable = Boolean(info?.is_parking_available);
</script>

{#if info}
	<form method="POST" class="register-grid grid gap-2 items-center">
		<input type="hidden" name="id" value={info.id}>

		<label for="name">店舗名</label>
		<input type="text" id="name" name="name" value={info.name}
			class="col-span-4"
		>

		<label for="address">住所</label>
		<input type="text" id="address" name="address" value={info.address}
			class="col-span-4"
		>

		<label for="telephone">電話番号</label>
		<input type="text" id="telephone" name="telephone"
			value={info.telephone}
			class="col-span-4"
		>

		<label for="owner">責任者</label>
		<input type="text" id="owner" name="owner" value={info.owner}
			class="col-span-4"
		>

		<label for="area">面積</label>
		<input type="number" id="area" name="area" min="0" value={info.area}
			class="col-span-2"
		>

		<label for="capacity" class="text-center">席数</label>
		<input type="number" id="capacity" name="capacity" min="0"
			value={info.capacity}
		>

		<label for="barrier_free_yes">バリアフリー</label>
		<div class="flex items-center">
			<input type="radio" id="barrier_free_yes" name="barrier_free"
				value={true}
				bind:group={isBarrierFree}
			>
			<label for="barrier_free_yes" class="px-2">有</label>
		</div>
		<div class="flex items-center">
			<input type="radio" id="barrier_free_no" name="barrier_free"
				value={false}
				bind:group={isBarrierFree}
			>
			<label for="barrier_free_no" class="px-2">無</label>
		</div>

		<span class="col-span-2"></span>
		
		<label for="parking_available_yes">駐車場</label>
		<div class="flex items-center">
			<input type="radio" id="parking_available_yes" name="parking_available"
				value={true}
				bind:group={isParkingAvalable}
			>
			<label for="parking_available_yes" class="px-2">有</label>
		</div>
		<div class="flex items-center">
			<input type="radio" id="parking_available_no" name="parking_available"
				value={false}
				bind:group={isParkingAvalable}
			>
			<label for="parking_available_no" class="px-2">無</label>
		</div>

		<label for="parking_capacity" class="text-center">台数</label>
		<input type="number" id="parking_capacity" name="parking_capacity"
			min="0"
			value={info.parking_capacity}
		>

		<label for="opening_time">営業時間</label>
		<input type="time" id="opening_time" name="opening_time"
			value={info.open_time}
			class="col-span-2"
		>

		<label for="closing_time" class="text-center">~</label>
		<input type="time" id="closing_time" name="closing_time"
			value={info.close_time}
		>

		<button class="
			py-2
			rounded-md
			bg-orange-600 hover:bg-orange-500 active:bg-orange-700
			transition-all
			col-span-5
		">保存</button>
	</form>
{:else}
	データ見つけなかった
{/if}

