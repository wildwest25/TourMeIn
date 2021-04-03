<template>
	<div class="messages">
		<h1>Messages</h1>
		<div class="container">
			<!--<h5>Welcome {{ firstname }}!</h5>-->
			<div class="row">
				<div class="col-8 offset-1">
					<!-- //! primjer sa my previous tours, najbolje prilagoditi ka sta je tamo -->
					<div id="msgcard">
						<user-card id="msgucard" v-for="card in filteredCards" :key="card.url" :info="card" />
					</div>
					<div id="talkjs-container" style="width: 90%; margin: 30px; height: 500px">
						<i>Loading chat...</i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
(function(t, a, l, k, j, s) {
	s = a.createElement('script');
	s.async = 1;
	s.src = 'https://cdn.talkjs.com/talk.js';
	a.head.appendChild(s);
	k = t.Promise;
	t.Talk = {
		v: 3,
		ready: {
			then: function(f) {
				if (k)
					return new k(function(r, e) {
						l.push([f, r, e]);
					});
				l.push([f]);
			},
			catch: function() {
				return k && new k();
			},
			c: l,
		},
	};
})(window, document, []);

Talk.ready.then(function() {
	var me = new Talk.User({
		id: '123456',
		name: 'Alice',
		email: 'alice@example.com',
		photoUrl: 'https://demo.talkjs.com/img/alice.jpg',
		welcomeMessage: 'Hey there! How are you? :-)',
	});
	window.talkSession = new Talk.Session({
		appId: 'tcSgqmrC',
		me: me,
	});
	var other = new Talk.User({
		id: '654321',
		name: 'Sebastian',
		email: 'Sebastian@example.com',
		photoUrl: 'https://demo.talkjs.com/img/sebastian.jpg',
		welcomeMessage: 'Hey, how can I help?',
	});

	var conversation = talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other));
	conversation.setParticipant(me);
	conversation.setParticipant(other);

	var inbox = talkSession.createInbox({ selected: conversation });
	inbox.mount(document.getElementById('talkjs-container'));
});
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
