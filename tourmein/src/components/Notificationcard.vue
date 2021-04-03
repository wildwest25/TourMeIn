<template>
	<div id="notcard" class="card text-left">
		<div class="row" v-if="store.isGuide === 'true'">
			<div class="col-md-auto" v-if="info.accepted === null">
				<div class="card-body p-0">
					<img
						class="card-img-top offset-1"
						style="width: 2rem; margin-bottom:15px; margin-left:70px; position:absolute;"
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
						style="width: 2rem; margin-bottom:15px; margin-left:70px; position:absolute;"
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
						style="width: 2rem; margin-bottom:15px; margin-left:70px; position:absolute;"
						src="@/assets/error.png"
					/>
				</div>
			</div>
			<div class="col-md" v-if="info.accepted === false">
				<div class="card-body p-0">You have rejected {{ info.name }}'s request</div>
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
							style="width: 2rem; margin-top:10px; position:absolute;"
							src="@/assets/success.png"
						/>
					</div>
				</div>
				<div class="col-md">
					<div class="card-body p-0">
						Guide {{ info.guidename }} Marko Markić accepted your request. You can now ask each
						other a message from the top of the further agreement.
					</div>
				</div>
			</div>
			<div v-if="info.accepted === false">
				<div class="col-md-auto">
					<div class="card-body p-0">
						<img
							class="card-img-top offset-1"
							style="width: 2rem; position:absolute;"
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
		</div>
	</div>
</template>

<script>
import store from '@/store';
import { db } from '@/firebase';

export default {
	props: ['info'],
	name: 'Notifications',
	data: function() {
		return {
			store,
		};
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
								})
								.then(() => {
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
	},
};
</script>

<style lang="scss">
.card {
	margin-bottom: 20px;
}
</style>
