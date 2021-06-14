<template>
	<div id="app">
		<navigation v-if="store.isGuide === 'true'"
			><!-- Meni vidljivi samo Guide-u -->
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
				<router-link to="/notifications">Notifications</router-link>
				<div v-if="store.counter" id="MSGCount">{{ store.counter }}</div>
				|
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
		<navigation v-if="store.isGuide === 'false'"
			><!-- Meni vidljivi samo User-u -->
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
				<router-link to="/UserPage">Search Guides</router-link> |
				<router-link to="/my_guides">My Guides</router-link> |
				<router-link to="/notifications">Notifications</router-link>
				<div v-if="store.counter" id="MSGCount">{{ store.counter }}</div>
				|
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
	store.counter = 0; //brojač za notifikacije

	if (user) {
		// User is signed in.
		store.currentUser = user.email; // spremljeno u store da je moguce dohvatiti u drugim .vue view-ovima
		db.collection('user')
			.where('email', '==', user.email) // nadji usera na firebase-u sa istim email-om
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					console.log(doc.id, ' => ', doc.data()); // ispis u konzoli svih podataka za vezanog user sa firebase-a

					const data = doc.data();
					console.log('is guide: ', store.isGuide);
					store.isGuide = data.guide;
					store.guideID = doc.id;

					if (store.isGuide == 'true') {
						// za zbrajanje notificationa
						db.collection('tour')
							.where('guide', '==', store.currentUser)
							.get()
							.then((query) => {
								query.forEach((doc) => {
									const data = doc.data();

									if (data.accepted == null) {
										store.counter = store.counter + 1;
									} else if (data.accepted == true) {
										store.counter = store.counter + 1;
									} else if (data.accepted == false) {
										store.counter = store.counter + 1;
									}
								});
							});
					} else {
						// za zbrajanje notificationa
						db.collection('tour')
							.where('user', '==', store.currentUser)
							.get()
							.then((query) => {
								query.forEach((doc) => {
									const data = doc.data();

									if (data.accepted == null) {
										store.counter = store.counter + 1;
									} else if (data.accepted == true) {
										store.counter = store.counter + 1;
									} else if (data.accepted == false) {
										store.counter = store.counter + 1;
									} else if (data.accepted == 'done') {
										store.counter = store.counter + 1;
									}
								});
							});
					}

					if (currentRoute.name == 'Register') {
						router.replace({ name: 'Registracija_uspjesna' });
						store.isGuide = null; //! problem sa menu barom
					} else if (!currentRoute.meta.needsUser && data.guide == 'true') {
						// na loginu ako je guide pusha ga na guide profile
						router.replace({ name: 'Guide_profile' });
					} else {
						// ak ne na user page
						router.replace({ name: 'UserPage' });
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
		store.isGuide = null;
		store.tourInProgress = null;
		store.selectedUser = null;
		store.guideID = null;
		store.counter = 0;

		if (currentRoute.meta.needsUser) {
			// u slucaju da manualno idemo na neku stranicu kao npr search guides bez logina ce nas vratiti na home page
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
			//postavke za login, stavi me na home i resetiraj zapamcene varijable
			firebase
				.auth()
				.signOut()
				.then(() => {
					store.isGuide = null;
					store.tourInProgress = null;
					store.selectedUser = null;
					store.guideID = null;
					store.counter = 0;
					this.$router.push({ name: 'Home' });
					window.location.reload();
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
