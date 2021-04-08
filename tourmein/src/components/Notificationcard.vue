<template>
	<div id="notcard" class="card text-left">
		<div class="row" v-if="store.isGuide === 'true'">
			<div class="col-md-auto" v-if="info.accepted === null">
				<div class="card-body p-0">
					<img
						class="card-img-top offset-1"
						style="width: 1.5rem; margin-bottom:15px; margin-left:70px; position:absolute;"
						src="@/assets/warning.png"
					/>
				</div>
			</div>
			<div class="col-md" v-if="info.accepted === null">
				<div class="card-body p-0">{{ info.name }} wants you up as a guide</div>
				<button type="buttonsuccess" id="successbutton" @click="accept" class="btn btn-primary">
					<img
						class="card-img-top offset-1"
						style="width: 1.2rem; margin-right: 4px;"
						src="@/assets/success.png"
					/>
				</button>
				<button type="buttoncancel" id="cancelbutton" @click="deny" class="btn btn-primary">
					<img
						class="card-img-top offset-1"
						style="width: 1.2rem margin-right: 4px;"
						src="@/assets/alert close.png"
					/>
				</button>
			</div>
			<div class="col-md-auto" v-if="info.accepted === true">
				<div class="card-body p-0">
					<img
						class="card-img-top offset-1"
						style="width: 1.5rem; margin-bottom:15px; margin-left:70px; position:absolute;"
						src="@/assets/success.png"
					/>
				</div>
			</div>
			<div class="col-md" v-if="info.accepted === true">
				<div class="card-body p-0">
					You have accepted {{ info.name }}'s request, you can now exchange messages with him
				</div>
			</div>
			<div class="col-md-auto" v-if="info.accepted === false">
				<div class="card-body p-0">
					<img
						class="card-img-top offset-1"
						style="width: 1.5rem; margin-bottom:15px; margin-left:70px; position:absolute;"
						src="@/assets/error.png"
					/>
				</div>
			</div>
			<div class="col-md" v-if="info.accepted === false">
				<div class="card-body p-0">You have rejected {{ info.name }}'s request</div>
			</div>
		</div>
		<div class="row" v-if="store.isGuide === 'true'">
			<div class="col-md-auto" v-if="info.accepted === true">
				<div class="card-body p-0">
					<img
						class="card-img-top offset-1"
						style="width: 1.5rem; margin-bottom:15px; margin-left:70px; position:absolute;"
						src="@/assets/info.png"
					/>
				</div>
			</div>
			<div class="col-md" v-if="info.accepted === true">
				<div class="card-body p-0">
					After finishing your tour with {{ info.name }}, please click this button to confirm that
					tour has ended
				</div>
				<button type="button" id="button" @click="ended" class="btn btn-primary">
					Confirm
				</button>
			</div>
		</div>
		<!-- odvojeno ovisno dali je guide/user -->
		<div class="row" v-if="store.isGuide === 'false'">
			<div v-if="info.accepted === null">
				<div class="col-md-auto">
					<div class="card-body p-0">
						<img
							class="card-img-top offset-1"
							style="width: 2rem; margin-top:40px; position:absolute;"
							src="@/assets/warning.png"
						/>
					</div>
				</div>
				<div class="col-md">
					<div class="card-body p-0">
						<div style="margin-top:25px; display:inline-block;">
							You asked guide {{ info.guidename }} to take you on a tour. Waiting for an answer.
						</div>
						<button type="button" id="cancel" @click="cancel" class="btn btn-primary">
							<div id="btn">Cancel this tour</div>
						</button>
					</div>
				</div>
			</div>
			<div v-if="info.accepted === true">
				<div class="col-md-auto">
					<div class="card-body p-0">
						<img
							class="card-img-top offset-1"
							style="width: 1.5rem; margin-top:10px; position:absolute;"
							src="@/assets/success.png"
						/>
					</div>
				</div>
				<div class="col-md">
					<div class="card-body p-0">
						Guide {{ info.guidename }} accepted your request. You can now ask each
						other a message from the top of the further agreement.
					</div>
				</div>
			</div>
			<div v-if="info.accepted === false">
				<div class="col-md-auto">
					<div class="card-body p-0">
						<img
							class="card-img-top offset-1"
							style="width: 1.5rem; position:absolute;"
							src="@/assets/error.png"
						/>
					</div>
				</div>
				<div class="col-md">
					<div class="card-body p-0">Guide {{ info.guidename }} turned you down</div>
					<button type="button" id="button" @click="cancel" class="btn btn-primary">
						<div id="btn">Ok</div>
					</button>
				</div>
			</div>
			<div v-if="info.accepted === 'done'">
				<div class="col-md">
					<div class="card-body p-0">
						<img
							class="card-img-top"
							id="bigwarning"
							style="width: 3.5rem; position:absolute;"
							src="@/assets/WarningRed.png"
						/>
					</div>
					<div class="card-body p-0">
						Please rate {{ info.guidename }} before asking for a new guide.
					</div>
					<star-rating v-model="rating"></star-rating>
					<div>Current rating: {{ rating }}</div>
					<button type="button" id="button" @click="rate" class="btn btn-primary">
						<div id="btn">Submit rating</div>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import store from '@/store';
