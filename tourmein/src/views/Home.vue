<template>
	<div class="login">
		<img
			src="@/assets/pocetni_screen.png"
			alt="pocetna stranica"
			height="50%"
			width="100%"
			loading="lazy"
		/>
		<h1>TourMeIn</h1>
		<h4>Travel and learn</h4>
		<div class="container">
			<div class="row">
				<div class="col-sm"></div>
				<div class="col-sm">
					<form>
						<div class="form-group">
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
							<input
								type="password"
								v-model="password"
								class="form-control"
								id="exampleInputPassword1"
								placeholder="Password"
								@keyup.enter="login()"
							/>
						</div>
						<button type="button" @click="login()" class="btn btn-primary">
							Log In
						</button>
					</form>
					<br />
					<form method="get" action="/register">
						<button type="submit" class="btn btn-primary">Register</button>
					</form>
					<a href="#" @click="forgotpassword()">Forgot Password?</a>
				</div>
				<div class="col-sm"></div>
			</div>
		</div>
	</div>
</template>
<script>
import { firebase } from '@/firebase';

export default {
	name: 'login',
	data() {
		return {
			email: '',
			password: '',
		};
	},
	methods: {
		login() {
			firebase
				.auth()
				.signInWithEmailAndPassword(this.email, this.password)
				.then((result) => {
					console.log('Uspjesna prijava', result);

					//this.$router.replace({ name: 'Guide_profile'});
				})
				.catch(function(e) {
					console.error('Greska', e);
				});
		}, 

		forgotpassword(){

		var auth = firebase.auth();
		var emailAddress = this.email;
		auth.sendPasswordResetEmail(emailAddress).then(function() {
			alert("Password reset email has been sent, check your inbox");

			}).catch(function(error) {
				// An error happened.
				});
		},	

	},
};
</script>
