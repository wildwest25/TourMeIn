<template>
	<div class="card text-left">
		<div class="row">
			<div class="col-sm">
				<div class="card-header">{{ info.name }}</div>
				<div class="card-body p-0">
					<img class="card-img-top offset-1" style="width: 7rem;" :src="info.image" />
				</div>
			</div>
			<div class="col-sm">
				<div class="card-header">
					<img src=@/assets/A_star.png height=15% width=15% /> {{ info.rated }}
				</div>
				<button type="button" id="btRegister" @click="start" class="btn btn-primary">
					Start touring with this guide
				</button>
			</div>
		</div>
		<div class="row-sm">
			<div class="col-sm">
				<div class="card-body p-0">
					<div class="card-header">Languages: {{ info.lang }}</div>
					<div class="card-header">Monuments I tour: {{ info.monuments }}</div>
					<div class="card-header">Prices: {{ info.prices }}</div>
				</div>
				<div class="card-footer text-muted">
					Hours Avaiable: {{ info.starthour }}:{{ info.startminute }} - {{ info.endhour }}:{{
						info.endminute
					}}
				</div>
			</div>
		</div>
		<div class="row justify-content-between">
			<a :href="info.fblink">
				<img src=@/assets/FB_Logo.png style="width: 3rem;"/>
			</a>
			<a :href="info.twlink">
				<img src=@/assets/TW.png style="width: 3rem;"/>
			</a>
			<a :href="info.instalink">
				<img src=@/assets/INST.png style="width: 3rem;"/>
			</a>
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
