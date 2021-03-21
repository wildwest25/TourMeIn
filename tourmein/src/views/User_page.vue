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
					<!-- //! primjer sa my previous tours, najbolje prilagoditi ka sta je tamo -->
					<user-card v-for="card in filteredCards" :key="card.url" :info="card" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
// @ is an alias to /src
import UserCard from '@/components/UserCard.vue';
import store from '@/store';
import { db } from '@/firebase';

// let cards = [];

//... API/Firebase -> sve kartice -> cards
/*
cards = [
  {
    url: "https://picsum.photos/id/1/400/400",
    description: "Tina Mandarić",
    time: "19.03.2020",
    rated: 3,
    languages: "English, Polish",
    monuments: "Arena Amphitheater, Arco dei Sergi",
  },
  {
    url: "https://picsum.photos/id/2/400/400",
    description: "Lucijan Separović",
    time: "hour ago...",
  },
  {
    url: "https://picsum.photos/id/3/400/400",
    description: "David Janković",
    time: "few hours ago...",
  },
];*/

export default {
	name: 'user_cards',
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
							time: data.date, //TODO: 17:31 timestamp #5 part 2
							description: data.userName,
							rated: data.rated,
							monuments: data.monuments,
							lang: doc.languages,
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
