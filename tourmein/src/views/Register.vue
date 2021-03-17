<template>
	<div class="register">
		<h1>Registration Form</h1>
		<div class="container">
			<div class="row justify-content-md-center">
				<div class="col-lg-6">
					<form>
						<div class="form-group">
							<label for="exampleInputEmail1">Email address</label>
							<input
								type="email"
								v-model="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter email"
							/>
							<small id="emailHelp" class="form-text text-muted"
								>We'll never share your email with anyone else.</small
							>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input
								type="password"
								v-model="password"
								class="form-control"
								id="exampleInputPassword1"
								placeholder="Password"
							/>
							//TODO: Repeat password
						</div>
						<div class="form-group">
							<label for="exampleName">Name</label>
							<input
								type="name"
								v-model="newFirstname"
								class="form-control"
								id="exampleName"
								placeholder="Enter name"
							/>
						</div>
						<div class="form-group">
							<label for="exampleSurename">Last Name</label>
							<input
								type="lastname"
								v-model="newLastname"
								class="form-control"
								id="exampleLastName"
								placeholder="Enter Last Name"
							/>
						</div>
						<div class="form-inline">
							<label for="gender"> Gender: </label>
							<div>
								<input
									type="radio"
									v-model="newGender"
									name="gen"
									id="male"
									value="male"
									style="width: 20px"
									class="form-control"
								/>
							</div>
							<label for="male"> Male </label>
							<div>
								<input
									type="radio"
									v-model="newGender"
									name="gen"
									id="female"
									value="female"
									style="width: 20px"
									class="form-control"
								/>
							</div>
							<label for="female"> Female</label>
							<div>
								<input
									type="radio"
									v-model="newGender"
									name="gen"
									id="other"
									value="other"
									style="width: 20px"
									class="form-control"
								/>
							</div>
							<label for="other"> Other </label>
						</div>
						<div class="form-inline">
							<label for="costPerHour"> Date of Birth: </label>
							<div class="form-group">
								<div class="form-group">
									<select class="form-control" id="day">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
									</select>
								</div>
							</div>
							<div class="form-group">
								<select class="form-control" id="month">
									<option>Jan</option>
									<option>Feb</option>
									<option>Mar</option>
									<option>Apr</option>
								</select>
							</div>
							<div class="form-group">
								<select class="form-control" id="year">
									<option>1950</option>
									<option>1951</option>
									<option>1952</option>
									<option>1953</option>
								</select>
							</div>
						</div>
						<div class="form-inline">
							<label for="costPerHour"> Country: </label>
							<div class="form-group">
								<select class="form-control" id="fromcountry" v-model="fromCountry">
									<option value="Croatia">Croatia</option>
									<option value="Germany">Germany</option>
									<option value="Italy">Italy</option>
									<option value="Slovenia">Slovenia</option>
								</select>
							</div>
						</div>
						<div class="form-inline">
							<label for="registerAs"> Register as: </label>
							<div class="form-group">
								<select class="form-control" id="registerAs" v-model="isGuide">
									<option value="false">Tourist</option>
									<option value="true">Guide</option>
								</select>
							</div>
						</div>
						<div class="form-inline">
							<label for="exampleCity">City:</label>
							<input
								type="city"
								class="form-control"
								id="exampleCity"
								placeholder="City"
								v-model="newCity"
							/>
						</div>
						<div class="form-inline">
							<input
								type="checkbox"
								id="terms_and_conditions"
								style="width: 20px"
								class="form-control"
								onchange="document.getElementById('btRegister').disabled = !this.checked;"
							/>
							<label for="perHour">
								I have read and agree with Terms and Conditions Agreement
							</label>
						</div>
						<div class="form-group">
							<button
								type="button" 
								id="btRegister"
								@click.prevent="signup"
								@click="postNewInfo"
								onclick="location.href = '/Registracija_uspjesna';"
								class="btn btn-primary"
								disabled="disabled"
							>
								Register
							</button>
							<div>
								<br />
								<a href="/" class="btn btn-secondary">Back</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { firebase, db } from '@/firebase';
import store from '@/store';

export default {
	name: 'Signup',
	data() {
		return {
			email: '',
			password: '',
			newFirstname: '',
			newLastname: '',
			newGender: '',
			fromCountry: '',
			newCity: '',
			isGuide: '',
		};
	},
	methods: {
		postNewInfo() {
			const email = this.email;
			const firstname = this.newFirstname;
			const lastname = this.newLastname;
			const gender = this.newGender;
			//! const country = this.newfromCountry;
			const city = this.newCity;
			const isguide = this.isGuide;

			db.collection('user')
				.add({
					email: email,
					firstname: firstname,
					lastname: lastname,
					gender: gender,
					//! country: country,
					city: city,
					guide: isguide,
					registered_at: Date.now(),
				})
				.then(() => {
					console.log('spremljeno, doc');
				})
				.catch((e) => {
					console.error(e);
				});
		},

		signup() {
			firebase
				.auth()
				.createUserWithEmailAndPassword(this.email, this.password)
				.then(function() {
					console.log('Uspjesna registracija');

			

                    user
                        .sendEmailVerification() //to do 
                        .then(function() {
                        })
                        .catch(function(error) {
                            // An error happened.
						});
						})
						.catch(function(error) {
							// An error happened.
						});
				})

				.catch(function(error) {
					console.error('Doslo je do greske, error');
				});
		},
		
	},

};
</script>
