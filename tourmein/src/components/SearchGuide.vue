<template>
	<div id="card" class="card text-left">
		<div class="row">
			<div class="col-sm">
				<div id="card_text" style="width:70px;">{{ info.name }}</div>
				<div class="card-body p-0">
					<img class="card-img-top offset-1" style="width: 7rem;" :src="info.image" />
				</div>
			</div>
			<div class="col-sm">
				<div id="card_text_Star">
					<img src=@/assets/A_star.png height=30% width=30% />
					<div v-if="info.ratedusers >= 3" id="star_text">{{ info.ratedpreview.toFixed(2) }}</div>
					<div v-else id="star_text" style="font-size:17px;">Not enough ratings.</div>
				</div>
				<button type="button" id="btRegister" @click="startTouring" class="btn btn-primary">
					<div id="btn_txt">Start touring with this guide</div>
				</button>
			</div>
		</div>
		<div class="row-sm">
			<div id="c_info" class="col-sm">
				<div class="card-body p-0">
					<div id="card_text">City: {{ info.city }}</div>
					<div id="card_text">Languages: {{ info.lang }}</div>
					<div id="card_text">Monuments I tour: {{ info.monuments }}</div>
					<div id="card_text" v-if="info.costhour">
						Prices per hour: {{ info.costhour }} {{ info.currency }}
					</div>
					<div id="card_text" v-if="info.costlandmark">
						Price per monument: {{ info.costlandmark }} {{ info.currency }}
					</div>
				</div>
				<div class="card_text" style="margin-left:15px;">
					Hours Avaiable: {{ info.starthour }}:{{ info.startminute }} - {{ info.endhour }}:{{
						info.endminute
					}}
				</div>
				<div class="col-md-auto" v-if="info.monday === true">
					<div class="card-body p-0">
						<img
							class="card-img-top offset-1"
							style="width: 1rem; margin-bottom:15px; margin-left:70px; position:absolute;"
							src="@/assets/success.png"
						/>MON
					</div>
				</div>
				<div class="col-md-auto" v-if="info.tuesday === true">
					<div class="card-body p-0">
						<img
							class="card-img-top offset-1"
							style="width: 1rem; margin-bottom:15px; margin-left:70px; position:absolute;"
							src="@/assets/success.png"
						/>TUE
					</div>
				</div>
				<div class="col-md-auto" v-if="info.wednesday === true">
					<div class="card-body p-0">
						<img
							class="card-img-top offset-1"
							style="width: 1rem; margin-bottom:15px; margin-left:70px; position:absolute;"
							src="@/assets/success.png"
						/>WED
					</div>
				</div>
				<div class="col-md-auto" v-if="info.thursday === true">
					<div class="card-body p-0">
						<img
							class="card-img-top offset-1"
							style="width: 1rem; margin-bottom:15px; margin-left:70px; position:absolute;"
							src="@/assets/success.png"
						/>THU
					</div>
				</div>
				<div class="col-md-auto" v-if="info.friday === true">
					<div class="card-body p-0">
						<img
							class="card-img-top offset-1"
							style="width: 1rem; margin-bottom:15px; margin-left:70px; position:absolute;"
							src="@/assets/success.png"
						/>FRI
					</div>
				</div>
				<div class="col-md-auto" v-if="info.saturday === true">
					<div class="card-body p-0">
						<img
							class="card-img-top offset-1"
							style="width: 1rem; margin-bottom:15px; margin-left:70px; position:absolute;"
							src="@/assets/success.png"
						/>SAT
					</div>
				</div>
				<div class="col-md-auto" v-if="info.sunday === true">
					<div class="card-body p-0">
						<img
							class="card-img-top offset-1"
							style="width: 1rem; margin-bottom:15px; margin-left:70px; position:absolute;"
							src="@/assets/success.png"
						/>SUN
					</div>
				</div>
			</div>
		</div>
		<div class="row justify-content-between">
			<a :href="info.fb" style="margin-left:50px;">
				<img src=@/assets/FB_Logo.png style="width: 3rem;"/>
			</a>
			<a :href="info.tw">
				<img src=@/assets/TW.png style="width: 3rem;"/>
			</a>
			<a :href="info.inst" style="margin-right:50px; margin-top:10px;">
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

			userFullname: '',
			userimage: '',
		};
	},
	mounted() {
		db.collection('user')
			.where('email', '==', store.currentUser)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					const data = doc.data();

					this.userFullname = data.firstname + ' ' + data.lastname;
					this.userimage = data.image;
				});
			});
	},
	methods: {
		startTouring() { //metoda provjerava je li user spremljen vec u nekom touru na Firebaseu, ako je ne da mu da zatrazi novog vodica 
			db.collection('tour')
				.where('user', '==', store.currentUser)
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						const data = doc.data();

						console.log(data.accepted);
						if (data.accepted != 'rated') { //ako je razlicito od rated znaci da je accepted/declined tour i također nam ne da zatraziti novog guidea
							store.tourInProgress = true;
						}
					});
				});

			setTimeout((async) => { //asinkrona funkcija koja čeka vremenski da pogleda da li je user u touru te ukoliko je javlja obavijest, ukoliko nije šalje request
				const user = store.currentUser;
				const guide = this.info.email;
				const name = this.userFullname;
				console.log('tour in progress: ', store.tourInProgress);
				if (store.tourInProgress == null) {
					db.collection('tour')
						.add({
							user: user,
							guide: guide,
							name: name,
							guidename: this.info.name,
							accepted: null,
							guideimage: this.info.image,
							userimage: this.userimage,
						})
						.then(() => {
							console.log('spremljeno, doc');
							alert('Request has been sent!');
							window.location.reload();
						})
						.catch((e) => {
							console.error(e);
						});
				} else {
					alert('There is already pending tour request!');
				}
			}, 500);
		},
	},
};
</script>

<style lang="scss">
.card {
	margin-bottom: 20px;
}
</style>
