<script lang="ts">
	import { browser } from "$app/environment";
	import FormResultInfo from "$lib/components/formResultInfo.svelte";

	const { form } = $props();

	function addParkingInputListener(parkingCapacityInput: HTMLInputElement) {
		document.querySelector("#parking_available_yes")?.addEventListener(
			"click",
			() => {
				parkingCapacityInput.disabled = false;
			}
		);
		document.querySelector("#parking_available_no")?.addEventListener(
			"click",
			() => {
				parkingCapacityInput.disabled = true;
			}
		);
	}

	if (browser) {
		const parkingCapacityInput: HTMLInputElement | null = document
			.querySelector("#parking_capacity");

		if (parkingCapacityInput) {
			addParkingInputListener(parkingCapacityInput);
		}
	}
</script>

<form method="POST" class="register-grid grid gap-2 items-center">
	<FormResultInfo form={form} extraClasses="col-span-5" />
	<label for="name">店舗名</label>
	<input type="text" id="name" name="name" class="col-span-4">

	<label for="address">住所</label>
	<input type="text" id="address" name="address" class="col-span-4">

	<label for="telephone">電話番号</label>
	<input type="text" id="telephone" name="telephone" class="col-span-4">

	<label for="owner">責任者</label>
	<input type="text" id="owner" name="owner" class="col-span-4">

	<label for="area">面積</label>
	<input type="number" id="area" name="area" min="0" value="0"
		class="col-span-2"
	>

	<label for="capacity" class="text-center">席数</label>
	<input type="number" id="capacity" name="capacity" min="0" value="0">

	<label for="barrier_free_yes">バリアフリー</label>
	<div class="flex items-center">
		<input type="radio" id="barrier_free_yes" name="barrier_free"
			value={true}
		>
		<label for="barrier_free_yes" class="px-2">有</label>
	</div>
	<div class="flex items-center">
		<input type="radio" id="barrier_free_no" name="barrier_free"
			value={false} checked
		>
		<label for="barrier_free_no" class="px-2">無</label>
	</div>

	<span class="col-span-2"></span>
	
	<label for="parking_available_yes">駐車場</label>
	<div class="flex items-center">
		<input type="radio" id="parking_available_yes" name="parking_available"
			value={true} checked
		>
		<label for="parking_available_yes" class="px-2">有</label>
	</div>
	<div class="flex items-center">
		<input type="radio" id="parking_available_no" name="parking_available"
			value={false}>
		<label for="parking_available_no" class="px-2">無</label>
	</div>

	<label for="parking_capacity" class="text-center">台数</label>
	<input type="number" id="parking_capacity" name="parking_capacity" min="0"
		value="0"
	>

	<label for="opening_time">営業時間</label>
	<input type="time" id="opening_time" name="opening_time" value="00:00"
		class="col-span-2"
	>

	<label for="closing_time" class="text-center">~</label>
	<input type="time" id="closing_time" name="closing_time" value="00:00">

	<button class="
		py-2
		rounded-md
		bg-orange-600 hover:bg-orange-500 active:bg-orange-700
		transition-all
		col-span-5
	">登録</button>
</form>
