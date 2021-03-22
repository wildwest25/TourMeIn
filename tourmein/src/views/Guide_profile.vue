<template>
	<div class="guide_profile">
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

					<!--<img src="@/assets/img-thumnail.svg" />-->
					<div class="form-group">
						<label for="nameSurname">{{ firstname }} {{ lastname }}</label
						><br />
						<label for="DOB">{{ registered }}</label
						><br />
						<label for="rating">
						<img src=@/assets/A_star.png
						height=15%
						width=15%
						/>
						4.6</label>
					</div>
				</div>
				<div class="col-fluid">
					<form>
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
							<label for="exampleMonuments">Monuments I Tour</label>
							<input
								type="monuments"
								class="form-control"
								id="exampleMonuments"
								placeholder="Amphiteater, Triumphal Arch.."
								v-model="newMonuments"
							/>
						</div>
						<form name="someForm" method="post" action="/someAction.do" class="form-inline">
							<div class="input-group">
								<div class="form-group">
									<label for="startDate"> Hours Avaiable: </label>
									<div>
										<input
											type="number"
											name="startHour"
											id="startHour"
											style="width: 60px"
											class="form-control"
											placeholder="00"
											step="1"
											maxlength="2"
											v-model="newStartHour"
										/>
									</div>
								</div>
								<div class="form-group">
									<label for="endDate"> : </label>
									<div>
										<input
											type="number"
											name="startMinute"
											id="startMinute"
											style="width: 60px"
											class="form-control"
											placeholder="00"
											step="1"
											maxlength="2"
											v-model="newStartMinute"
										/>
									</div>
								</div>
								<div class="form-group">
									<label for="endHour"> - </label>
									<div>
										<input
											type="number"
											name="endHour"
											id="endHour"
											style="width: 60px"
											class="form-control"
											placeholder="00"
											step="1"
											maxlength="2"
											v-model="newEndHour"
										/>
									</div>
								</div>
								<div class="form-group">
									<label for="endHour"> : </label>
									<div>
										<input
											type="number"
											name="endMinute"
											id="endMinute"
											style="width: 60px"
											class="form-control"
											placeholder="00"
											step="1"
											maxlength="2"
											v-model="newEndMinute"
										/>
									</div>
								</div>
							</div>
						</form>
						<form name="someForm" method="post" action="/someAction.do" class="form-inline">
							<div class="input-group">
								<div class="form-group">
									<label for="startDate"> Days Avaiable: </label>
									<div>
										<input
											type="checkbox"
											name="mon"
											id="monday"
											style="width: 20px"
											class="form-control"
											v-model="newMonday"
										/>
									</div>
								</div>
								<div class="form-group">
									<label for="endDate"> Mon </label>
									<div>
										<input
											type="checkbox"
											name="tue"
											id="tuesday"
											style="width: 20px"
											class="form-control"
											v-model="newTuesday"
										/>
									</div>
								</div>
								<div class="form-group">
									<label for="endHour"> Tue</label>
									<div>
										<input
											type="checkbox"
											name="wed"
											id="wednesday"
											style="width: 20px"
											class="form-control"
											v-model="newWednesday"
										/>
									</div>
								</div>
								<div class="form-group">
									<label for="endHour"> Wed </label>
									<div>
										<input
											type="checkbox"
											name="thu"
											id="thursday"
											style="width: 20px"
											class="form-control"
											v-model="newThursday"
										/>
									</div>
								</div>
								<div class="form-group">
									<label for="endHour"> Thu </label>
									<div>
										<input
											type="checkbox"
											name="fri"
											id="friday"
											style="width: 20px"
											class="form-control"
											v-model="newFriday"
										/>
									</div>
								</div>
								<div class="form-group">
									<label for="endHour"> Fri </label>
									<div>
										<input
											type="checkbox"
											name="sat"
											id="saturday"
											style="width: 20px"
											class="form-control"
											v-model="newSaturday"
										/>
									</div>
								</div>
								<div class="form-group">
									<label for="endHour"> Sat </label>
									<div>
										<input
											type="checkbox"
											name="sun"
											id="sunday"
											style="width: 20px"
											class="form-control"
											v-model="newSunday"
										/>
									</div>
								</div>
								<div class="form-group">
									<label for="endHour"> Sun </label>
								</div>
							</div>
						</form>
						<form name="someForm" method="post" action="/someAction.do" class="form-inline">
							<div class="input-group">
								<div class="form-group">
									<label for="pricing"> Pricing: </label>
									<div>
										<input
											type="checkbox"
											name="perHour"
											id="perHour"
											style="width: 20px"
											class="form-control"
											v-model="newperHour"
										/>
									</div>
								</div>
								<div class="form-group">
									<label for="perHour"> Per Hour </label>
									<div>
										<input
											type="checkbox"
											name="perLandmark"
											id="perLandmark"
											style="width: 20px"
											class="form-control"
											v-model="newperLandmark"
										/>
									</div>
								</div>
								<div class="form-group">
									<label for="perLandmark"> Per Landmark </label>
								</div>
							</div>
						</form>
						<!--<button type="submit" class="btn btn-primary">Register</button> save? -->
					</form>
					<form name="someForm" method="post" action="/someAction.do" class="form-inline">
						<div class="input-group">
							<div class="form-group">
								<label for="costPerHour"> Cost Per Hour: </label>
								<div>
									<input
										type="text"
										name="costPerHour"
										id="costPerHour"
										style="width: 55px"
										class="form-control"
										placeholder="---"
										maxlength="3"
										v-model="newcostPerHour"
									/>
								</div>
							</div>
							<div class="form-group">
								<label for="costPerLandmark"> Cost Per Landmark: </label>
								<div>
									<input
										type="text"
										name="costPerLandmark"
										id="costPerLandmark"
										style="width: 55px"
										class="form-control"
										placeholder="---"
										maxlength="3"
										v-model="newcostPerLandmark"
									/>
								</div>
							</div>
							<div class="form-group">
								<div class="form-group">
									<select class="form-control" id="currency" v-model="newCurrency">
										<option selected>€</option>
										<option>£</option>
										<option>$</option>
										<option>¥</option>
									</select>
								</div>
							</div>
						</div>
					</form>
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
			<form name="someForm" method="post" action="/someAction.do" class="form-inline">
				<div class="input-group">
					<div style="width: 370px;" class="form-group">
						
						<div><img src=@/assets/FB_Logo.png
						height=100%
						width=12%
						/>
							<input
								type="text"
								name="fb"
								id="facebookLink"
								style="width: 300px"
								class="form-control"
								placeholder="Facebook Link"
							/>
						</div>
					</div>
					<div style="width: 370px;" class="form-group">
						<label></label>
						<div>
								<img src=@/assets/TW.png
						height=100%
						width=12%
						/>
						<input
								type="text"
								name="tw"
								id="twitterLink"
								style="width: 300px"
								class="form-control"
								placeholder="Twitter Link"
							/>
						</div>
					</div>
					<div style="width: 370px;" class="form-group">
						<label></label>
						<img src=@/assets/INST.png
						height=60%
						width=10%
						/>
						<div>
							<input
								type="text"
								name="insta"
								id="instagramLink"
								style="width: 300px"
								class="form-control"
								placeholder="Instagram Link"
							/>
						</div>
					</div>
				</div>
			</form>
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
			newLanguages: null,
			newMonuments: '',
			newStartHour: '',
			newStartMinute: '',
			newEndHour: '',
			newEndMinute: '',

			newMonday: 'false',
			newTuesday: 'false',
			newWednesday: 'false',
			newThursday: 'false',
			newFriday: 'false',
			newSaturday: 'false',
			newSunday: 'false',

			newperHour: 'false',
			newperLandmark: 'false',
			newcostPerHour: '',
			newcostPerLandmark: '',
			newCurrency: '',
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
						this.newMonuments = data.monuments;
						this.newStartHour = data.starthour;
						this.newStartMinute = data.startminute;
						this.newEndHour = data.endhour;
						this.newEndMinute = data.endminute;

						this.newMonday = data.monday;
						this.newTuesday = data.tuesday;
						this.newWednesday = data.wednesday;
						this.newThursday = data.thursday;
						this.newFriday = data.friday;
						this.newSaturday = data.saturday;
						this.newSunday = data.sunday;

						this.newperHour = data.perhour;
						this.newperLandmark = data.perlandmark;
						this.newcostPerHour = data.costhour;
						this.newcostPerLandmark = data.costlandmark;
						this.newCurrency = data.currency;
						this.newaboutMe = data.aboutme;

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
			const monuments = this.newMonuments;
			const starthour = this.newStartHour;
			const startminute = this.newStartMinute;
			const endhour = this.newEndHour;
			const endminute = this.newEndMinute;

			const monday = this.newMonday;
			const tuesday = this.newTuesday;
			const wednesday = this.newWednesday;
			const thursday = this.newThursday;
			const friday = this.newFriday;
			const saturday = this.newSaturday;
			const sunday = this.newSunday;

			const perhour = this.newperHour;
			const perlandmark = this.newperLandmark;
			const costhour = this.newcostPerHour;
			const costlandmark = this.newcostPerLandmark;
			const currency = this.newCurrency;
			const aboutme = this.newaboutMe;

			db.collection('user')
				.doc(this.id)
				.update({
					phone: phone,
					languages: languages,
					monuments: monuments,
					starthour: starthour,
					startminute: startminute,
					endhour: endhour,
					endminute: endminute,

					monday: monday,
					tuesday: tuesday,
					wednesday: wednesday,
					thursday: thursday,
					friday: friday,
					saturday: saturday,
					sunday: sunday,

					perhour: perhour,
					perlandmark: perlandmark,
					costhour: costhour,
					costlandmark: costlandmark,
					currency: currency,
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
