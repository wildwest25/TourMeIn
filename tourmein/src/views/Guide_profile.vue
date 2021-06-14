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
					<!-- croppa je plugin za dodavanje profilne slike vodiča/korisnika i pozicioniranje iste-->
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
					<!-- button za spremanje dodane slike na profil vodiča-->
					<a href="#" class="btn btn-secondary" @click="removeImage()">Remove image</a>
					<!-- button za uklanjanje prethodno dodane slike profila -->

					<!--<img src="@/assets/img-thumnail.svg" />-->
					<div class="form-group">
						<!-- sve unutar ovog div classa je ono što nam piše ispod slike na profilu vodiča (ime i prezime, godine i ocjena)-->
						<label for="nameSurname">{{ firstname }} {{ lastname }}</label
						><br />
						<label for="DOB">{{ dob }}</label
						><br />
						<label for="rating">
							<img src=@/assets/A_star.png height=15% width=15% />{{ ratedpreview }}</label
						>
					</div>
				</div>
				<div class="col-fluid">
					<form>
						<!-- formular za popunjavanje podataka na profilnoj stranici vodiča -->
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
							<!-- v-model koristimo kako bi olakšali pozivanje, slanje i prikazivanje podataka s Firebasea-->
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
											min="0"
											max="24"
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
											min="0"
											max="60"
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
											min="0"
											max="24"
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
											min="0"
											max="60"
											v-model="newEndMinute"
										/>
									</div>
								</div>
							</div>
						</form>
						<form name="someForm" method="post" action="/someAction.do" class="form-inline">
							<!-- napravljen novi form radi inline funkcionalnosti i istog tipa podataka-->
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
							<!-- napravljen novi form radi inline funkcionalnosti i istog tipa podataka-->
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
						<!-- napravljen novi form radi inline funkcionalnosti i istog tipa podataka-->
						<div class="input-group">
							<div class="form-group">
								<label for="costPerHour"> Cost Per Hour: </label>
								<div>
									<input
										type="number"
										name="costPerHour"
										id="costPerHour"
										style="width: 55px"
										class="form-control"
										placeholder="---"
										maxlength="3"
										min="0"
										v-model="newcostPerHour"
									/>
								</div>
							</div>
							<div class="form-group">
								<label for="costPerLandmark"> Cost Per Landmark: </label>
								<div>
									<input
										type="number"
										name="costPerLandmark"
										id="costPerLandmark"
										style="width: 55px"
										class="form-control"
										placeholder="---"
										maxlength="3"
										min="0"
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
										<option>HRK</option>
									</select>
								</div>
							</div>
						</div>
					</form>
					<div class="form-group">
						<label for="exampleFormControlTextarea1">About Me</label>
						<!-- polje za unos detaljnijeg opisa (podataka o sebi) registriranog guidea-->
						<textarea class="form-control" id="aboutMe" rows="10" v-model="newaboutMe"></textarea>
					</div>
					<div class="form-group">
						<button
							type="button"
							id="btRegister"
							@click.prevent="saveNewInfo" 
							class="btn btn-primary"
						> <!-- @click.prevent nam sprječava refresh stranice na klik-->
							Save
						</button>
						<!-- button za saveanje unesenih podataka na stranici profila-->
					</div>
				</div>
				<div class="col-sm"></div>
			</div>
			<form name="someForm" method="post" action="/someAction.do" class="form-inline">
				<!-- od ove linije koda do linije 395. su polja za unos linkova FB, Twitter i Instagram profila vodiča -->
				<div class="input-group">
					<div style="width: 370px;" class="form-group">
						<div>
							<a :href="newFBlink">
								<img src=@/assets/FB_Logo.png height=100% width=12%/>
							</a>
							<input
								type="text"
								name="fb"
								id="facebookLink"
								style="width: 300px"
								class="form-control"
								placeholder="Facebook Link"
								v-model="newFBlink"
							/>
						</div>
					</div>
					<div style="width: 370px;" class="form-group">
						<label></label>
						<div>
							<a :href="newTwitterlink">
								<img src=@/assets/TW.png height=100% width=12% />
							</a>
							<input
								type="text"
								name="tw"
								id="twitterLink"
								style="width: 300px"
								class="form-control"
								placeholder="Twitter Link"
								v-model="newTwitterlink"
							/>
						</div>
					</div>
					<div style="width: 370px;" class="form-group">
						<label></label>
						<div>
							<a :href="newInstalink">
								<img src=@/assets/INST.png height=60% width=10% />
							</a>
							<input
								type="text"
								name="insta"
								id="instagramLink"
								style="width: 300px"
								class="form-control"
								placeholder="Instagram Link"
								v-model="newInstalink"
							/>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
