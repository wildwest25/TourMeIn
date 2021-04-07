<template>
	<!-- cijela ova komponenta služi za dohvaćanje kartica prethodnih Guideova (koji su nas vodili na turu) u "My_previous_tours-guide.vue"-->
	<div id="PGCard" class="card text-left">
		<div class="row">
			<div class="col-md-auto">
				<div id="PGName" class="card-body p-0">{{ info.guidename }}</div>
				<div class="card-body p-0">
					<img class="card-img-top offset-1" style="width: 8rem; position:relative; bottom: 20px;" :src="info.guideimage" />
				</div>
				<div id="PGTime" class="card-body p-0">Tour Date: {{ info.finishedAt.toDate() }}</div>
			</div>
			<div class="col-sm">
				<div id="PGRated" class="card-body p-0">Rated: {{ info.ratedwith }}</div>
				<div id="PGMon" class="card-body p-0">Monuments: {{ monuments }}</div>
				<div id="PGLang" class="card-body p-0">Languages: {{ languages }}</div>
				<a :href="fb">
                    <img src=@/assets/FB_Logo.png style="width: 3rem; margin:4px; position:relative; right:50px; bottom: 50px;"/>
                </a>
                <a :href="tw">
                    <img src=@/assets/TW.png style="width: 3rem; margin:4px; position:relative;right: 30px; bottom: 50px;" />
                </a>
                <a :href="ins">
                    <img src=@/assets/INST.png style="width: 2rem; margin:4px; position:relative; bottom: 50px;" />
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