<template>
	<div class="card text-left">
		<div class="row">
			<div class="col-sm">
				<div id="card_text" style="width:50px;">{{ info.name }}</div>
				<div class="card-body p-0">
					<img class="card-img-top offset-1" style="width: 7rem;" :src="info.image" />
				</div>
			</div>
			<div class="col-sm">
				<div id="card_text_Star">
					<img src=@/assets/A_star.png height=30% width=30% />
					<div id="star_text">{{ info.rated }}</div>
				</div>
				<button type="button" id="btRegister" @click="startTouring" class="btn btn-primary">
					<div id="btn_txt">Start touring with this guide</div>
				</button>
			</div>
		</div>
		<div class="row-sm">
			<div id="c_info" class="col-sm">
				<div class="card-body p-0">
					<div id="card_text">Languages: {{ info.lang }}</div>
					<div id="card_text">Monuments I tour: {{ info.monuments }}</div>
					<div id="card_text">Prices: {{ info.prices }}</div>
				</div>
				<div class="card_text" style="margin-left:15px;">
					Hours Avaiable: {{ info.starthour }}:{{ info.startminute }} - {{ info.endhour }}:{{
						info.endminute
					}}
				</div>
			</div>
		</div>
		<div class="row justify-content-between">
			<a :href="info.fblink" style="margin-left:50px;">
				<img src=@/assets/FB_Logo.png style="width: 3rem;"/>
			</a>
			<a :href="info.twlink">
				<img src=@/assets/TW.png style="width: 3rem;"/>
			</a>
			<a :href="info.instalink" style="margin-right:50px; margin-top:10px;">
				<img src=@/assets/INST.png style="width: 2rem;"/>
			</a>
		</div>
	</div>
</template>

<script>
import store from '@/store';
import { db } from '@/firebase';

export default {
	props: ['info'],
	name: 'UserCard',
	data: function() {
		return {
			store,

			byHour: '',
			byMonument: '',
			byRating: '',
			byPrice: '',
			userFullname: '',
		};
	},
	mounted() {
		db.collection('user')
			.where('email', '==', store.currentUser)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					console.log(doc.id, ' => ', doc.data());

					const data = doc.data();

					this.userFullname = data.firstname + ' ' + data.lastname;
				});
				console.log(this.userFullname);
			});
	},
	methods: {
		startTouring() {
			const user = store.currentUser;
			const guide = this.info.email;
			const name = this.userFullname;
			const guidename = this.guideFullname;

			if (store.tourInProgress == null) {
				db.collection('tour')
					.add({
						user: user,
						guide: guide,
						name: name,
						guidename: this.info.name,
						accepted: null,
					})
					.then(() => {
						console.log('spremljeno, doc');
						store.tourInProgress = true;
						alert('Request has been sent!');
					})
					.catch((e) => {
						console.error(e);
					});
			} else {
				alert('There is already pending tour request!');
			}
		},
	},
	computed: {},
	components: {},
};
</script>

<style lang="scss">
.card {
	margin-bottom: 20px;
}
</style>
