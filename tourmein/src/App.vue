<template>
	<div id="app">
		<navigation v-if="store.isGuide === 'true'">
			<div id="nav" class="navbar navbar-expand-md navbar-light">
				<img
					src="@/assets/Logo-01.png"
					height="60"
					class="d-inline-block align-top"
					alt=""
					loading="lazy"
				/>
				<h1>TourMeIn</h1>
				<!--<router-link to="/">Home</router-link> | -->
				<router-link to="/guide_profile" class="offset-1">My Profile</router-link> |
				<router-link to="/my_previous_tours_guide">My Previous Tours</router-link> |
				<router-link to="/notifications">Notifications</router-link> |
				<router-link to="/messages">Messages</router-link>

				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<button type="button" href="#" @click="logout()" class="btn btn-primary">
							Log Out
						</button>
					</li>
				</ul>
			</div>
		</navigation>
		<navigation v-if="store.isGuide === 'false'">
			<div id="nav" class="navbar navbar-expand-md navbar-light">
				<img
					src="@/assets/Logo-01.png"
					height="60"
					class="d-inline-block align-top"
					alt=""
					loading="lazy"
				/>
				<h1>TourMeIn</h1>
				<router-link to="/user_profile" class="offset-1">My Profile</router-link> |
				<router-link to="/user_page">Search Guides</router-link> |
				<router-link to="/my_guides">My Guides</router-link> |
				<router-link to="/notifications">Notifications</router-link> |
				<router-link to="/messages">Messages</router-link>

				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<button type="button" href="#" @click.prevent="logout()" class="btn btn-primary">
							Log Out
						</button>
					</li>
				</ul>
			</div>
		</navigation>
		<router-view />
	</div>
</template>

<script>
import store from '@/store';
import { firebase, db } from '@/firebase';
import router from '@/router';

firebase.auth().onAuthStateChanged((user) => {
	const currentRoute = router.currentRoute;

	// * RIJESENO :) zamjenit i sloziti da ako je guide logiran da ide na guide profile ako ne na user pocetnu
	if (user) {
		// User is signed in.
		console.log(user.email);
		store.currentUser = user.email;

		db.collection('user')
			.where('email', '==', user.email)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					console.log(doc.id, ' => ', doc.data());

					const data = doc.data();
					console.log(store.isGuide);
					store.isGuide = data.guide;

					if (currentRoute.name == 'Register') {
						router.replace({ name: 'Registracija_uspjesna' });
						store.isGuide = null; //! trenutacni fix za maknuti menu bar
					} else if (!currentRoute.meta.needsUser && data.guide == 'true') {
						router.push({ name: 'Guide_profile' });
					} else {
						router.push({ name: 'User_page' });
					}
				});
			})
			.catch((error) => {
				console.log('Error getting documents: ', error);
			});
	} else {
		// User is not signed in.
		console.log('No user');
		store.currentUser = null;

		if (currentRoute.meta.needsUser) {
			router.push({ name: 'Home' });
		}
	}
});

export default {
	name: 'app',
	data() {
		return {
			store,
		};
	},

	methods: {
		logout() {
			firebase
				.auth()
				.signOut()
				.then(() => {
					this.$router.push({ name: 'Home' });
					store.isGuide = null;
				});
		},
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			height: 10%;
			width: 8%;
			background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #fd7a00 100%);
			border-radius: 100px;
		}
	}
}
</style>
