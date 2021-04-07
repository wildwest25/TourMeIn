<template>
	<div class="row">
		<div class="col-8">
			<div class="float-left offset-1">
				<h1>My Previous Guides</h1>
			</div>
		</div>
		<div class="col-8 offset-1">
			<user-card v-for="card in filteredCards" :key="card.url" :info="card" />
		</div>
	</div>
</template>
<script>
// @ is an alias to /src
import UserCard from '@/components/PreviousGuideCard.vue';
import store from '@/store';
import { db } from '@/firebase';

export default {
	name: 'My_Guides',
	props: ['id'],
	data: function() {
		return {
			cards: [],
			store,
		};
	},
	mounted() {
		//* dohvat iz Firebasea
		this.getPrevTours();
	},
	methods: {
		getPrevTours() {
			db.collection('tour')
				.where('user', '==', store.currentUser)
				.get()
				.then((query) => {
					this.cards = [];
					query.forEach((doc) => {
						const data = doc.data();

						if (data.accepted == 'done' || data.accepted == 'rated') {
							this.cards.push({
								id: data.id,
								user: data.user,
								name: data.name,
								guidename: data.guidename,
								guide: data.guide,
								accepted: data.accepted,
								guideID: data.guideID,
								ratedwith: data.ratedwith,
								finishedAt: data.finishedAt,
								guideimage: data.guideimage,
							});
						}
					});
				});
		},
	},
	computed: {
		filteredCards() {
			// logika koja filtrira cards
			let termin = this.store.searchTerm;

			return this.cards;
		},
	},
	components: {
		UserCard,
	},
};
</script>
