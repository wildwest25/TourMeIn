<template>
	<div class="user_page">
		<div class="container">
			<div class="row">
				<div class="col-sm">
					<div class="d-flex justify-content-center">
						<div class="form-outline" style="width:1000;">
							<input id="search-focus" type="search" class="d-flex justify-content-center" />
							<label class="form-label" for="form1">Search</label>
						</div>
						<button id="Search-butt" type="button" class="btn btn-primary">
							<i class="fas fa-search">Search</i>
						</button>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-8 offset-1">
					<user-card v-for="card in filteredCards" :key="card.url" :info="card" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
// @ is an alias to /src
import UserCard from '@/components/SearchGuide.vue';
import store from '@/store';
import { db } from '@/firebase';

export default {
	name: 'user_search',
	props: ['id'],
	data: function() {
		return {
			cards: [],
			store,
		};
	},
	mounted() {
		this.getGuides();
	},
	methods: {
		getGuides() {
			console.log('firebase dohvat...');

			db.collection('tours')
				.get()
				.then((query) => {
					this.cards = [];
					query.forEach((doc) => {
						//console.log('ID: ', doc.id);
						//console.log('Podaci: ', doc.data());

						const data = doc.data();

						this.cards.push({
							id: doc.id,
							time: data.date,
							description: data.userName,
							rated: data.rated,
							monuments: data.monuments,
							lang: data.languages,
							starthour: data.starthour,
							startminute: data.startminute,
							endhour: data.endhour,
							endminute: data.endminute,
							prices: data.prices,
						});
					});
				});
		},
	},
	computed: {
		filteredCards() {
			// logika koja filtrira cards
			let termin = this.store.searchTerm;

			return this.cards.filter((card) => card.description.includes(termin));
		},
	},
	components: {
		UserCard,
	},
};
</script>
