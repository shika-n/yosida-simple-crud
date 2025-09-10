<form method="POST" class="grid grid-cols-6 gap-2 items-center">
	<label for="name">店舗名</label>
	<input type="text" id="name" name="name" class="col-span-5">

	<label for="address">住所</label>
	<input type="text" id="address" name="address" class="col-span-5">

	<label for="telephone">電話番号</label>
	<input type="text" id="telephone" name="telephone" class="col-span-5">

	<label for="owner">責任者</label>
	<input type="text" id="owner" name="owner" class="col-span-5">

	<label for="area">面積</label>
	<input type="number" id="area" name="area" class="col-span-2">

	<label for="capacity">席数</label>
	<input type="number" id="capacity" name="capacity" class="col-span-2">

	<label for="barrier_free_yes">バリアフリー</label>
	<div class="flex items-center">
		<input type="radio" id="barrier_free_yes" name="barrier_free"
			value="true">
		<label for="barrier_free_yes">有</label>
	</div>
	<div class="flex items-center">
		<input type="radio" id="barrier_free_no" name="barrier_free"
			value="false">
		<label for="barrier_free_no">無</label>
	</div>

	<span class="col-span-3"></span>
	
	<label for="parking_available_yes">駐車場</label>
	<div class="flex items-center">
		<input type="radio" id="parking_available_yes" name="parking_available"
			value="true">
		<label for="parking_available_yes">有</label>
	</div>
	<div class="flex items-center">
		<input type="radio" id="parking_available_no" name="parking_available"
			value="false">
		<label for="parking_available_no">無</label>
	</div>

	<label for="parking_capacity">台数</label>
	<input type="number" id="parking_capacity" name="parking_capacity"
		class="col-span-2"
	>

	<label for="opening_time">営業時間</label>
	<input type="time" id="opening_time" name="opening_time" class="col-span-2">

	<label for="closing_time text-center">~</label>
	<input type="time" id="closing_time" name="closing_time" class="col-span-2">

	<button class="
		py-2
		rounded-md
		bg-orange-600 hover:bg-orange-500
		transition-all
		col-span-6
	">登録</button>
</form>
