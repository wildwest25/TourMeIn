<template>
	<div class="card text-left">
		<div class="row">
			<div class="col-md-auto">
				<div class="card-header">{{ info.description }}</div>
				<div class="card-body p-0">
					<img :src="info.image" />
					<img class="card-img-top offset-1" style="width: 7rem;" src="@/assets/Rectangle_2.png" />
				</div>
				<div class="card-footer text-muted">Tour Date: {{ info.time }} , {{info.days}}</div>
			</div>
			<div class="col-sm">
				<!--<div class="card-header">Rated: {{ info.rated }}</div>-->
				<div class="card-header">Monuments: {{ info.monuments }}</div>
				<div class="card-body p-0">Languages: {{ info.languages }}</div>
				<img class="card-img-top offset-1" style="width: 3rem;" src="@/assets/FB_Logo.png" />
				<img class="card-img-top offset-1" style="width: 3rem;" src="@/assets/TW.png" />
				<img class="card-img-top offset-1" style="width: 3rem;" src="@/assets/INST.png" />
			</div>
		</div>
	</div>
</template>

<script>
//JS kod
export default {
	props: ['info'],
	name: 'UserCard',
};
</script>

<style lang="scss">
.card {
	margin-bottom: 20px;
}
</style>
