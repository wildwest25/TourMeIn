<style>
/*
BOOTSTRAP ZA COUNTRY SELECT
Make bootstrap-select work with bootstrap 4 see:
https://github.com/silviomoreto/bootstrap-select/issues/1135
*/
.dropdown-toggle.btn-default {
	color: #292b2c;
	background-color: #fff;
	border-color: #ccc;
}
.bootstrap-select.show > .dropdown-menu > .dropdown-menu {
	display: block;
}
.bootstrap-select > .dropdown-menu > .dropdown-menu li.hidden {
	display: none;
}
.bootstrap-select > .dropdown-menu > .dropdown-menu li a {
	display: block;
	width: 100%;
	padding: 3px 1.5rem;
	clear: both;
	font-weight: 400;
	color: #292b2c;
	text-align: inherit;
	white-space: nowrap;
	background: 0 0;
	border: 0;
	text-decoration: none;
}
.bootstrap-select > .dropdown-menu > .dropdown-menu li a:hover {
	background-color: #f4f4f4;
}
.bootstrap-select > .dropdown-toggle {
	width: 100%;
}
.dropdown-menu > li.active > a {
	color: #fff !important;
	background-color: #337ab7 !important;
}
.bootstrap-select .check-mark {
	line-height: 14px;
}
.bootstrap-select .check-mark::after {
	font-family: 'FontAwesome';
	content: '\f00c';
}
.bootstrap-select button {
	overflow: hidden;
	text-overflow: ellipsis;
}

/* Make filled out selects be the same size as empty selects */
.bootstrap-select.btn-group .dropdown-toggle .filter-option {
	display: inline !important;
}
</style>

<template>
	<div class="register">
		<h1>Registration Form</h1>
		<div class="container">
			<div class="row justify-content-md-center">
				<div class="col-lg-6">
					<form>
						<div class="form-group" :class="{ error: validation.hasError('email') }">
							<!--definiranje polja za unos Emaila uz pozivanje postavljenih validator pravila-->
							<label for="exampleInputEmail1">Email address</label>
							<input
								type="email"
								v-model="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter email"
							/>
							<div class="message" style="color">{{ validation.firstError('email') }}</div>
							<small id="emailHelp" class="form-text text-muted"
								>We'll never share your email with anyone else.</small
							>
						</div>
						<div class="form-group" :class="{ error: validation.hasError('password') }">
							<!--definiranje polja za postavljanje passworda uz pozivanje validator pravila-->
							<label for="exampleInputPassword1">Password</label>
							<input
								type="password"
								v-model="password"
								class="form-control"
								id="exampleInputPassword1"
								placeholder="Password"
							/>
							<div class="message">{{ validation.firstError('password') }}</div>
						</div>
						<div class="form-group" :class="{ error: validation.hasError('repeat') }">
							<!--ukoliko ne upišemo isti password javlja nam error -->
							<input
								type="password"
								v-model="repeat"
								class="form-control"
								id="exampleInputPassword2"
								placeholder="Please Repeat Password"
							/>
							<div class="message">{{ validation.firstError('repeat') }}</div>
						</div>
						<div class="form-group" :class="{ error: validation.hasError('newFirstname') }">
							<!-- polje za unos imena uz pozivanje validator pravila -->
							<label for="exampleName">Name</label>
							<input
								type="name"
								v-model="newFirstname"
								class="form-control"
								id="exampleName"
								placeholder="Enter name"
							/>
							<div class="message">{{ validation.firstError('newFirstname') }}</div>
						</div>
						<div class="form-group" :class="{ error: validation.hasError('newLastname') }">
							<!-- polje za unos prezimena uz pozivanje definiranih validator pravila-->
							<label for="exampleSurename">Last Name</label>
							<input
								type="lastname"
								v-model="newLastname"
								class="form-control"
								id="exampleLastName"
								placeholder="Enter Last Name"
							/>
							<div class="message">{{ validation.firstError('newLastname') }}</div>
						</div>
						<div class="form-inline" :class="{ error: validation.hasError('newGender') }">
							<!-- definiranje radio buttona za odabir spola uz validator pravila-->
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
							<div class="message">{{ validation.firstError('newGender') }}</div>
						</div>
						<div class="form-inline" :class="{ error: validation.hasError('newdob') }">
							<!-- polje za unos datuma rođenja -->
							<label for="start"> Date of birth: </label>
							<input id="DOB" type="date" data-relmax="-18" required="" v-model="newdob" />
							<div id="Text_age">You must be atleast 18 years old to register</div>
							<!-- napomena da se mora biti bar 18 godina star za registraciju-->
							<div class="message">{{ validation.firstError('newdob') }}</div>
						</div>
						<div class="form-inline">
							<label for="country"> Country: </label>
							<div id="CO">
								<vue-country-code @onSelect="onSelect"> </vue-country-code>
							</div>
						</div>
						<div class="form-inline" :class="{ error: validation.hasError('isGuide') }">
							<label for="registerAs"> Register as: </label>
							<div class="form-group">
								<select class="form-control" id="registerAs" v-model="isGuide">
									<option value="false">Tourist</option>
									<option value="true">Guide</option>
								</select>
							</div>
							<div class="message">{{ validation.firstError('isGuide') }}</div>
						</div>
						<div class="form-inline" :class="{ error: validation.hasError('newCity') }">
							<label for="city">City:</label>
							<input
								type="city"
								class="form-control"
								id="exampleCity"
								placeholder="City"
								v-model="newCity"
							/>
							<div class="message">{{ validation.firstError('newCity') }}</div>
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
								@click="signup"
								@click.prevent="postNewInfo"
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
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;

