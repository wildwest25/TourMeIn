<template>
	<div class="card text-left">
		<div class="row">
			<div class="col-md-auto">
				<div class="card-body p-0">
					<img :src="info.image" />
					<img class="card-img-top offset-1" style="width: 3rem;" src="@/assets/Rectangle_2.png" />
				</div>
			</div>
			<div class="col-sm">
				<div class="card-body p-0">{{ info.description }}: {{ info.text }}</div>
				<div class="card-footer text-muted">{{ info.time }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['info'],
	name: 'UserMessage',
};
</script>

<style lang="scss">
.card {
	margin-bottom: 20px;
}
</style>