import { db, firebase } from '@/firebase';
import { StarRating } from 'vue-rate-it';

export default {
	components: {
		StarRating,
	},
	props: ['info'],
	name: 'Notifications',
	data: function() {
		return {
			store,
			userFullname: '',
			rating: 3,
		};
	},
	mounted() {
		console.log('user ', this.info.user);
		db.collection('user')
			.where('email', '==', store.currentUser)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					const data = doc.data();

					this.userFullname = data.firstname + ' ' + data.lastname;
				});
			});
	},
	methods: {
		cancel() {
			var jobskill_query = db.collection('tour').where('user', '==', store.currentUser);
			jobskill_query.get().then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					doc.ref.delete();
					store.tourInProgress = null;
				});
				alert('Tour has been canceled or removed!');
				window.location.reload();
			});
		},
		cancelGuide() {
			var cancelG = db.collection('tour').where('guide', '==', store.currentUser);
			cancelG.get().then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					doc.ref.delete();
					store.tourInProgress = null;
				});
				alert('User has been denied!');
				window.location.reload();
			});
		},
		accept() {
			db.collection('tour')
				.where('guide', '==', store.currentUser)
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						console.log(doc.id, ' => ', doc.data());

						const data = doc.data();
						this.id = doc.id;

						if (this.info.name === data.name) {
							db.collection('tour')
								.doc(this.id)
								.update({
									accepted: true,
									guideID: store.guideID,
								})
								.then(() => {
									db.collection('message')
										.doc(new Date() + ' ' + store.currentUser)
										.set({
											guide: store.currentUser,
											user: this.info.user,
											username: this.info.name,
											guidename: this.userFullname,
											createdAt: new Date(),
											guideimage: this.info.guideimage,
											userimage: this.info.userimage,
											text: 'You can now comunicate about the tour.',
											guideID: store.guideID,
										})
										.then(() => {
											console.log('now message created');
										})
										.catch((e) => {
											console.error(e);
										});

									alert(data.name + ' has been accepted!');
									window.location.reload();
								})
								.catch((e) => {
									console.error(e);
								});
						}
					});
				});
		},
		deny() {
			db.collection('tour')
				.where('guide', '==', store.currentUser)
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						console.log(doc.id, ' => ', doc.data());

						const data = doc.data();
						this.id = doc.id;

						console.log(this.info.name, ' => ', data.name);
						if (this.info.name === data.name) {
							db.collection('tour')
								.doc(this.id)
								.update({
									accepted: false,
								})
								.then(() => {
									alert(data.name + ' has been denied!');
									window.location.reload();
								})
								.catch((e) => {
									console.error(e);
								});
						}
					});
				});
		},
		ended() {
			db.collection('tour')
				.where('guide', '==', store.currentUser)
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						const data = doc.data();
						this.id = doc.id;
						console.log(this.info.name, ' => ', data.name);

						if (this.info.name === data.name) {
							db.collection('tour')
								.doc(this.id)
								.update({
									accepted: 'done',
									rated: false,
									finishedAt: new Date(),
								})
								.then(() => {
									alert('Tour with ' + data.name + ' has been completed!');
									window.location.reload();
								})
								.catch((e) => {
									console.error(e);
								});
						}
					});
				});
		},
		rate() {
			console.log('guide id: ' + this.info.guideID);
			db.collection('tour')
				.where('guide', '==', this.info.guide)
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						console.log('guide id: ' + this.info.guideID);
						const data = doc.data();
						this.id = doc.id;
						if (this.info.name === data.name) {
							db.collection('tour')
								.doc(this.id)
								.update({
									accepted: 'rated',
									rated: true,
									ratedwith: this.rating,
								});
							db.collection('user')
								.doc(this.info.guideID)
								.update({
									rated: firebase.firestore.FieldValue.increment(this.rating), //povecaj rated za odabrani rating
									ratedusers: firebase.firestore.FieldValue.increment(1), // povecaj broj usera koji su rateali za +1
								})
								.then((querySnapshot) => {
									alert('You rated ' + this.info.guidename + ' with: ' + this.rating);
									window.location.reload();
								});
						}
					});
				});
		},
	},
};
</script>

<style lang="scss">
.card {
	margin-bottom: 20px;
}
</style>
