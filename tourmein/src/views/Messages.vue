<template>
	<div class="messages">
		<h1>Messages</h1>
		<div class="container">
			<!--<h5>Welcome {{ firstname }}!</h5>-->
			<div class="row">
				<div class="col-8 offset-1">
					<div id="msgcard">
						<previous-guide-card
							id="msgucard"
							v-for="card in filteredCards"
							:key="card.url"
							:info="card"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
// @ is an alias to /src
import PreviousGuideCard from '@/components/UserMessage.vue';
import store from '@/store';
import { db } from '@/firebase';
import moment from 'moment';

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
		this.getMessagesUser();
		this.getMessagesGuide();
	},
	methods: {
		getMessagesUser() {
			console.log('firebase dohvat...');

			db.collection('message')
				.where('user', '==', store.currentUser)
				.get()
				.then((query) => {
					this.messages = [];
					query.forEach((doc) => {
						const data = doc.data();
						let d = data.createdAt.toDate();

						this.messages.push({
							id: data.id,
							time: moment(d).format('HH:mm:ss - DD.MM.YYYY.'),
							description: data.guidename,
							text: data.text,
						});
					});
				});
		},
		getMessagesGuide() {
			console.log('firebase dohvat...');

			db.collection('message')
				.where('guide', '==', store.currentUser)
				.get()
				.then((query) => {
					this.messages = [];
					query.forEach((doc) => {
						const data = doc.data();
						let d = data.createdAt.toDate();

						this.messages.push({
							id: data.id,
							time: moment(d).format('HH:mm:ss - DD.MM.YYYY.'),
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
		PreviousGuideCard,
	},
};
</script>
