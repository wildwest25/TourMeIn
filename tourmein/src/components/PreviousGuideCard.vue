<template>
	<!-- cijela ova komponenta služi za dohvaćanje kartica prethodnih Guideova (koji su nas vodili na turu) u "My_previous_tours-guide.vue"-->
	<div class="card text-left">
		<div class="row">
			<div class="col-md-auto">
				<div class="card-header">{{ info.guidename }}</div>
				<div class="card-body p-0">
					<img class="card-img-top offset-1" style="width: 7rem;" :src="info.guideimage" />
				</div>
				<div class="card-footer text-muted">Tour Date: {{ info.finishedAt.toDate() }}</div>
			</div>
			<div class="col-sm">
				<div class="card-header">Rated: {{ info.ratedwith }}</div>
				<div class="card-header">Monuments: {{ monuments }}</div>
				<div class="card-body p-0">Languages: {{ languages }}</div>
				<a :href="fb">
					<img src=@/assets/FB_Logo.png style="width: 3rem;"/>
				</a>
				<a :href="tw">
					<img src=@/assets/TW.png style="width: 3rem;" />
				</a>
				<a :href="ins">
					<img src=@/assets/INST.png style="width: 3rem;" />
				</a>
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
			monuments: '',
			languages: '',
			fb: '',
			tw: '',
			ins: '',
		};
	},
	mounted() {
		db.collection('user')
			.doc(this.info.guideID)
			.get()
			.then((doc) => {
				const data = doc.data();

				this.monuments = data.monuments;
				this.languages = data.languages;

				this.fb = data.fblink;
				this.tw = data.twlink;
				this.ins = data.instalink;
			});
	},
};
</script>

<style lang="scss">
.card {
	margin-bottom: 20px;
}
</style>