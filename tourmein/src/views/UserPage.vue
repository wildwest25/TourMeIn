<template>
	<div class="UserPage">
		<div class="container">
			<div class="row">
				<div class="col-sm">
					<div class="d-flex justify-content-center">
						<div class="form-group has-search">
							<span class="form-control-feedback"></span>
							<input
								type="text"
								class="form-control"
								placeholder="Search"
								v-model="store.searchTerm"
							/>
							<!--<div id="charge" class="form-inline">
								<label> Show only guides that charge: </label>
								<div>
									<input
										type="checkbox"
										v-model="byHour"
										name="gen"
										id="male"
										value="male"
										style="width: 20px"
										class="form-control"
									/>
								</div>
								<label> By Hour </label>
								<div>
									<input
										type="checkbox"
										v-model="byMonument"
										name="gen"
										id="female"
										value="female"
										style="width: 20px"
										class="form-control"
									/>
								</div>
								<label> By Monument</label>
							</div>
							<div id="sorts" class="form-inline">
								<label> Sort by: </label>
								<div>
									<input
										type="radio"
										v-model="byRating"
										name="gen"
										id="other"
										value="other"
										style="width: 20px"
										class="form-control"
									/>
								</div>
								<label> Rating </label>
								<div style="margin-left:12px;">
									<input
										type="radio"
										v-model="byPrice"
										name="gen"
										id="other"
										value="other"
										style="width: 20px"
										class="form-control"
									/>
								</div>
								<label> Price </label>
							</div>-->
						</div>
						<div class="form-outline" style="width:1000;"></div>
						<!--<button id="Search-butt" type="button" class="btn btn-primary" @click="filteredCards">
							<i class="fas fa-search">Search</i>
						</button>-->
					</div>
				</div>
			</div>
			<div class="row">
				<div class="form-group float-left" v-if="this.store.searchTerm === ''"></div>
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

			byHour: '',
			byMonument: '',
			byRating: '',
			byPrice: '',
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
						const data = doc.data();

						if (data.languages != null && data.monuments != null)
						{
						this.cards.push({
							id: doc.id,
							name: data.firstname + ' ' + data.lastname,
							monuments: data.monuments,
							lang: data.languages,
							email: data.email,
							city: data.city,

							starthour: data.starthour,
							startminute: data.startminute,
							endhour: data.endhour,
							endminute: data.endminute,

							monday: data.monday,
							tuesday: data.tuesday,
							wednesday: data.wednesday,
							thursday: data.thursday,
							friday: data.friday,
							saturday: data.saturday,
							sunday: data.sunday,

							fb: data.fblink,
							tw: data.twlink,
							inst: data.instalink,

							image: data.image,
							ratedpreview: data.rated / data.ratedusers,
							ratedusers: data.ratedusers,

							costhour: data.costhour,
							currency: data.currency,
							costlandmark: data.costlandmark,
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

            console.log(termin);

			if (this.byHour.checked){
				return (item) => item.costhour.toLowerCase().includes(costhour)
			}

            return this.cards.filter(
                (item) =>
                    item.name.toLowerCase().includes(termin.toLowerCase()) ||
					item.monuments.toLowerCase().includes(termin.toLowerCase()) || 
                    item.lang.toLowerCase().includes(termin.toLowerCase()) ||
					item.city.toLowerCase().includes(termin.toLowerCase())
            );
		},
	},
	components: {
		UserCard,
	},
};
</script>
