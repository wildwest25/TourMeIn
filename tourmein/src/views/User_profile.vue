<template>
	<div class="user_profile">
		<div class="container">
			<div class="row">
				<div class="col-sm">
					<croppa
						v-if="image"
						:width="200"
						:height="200"
						:show-loading="true"
						:initial-image="image"
						:show-remove-button="false"
						v-model="imageReference"
					></croppa>
					<croppa
						v-if="imageisHere === null"
						:width="200"
						:height="200"
						:show-loading="true"
						v-model="imageReference"
					></croppa>
					<croppa
						v-else-if="imageisHere === undefined"
						:width="200"
						:height="200"
						:show-loading="true"
						v-model="imageReference"
					></croppa>
					<a href="#" class="btn btn-primary" @click="addImage()">Save image</a>
					<a href="#" class="btn btn-secondary" @click="removeImage()">Remove image</a>

					<div class="form-group">
						<label for="nameSurname">{{ firstname }} {{ lastname }}</label
						><br />
						<label for="DOB">{{ dob }}</label
						><br />
					</div>
				</div>
				<div class="col-fluid">
					<div class="form-group">
						<label for="InputEmail">Email address</label>
						<input
							type="email"
							class="form-control"
							id="InputEmail"
							aria-describedby="emailHelp"
							value=""
						/>
					</div>
					<div class="form-group">
						<label for="exampleContact">Contact Number</label>
						<input
							type="contact"
							class="form-control"
							id="exampleContact"
							placeholder="+385 00000-0000"
							v-model="newPhoneNumber"
						/>
					</div>
					<div class="form-group">
						<label for="exampleInputLanguages">Languages</label>
						<input
							type="languages"
							class="form-control"
							id="exampleInputLanguages"
							placeholder="Croatian, English.."
							v-model="newLanguages"
						/>
					</div>
					<div class="form-group">
						<label for="exampleMonuments">Places I visited</label>
						<input
							type="monuments"
							class="form-control"
							id="exampleMonuments"
							placeholder="Amphiteater, Triumphal Arch.."
							v-model="iVisited"
						/>
					</div>
					<div class="form-group">
						<label for="exampleMonuments">Places I'd like to visit'</label>
						<input
							type="monuments"
							class="form-control"
							id="exampleMonuments"
							placeholder="Amphiteater, Triumphal Arch.."
							v-model="wouldVisit"
						/>
					</div>
					<div class="form-group">
						<label for="exampleFormControlTextarea1">About Me</label>
						<textarea class="form-control" id="aboutMe" rows="10" v-model="newaboutMe"></textarea>
					</div>
					<div class="form-group">
						<button
							type="button"
							id="btRegister"
							@click.prevent="saveNewInfo"
							class="btn btn-primary"
						>
							Save
						</button>
					</div>
				</div>
				<div class="col-sm"></div>
			</div>
		</div>
	</div>
</template>
<script>
// @ is an alias to /src
import store from '@/store';
import { db, storage } from '@/firebase';

export default {
	name: 'Guide_functions',
	data: function() {
		return {
			store,
			image: null,
			imageReference: null,
			imageisHere: '',
			firstname: '',
			lastname: '',
			newPhoneNumber: '',
			id: '',
			registered: '',
			newLanguages: '',

			dob: '',
			iVisited: '',
			wouldVisit: '',
			newaboutMe: '',
		};
	},
	mounted() {
		//* dohvat iz Firebasea
		this.getUserInfo();
	},
	methods: {
		getUserInfo() {
			console.log('firebase dohvat...');

			db.collection('user')
				.where('email', '==', store.currentUser)
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						// doc.data() is never undefined for query doc snapshots
						console.log(doc.id, ' => ', doc.data());

						const data = doc.data();
						//store.isGuide = data.guide;

						this.id = doc.id;

						this.imageisHere = data.image;
						this.firstname = data.firstname;
						this.lastname = data.lastname;
						this.registered = new Date(data.registered_at).toLocaleDateString();

						this.newPhoneNumber = data.phone;
						this.newLanguages = data.languages;

						this.iVisited = data.ivisited;
						this.wouldVisit = data.wouldvisit;
						this.newaboutMe = data.aboutme;
						this.dob = data.dob;

						document.getElementById('InputEmail').value = store.currentUser;
						//document.getElementById('exampleContact').value = data.phone;

						//* Asinkrona funckcija
						var img = new Image();
						img.onload = (e) => {
							this.image = img;
						};
						img.src = data.image;
						console.log('Imageishere', this.imageisHere);
					});
				})
				.catch((error) => {
					console.log('Error getting documents: ', error);
				});
		},
		saveNewInfo() {
			const phone = this.newPhoneNumber;
			const languages = this.newLanguages;

			const ivisited = this.iVisited;
			const wouldvisit = this.wouldVisit;
			const aboutme = this.newaboutMe;

			db.collection('user')
				.doc(this.id)
				.update({
					phone: phone,
					languages: languages,

					ivisited: ivisited,
					wouldvisit: wouldvisit,
					aboutme: aboutme,
				})
				.then(() => {
					console.log('spremljeno, doc');
				})
				.catch((e) => {
					console.error(e);
				});
		},
		addImage() {
			this.imageReference.generateBlob((blobData) => {
				let imageName = 'profile_image/' + store.currentUser + '.png';
				//let imageName = store.currentUser + '_' + Date.now() + '.png';
				console.log(imageName);

				storage
					.ref(imageName)
					.put(blobData)
					.then((result) => {
						// ... uspjesna linija
						console.log(result);
						result.ref
							.getDownloadURL()
							.then((url) => {
								console.log(url);

								db.collection('user')
									.doc(this.id)
									.update({
										image: url,
									})
									.then(() => {
										console.log('spremljena slika, doc');
									})
									.catch((e) => {
										console.error(e);
									});
							})
							.catch((e) => {
								console.error(e);
							});
					})
					.catch((e) => {
						console.error(e);
					});
			});
		},
		removeImage() {
			this.imageReference.remove();

			db.collection('user')
				.doc(this.id)
				.update({
					image: null,
				})
				.then(() => {
					console.log('slika izbrisana, doc');
				});
		},
	},
};
</script>