export default {
	name: 'Signup',
	data() {
		return {
			email: null,
			password: '',
			repeat: '',
			newFirstname: '',
			newLastname: '',
			newGender: '',
			newdob: '',
			newfromCountry: '',
			newCity: '',
			isGuide: '',
		};
	},
	validators: {
		email: function(value) {
			return Validator.value(value)
				.required()
				.email();
		},
		password: function(value) {
			return Validator.value(value)
				.required()
				.minLength(6);
		},
		'repeat, password': function(repeat, password) {
			if (this.submitted || this.validation.isTouched('repeat')) {
				return Validator.value(repeat)
					.required()
					.match(password);
			}
		},
		newFirstname: function(value) {
			return Validator.value(value)
				.required()
				.regex('^[A-Za-zšđčćžŠĐČĆŽ]*$', 'Must only contain alphabetic characters.');
		},
		newLastname: function(value) {
			return Validator.value(value)
				.required()
				.regex('^[A-Za-zšđčćžŠĐČĆŽ]*$', 'Must only contain alphabetic characters.');
		},
		newGender: function(value) {
			return Validator.value(value).required();
		},
		isGuide: function(value) {
			return Validator.value(value).required();
		},
		newCity: function(value) {
			return Validator.value(value)
				.required()
				.regex('^[A-Za-zšđčćžŠĐČĆŽ]*$', 'Must only contain alphabetic characters.');
		},
		newdob: function(value) {
			return Validator.value(value).required();
		},
	},
	methods: {
		onSelect({ name, iso2, dialCode }) {
			this.newfromCountry = name;
			console.log(name, iso2, dialCode);
		},
		postNewInfo() {
			this.$validate().then((success) => {
				if (success) {
					//alert('Validation succeeded!');
					const email = this.email;
					const firstname = this.newFirstname;
					const lastname = this.newLastname;
					const gender = this.newGender;
					const dob = this.newdob;
					const country = this.newfromCountry;
					const city = this.newCity;
					const isguide = this.isGuide;

					db.collection('user')
						.add({
							email: email,
							firstname: firstname,
							lastname: lastname,
							gender: gender,
							dob: dob,
							country: country,
							city: city,
							guide: isguide,
							registered_at: Date.now(),
							rated: 0, // trebalo je postaviti jer zna biti problem ako nije polje kao number postavljeno
							ratedusers: 0,
						})
						.then(() => {
							console.log('spremljeno, doc');
						})
						.catch((e) => {
							console.error(e);
						});
				} else {
					console.error('Podaci nisu spremljeni, error');
				}
			});
		},

		signup() {
			this.$validate().then((success) => {
				if (success) {
					firebase
						.auth()
						.createUserWithEmailAndPassword(this.email, this.password)
						.then(function() {
							console.log('Uspjesna registracija');

							var user = firebase.auth().currentUser;

							user

								.sendEmailVerification() //to do
								.then(function() {})
								.catch(function(error) {
									// An error happened.
								});
							/*firebase
								.auth()
								.signOut()
								.then(() => {
									store.isGuide = null;
								});*/
						})
						.catch(function(error) {
							console.error('Doslo je do greske, error');
						});
				} else {
					console.error('User nije kreiran, error');
				}
			});
		},
	},
};

jQuery(document).ready(function($) {
	$(function() {
		$('input[data-relmax]').each(function() {
			var oldVal = $(this).prop('value');
			var relmax = $(this).data('relmax');
			var max = new Date();
			max.setFullYear(max.getFullYear() + relmax);
			$.prop(
				this,
				'max',
				$(this)
					.prop('valueAsDate', max)
					.val()
			);
			$.prop(this, 'value', oldVal);
		});
	});
});
</script>
