<template>
	<div id="notcard" class="card text-left">
		<div class="row" v-if="store.isGuide === 'true'">
			<div class="col-md-auto">
				<div class="card-body p-0">
					<img class="card-img-top offset-1" style="width: 2rem; position:absolute;" src="@/assets/warning.png" />
				</div>
			</div>
			<div class="col-md">
				<div class="card-body p-0">{{ info.name }} wants you up as a guide</div>
			</div>
		</div>
		<!-- odvojeno ovisno dali je guide/user -->
		<div class="row" v-if="store.isGuide === 'false'">
			<div v-if="info.accepted===null">
				<div class="col-md-auto">
					<div class="card-body p-0">
						<img class="card-img-top offset-1" style="width: 2rem; position:absolute;" src="@/assets/warning.png" />
					</div>
				</div>
				<div class="col-md">
					<div class="card-body p-0">
						You asked guide {{ info.guidename }} to take you on a tour. Waiting for an answer.
					</div>
				</div>
			</div>
			<div v-if="info.accepted==='false'">
				<div class="col-md-auto">
					<div class="card-body p-0">
						<img class="card-img-top offset-1" style="width: 2rem; position:absolute;" src="@/assets/error.png" />
					</div>
				</div>
				<div class="col-md">
					<div class="card-body p-0">Guide {{ info.guidename }} turned you down</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import store from '@/store';

export default {
	props: ['info'],
	name: 'Notifications',
	data: function() {
		return {
			store,
		};
	},
};
</script>

<style lang="scss">
.card {
	margin-bottom: 20px;
}
</style>
