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
							<div id="charge" class="form-inline">
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
							</div>
						</div>
						<div class="form-outline" style="width:1000;"></div>
						<!--<button id="Search-butt" type="button" class="btn btn-primary" @click="filteredCards">
							<i class="fas fa-search">Search</i>
						</button>-->
					</div>
				</div>
			</div>
			<div class="row">
				<div class="form-group float-left" v-if="this.store.searchTerm === ''">
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

			byHour: '',
			byMonument: '',
			byRating: '',
			byPrice: '',
		};
	},
	mounted() {
		this.getGuides();
	},
	methods:
	{
		getGuides() {
			console.log('firebase dohvat...');

			db.collection('user')
				.where('guide', '==', 'true')
				.get()
				.then((query) => {
					this.cards = [];
					query.forEach((doc) => {
						const data = doc.data();
						

							if(data.costhour == true && data.costlandmark == true){
								this.cards.push({
								Prices:
								data.costhour +
								data.currency +
								' per Hour and ' +
								data.costlandmark +
								data.currency +
								' per Landmark',
								})
								}
							else if(data.costhour == true){
								this.cards.push({
								Prices:
								data.costhour +
								data.currency +
								' per Hour'
								})
							} else if(data.costlandmark == true){
								this.cards.push({
								Prices:
								
								data.costlandmark +
								data.currency +
								' per Landmark'
								})
								};



						this.cards.push({
							id: doc.id,
							name: data.firstname + ' ' + data.lastname,
							rated: data.rated,
							monuments: data.monuments,
							lang: data.languages,
							email: data.email,

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
						});
					});
				});
		},
	},
	computed: {


		 filteredCards() {
            // logika koja filtrira cards
            let termin = this.store.searchTerm.toLowerCase();

            console.log(termin);

            //! experimentno za sad
            if (this.byHour.checked) {
                return this.cards.filter((card) => card.prices.includes(termin));
            } 
			if (this.byMonument.checked) {
                return this.cards.filter((card) => card.monuments.includes(termin));
            }

            return this.cards.filter(
                (card) => card.name.toLowerCase().includes(termin)
                //(card) => card.lang.toLowerCase().includes(termin),
                //(card) => card.monuments.toLowerCase().includes(termin)
            );
        },
    },
	components: {
		UserCard,
	},
};
</script>
