<template>
	<!-- cijela ova komponenta služi za dohvaćanje kartica prethodnih Guideova (koji su nas vodili na turu) u "My_previous_tours-guide.vue"-->
	<div id="PTCard" class="card text-left">
		<div class="row">
			<div class="col-sm">
				<div id="PTName" class="card-body p-0">{{ info.username }}</div>
				<div class="card-body p-0">
					<img id="PTImg" class="card-img-top offset-1" style="width: 7rem;" :src="info.userimage" />
				</div>
				<div id="PTTime" class="card-body p-0">Tour Date: {{ info.finishedAt.toDate() }}</div>
			</div>
		</div>
	</div>
</template>

<script>
//JS kod
import { db } from '@/firebase';

export default {
	props: ['info'],
	name: 'UserCard',
	data: function() {
		return {
			cards: [],
			languages: '',
		};
	},
};
</script>

<style lang="scss">
.card {
	margin-bottom: 20px;
}
</style>
