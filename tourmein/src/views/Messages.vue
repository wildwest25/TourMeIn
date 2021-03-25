<template>
	<div class="messages">
		<h1>Messages</h1>
		<div class="container">
			<!--<h5>Welcome {{ firstname }}!</h5>-->
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
import UserCard from '@/components/UserMessage.vue';
import store from '@/store';
import { db } from '@/firebase';

export default {
	name: 'message_functions',
	data: function() {
		return {
			messages: [],
			store,
		};
	},
	mounted() {
		//* dohvat iz Firebasea
		this.getMessages();
	},
	methods: {
		getMessages() {
			console.log('firebase dohvat...');

			db.collection('message')
				.get()
				.then((query) => {
					this.messages = [];
					query.forEach((doc) => {
						const data = doc.data();

						this.messages.push({
							id: data.id,
							time: data.date,
							description: data.username,
							text: data.text,
						});
					});
				});
		},
	},
	computed: {
		filteredCards() {
			// logika koja filtrira cards
			let termin = this.store.searchTerm;

			return this.messages.filter((card) => card.description.includes(termin));
		},
	},
	components: {
		UserCard,
	},
};
</script>
