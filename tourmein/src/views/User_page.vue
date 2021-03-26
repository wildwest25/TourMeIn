<template>
	<div class="user_page">
		<div class="container">
			<div class="row">
				<div class="col-sm">
					<div class="d-flex justify-content-center">
						<div class="form-outline" style="width:1000;">
							<input
								id="search-focus"
								type="search"
								class="d-flex justify-content-center"
								v-model="store.searchTerm"
							/>
							<label class="form-label" for="form1">Search</label>
						</div>
						<!--<button id="Search-butt" type="button" class="btn btn-primary" @click="filteredCards">
							<i class="fas fa-search">Search</i>
						</button>-->
					</div>
				</div>
			</div>
			<div class="row">
				<div class="form-group float-left">
					<label> Guides near you: </label>
				</div>
			</div>
			<div class="row">
				<user-card v-for="card in filteredCards" :key="card.url" :info="card" />
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

			db.collection('user')
				.where('guide', '==', 'true')
				.get()
				.then((query) => {
					this.cards = [];
					query.forEach((doc) => {
						console.log(doc.id, ' => ', doc.data());

						const data = doc.data();

						this.cards.push({
							id: doc.id,
							name: data.firstname + ' ' + data.lastname,
							rated: data.rated,
							monuments: data.monuments,
							lang: data.languages,

							starthour: data.starthour,
							startminute: data.startminute,
							endhour: data.endhour,
							endminute: data.endminute,

							fb: data.fblink,
							tw: data.twlink,
							inst: data.instalink,

							prices:
								data.costhour +
								data.currency +
								' per Hour and ' +
								data.costlandmark +
								data.currency +
								' per Landmark',
							image: data.image,
						});
					});
				});
		},
	},
	computed: {
		filteredCards() {
			// logika koja filtrira cards
			let termin = this.store.searchTerm;

			return this.cards.filter(
				(card) => card.name.includes(termin),
				(card) => card.lang.includes(termin),
				(card) => card.monuments.includes(termin)
			);
		},
	},
	components: {
		UserCard,
	},
};
</script>