import store from '@/store';
import { db, storage } from '@/firebase'; // osim db ovdje importamo i storage jer su u njemu spremljene slike profila

export default { //definiramo varijable koje ćemo pozivati kasnije u methods 
	name: 'Guide_functions',
	data: function() {
		//postavljanje praznih vrijednosti za unos podataka na stranici
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
			newMonuments: '',
			newStartHour: 0,
			newStartMinute: 0,
			newEndHour: 0,
			newEndMinute: 0,

			newMonday: 'false', //postavljamo sve ove vrijednosti na false kako ne bi bile pre-selectane
			newTuesday: 'false',
			newWednesday: 'false',
			newThursday: 'false',
			newFriday: 'false',
			newSaturday: 'false',
			newSunday: 'false',

			newperHour: '',
			newperLandmark: '',
			newcostPerHour: '',
			newcostPerLandmark: '',
			newCurrency: '',
			newaboutMe: '',

			newFBlink: '',
			newTwitterlink: '',
			newInstalink: '',
			ratedpreview: 0,
		};
	},
	mounted() {
		//* dohvat podataka ulogiranog guidea iz Firebasea, poziva funkciju čim se otvori stranica 
		this.getUserInfo();
		this.alert();
	},
	methods: {
		//za dohvaćanje podataka sa Firebasea
		getUserInfo() {
			console.log('firebase dohvat...');

			db.collection('user')
				.where('email', '==', store.currentUser)
				.get()
				.then((querySnapshot) => {
					//querySnapshot služi da dohvaća željene podatke/dokumente za usera kojeg je pronašao
					querySnapshot.forEach((doc) => {
						// doc.data() is never undefined for query doc snapshots
						console.log(doc.id, ' => ', doc.data());

						const data = doc.data(); //kako se ne bi moralo pisati za svaki atribut posebno napravili smo varijablu data 

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
						this.dob = data.dob;

						this.newFBlink = data.fblink;
						this.newTwitterlink = data.twlink;
						this.newInstalink = data.instalink;

						const calc = data.rated / data.ratedusers;
						this.ratedpreview = calc.toFixed(2); // jer nece kad je direktno u div

						document.getElementById('InputEmail').value = store.currentUser;
						//document.getElementById('exampleContact').value = data.phone;

						//* Asinkrona funckcija za dohvaćanje slike (kako bi očitalo sliku na vrijeme i pravilno)
						var img = new Image();
						img.onload = (e) => {
							//kad je učitana slika da ju pusha na stranicu
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
			//kako se podaci ne bi mijenjali bez saveanja
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

			const fblink = this.newFBlink;
			const twlink = this.newTwitterlink;
			const instalink = this.newInstalink;

			db.collection('user')
				.doc(this.id)
				.update({
					//funkcija za update podataka nakon eventualne izmjene/ažuriranja
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

					fblink: fblink,
					twlink: twlink,
					instalink: instalink,
				})
				.then(() => {
					console.log('spremljeno, doc'); //vraća nam potvrdu na konzoli da su podaci spremljeni na Firebase
					alert('You have successfully saved your changes!');
				})
				.catch((e) => {
					console.error(e);
				});
		},
		addImage() {
			this.imageReference.generateBlob((blobData) => {
				//spremanje slike u prikladni "blob" format
				let imageName = 'profile_image/' + store.currentUser + '.png';
				//let imageName = store.currentUser + '_' + Date.now() + '.png';
				console.log(imageName);

				storage
					.ref(imageName)
					.put(blobData) //funkcija koja se koristi za storage spremanje slike u blob-u
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
										console.log('spremljena slika, doc'); //potvrda da je slika spremljena
										alert('Image uploaded!');
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
					console.log('slika izbrisana, doc'); //Potvrda da je slika izbrisana
				});
		},
	},
};
</script>
