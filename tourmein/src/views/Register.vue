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
							<label for="exampleUsername">Username</label>
							<input
								type="username"
								v-model="newUsername"
								class="form-control"
								id="exampleUsername"
								placeholder="Enter username"
							/>
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
								<input type="radio" name="gen" id="male" style="width: 20px" class="form-control" />
							</div>
							<label for="male"> Male </label>
							<div>
								<input
									type="radio"
									name="gen"
									id="female"
									style="width: 20px"
									class="form-control"
								/>
							</div>
							<label for="female"> Female</label>
							<div>
								<input
									type="radio"
									name="gen"
									id="other"
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
								<select class="form-control" id="country">
									<option>Croatia</option>
									<option>Germany</option>
									<option>Italy</option>
									<option>Slovenia</option>
								</select>
							</div>
						</div>
						<div class="form-inline">
							<label for="registerAs"> Register as: </label>
							<div class="form-group">
								<select class="form-control" id="registerAs">
									<option>Tourist</option>
									<option>Guide</option>
								</select>
							</div>
						</div>
						<div class="form-inline">
							<label for="exampleCity">City:</label>
							<input type="city" class="form-control" id="exampleCity" placeholder="City" />
						</div>
						<div class="form-inline">
							<input
								type="checkbox"
								name="agree"
								id="agree"
								style="width: 20px"
								class="form-control"
							/>
							<label for="perHour">
								I have read and agree with Terms and Conditions Agreement
							</label>
						</div>
						<div class="form-group">
							<label for="imageUrl">Image URL</label>
							<input
								v-model="newImageUrl"
								type="text"
								class="form-control ml-2"
								placeholder="Enter the image URL"
								id="imageUrl"
							/>
						</div>
						<div class="form-group">
							<label for="imageDescription">Description</label>
							<input
								v-model="newImageDescription"
								type="text"
								class="form-control ml-2"
								placeholder="Enter the image description"
								id="imageDescription"
							/>
						</div>
						<div class="form-group">
							<button
								type="button"
								@click="signup"
								@click.prevent="postNewInfo"
								class="btn btn-primary"
							>
								Register
							</button>
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
			newUsername: '',
			password: '',
			newImageDescription: '',
			newimageUrl: '',
			firstname: '',
			lastname: '',
		};
	},
	methods: {
		postNewInfo() {
			const username = this.newUsername;
			const firstname = this.newFirstname;
			const lastname = this.newLastname;
			const imageUrl = this.newImageUrl;
			const imageDescription = this.newImageDescription;

			db.collection('users')
				.add({
					username: username,
					firstname: firstname,
					lastname: lastname,
					url: imageUrl,
					desc: imageDescription,
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
				})
				.catch(function(error) {
					console.error('Doslo je do greske, error');
				});
		},
	},
};
</script>
