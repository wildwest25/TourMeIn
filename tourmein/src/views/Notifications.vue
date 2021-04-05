<template>
	<div class="notifications">
		<h1>Notifications</h1>
		<div class="container">
			<div class="row">
				<div class="col-8 offset-1">
					<!-- //! primjer sa my previous tours, najbolje prilagoditi ka sta je tamo -->
					<previous-guide-card v-for="card in filteredCards" :key="card.url" :info="card" />
					<!--izlistava sve notifikacije-->
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import PreviousGuideCard from '@/components/Notificationcard.vue';
import store from '@/store';
import { db } from '@/firebase';

export default {
	name: 'message_functions',
	data: function() {
		return {
			notifications: [],
			store,
		};
	},
	mounted() {
		//* dohvat iz Firebasea ovisno o tipu usera
		if (store.isGuide == 'true') {
			this.getNotificationsGuide();
		} else {
			this.getNotificationsUser();
		}
	},
	methods: {
		getNotificationsGuide() {
			//dohvat notifikacija od strane guidea
			console.log('firebase dohvat...');

			db.collection('tour')
				.where('guide', '==', store.currentUser)
				.get()
				.then((query) => {
					this.notifications = [];
					query.forEach((doc) => {
						const data = doc.data();

						this.notifications.push({
							id: data.id,
							user: data.user,
							name: data.name,
							guidename: data.guidename,
							accepted: data.accepted,
							userimage: data.userimage,
							guideimage: data.guideimage,
						});
					});
				});
		},
		getNotificationsUser() {
			//dohvat notificationa za usera
			console.log('firebase dohvat...');

			db.collection('tour')
				.where('user', '==', store.currentUser)
				.get()
				.then((query) => {
					this.notifications = [];
					query.forEach((doc) => {
						const data = doc.data();

						this.notifications.push({
							id: data.id,
							user: data.user,
							name: data.name,
							guidename: data.guidename,
							accepted: data.accepted,
						});
					});
				});
		},
	},
	computed: {
		filteredCards() {
			return this.notifications; //prikuplja sve notifikacije
		},
	},
	components: {
		PreviousGuideCard, //pozivanje komponente
	},
};
</script>
