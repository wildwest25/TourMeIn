<template>
	<div class="messages">
		<h1>Messages</h1>
		<div class="container-fluid h-100">
			<div class="row justify-content-center h-100">
				<div class="col-md-8 col-xl-6 chat">
					<div id="chatcard" class="card">
						<div class="card-header msg_head">
							<div class="d-flex bd-highlight">
								<div class="img_cont">
									<img :src="this.recieverimg" class="rounded-circle user_img" />
									<span class="online_icon"></span>
								</div>
								<div class="user_info">
									<span>Chat with {{ this.recievername }}</span>
									<p>{{ this.msgtotal }} Messages</p>
								</div>
							</div>
							<span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
							<div class="action_menu">
								<ul>
									<li><i class="fas fa-user-circle"></i> View profile</li>
									<li><i class="fas fa-users"></i> Add to close friends</li>
									<li><i class="fas fa-plus"></i> Add to group</li>
									<li><i class="fas fa-ban"></i> Block</li>
								</ul>
							</div>
						</div>
						<div class="card-body msg_card_body">
							<div id="msgcard">
								<previous-guide-card
									id="msgucard"
									v-for="card in filteredCards"
									:key="card.url"
									:info="card"
								/>
							</div>
						</div>
						<div class="card-footer">
							<div class="input-group">
								<div class="input-group-append">
									<span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
								</div>
								<textarea
									id="Text_Area"
									name="Text_Area"
									class="form-control type_msg"
									placeholder="Type your message..."
									v-model="msgToSend"
									@keyup.enter="sendmsg()"
								></textarea>
								<div class="input-group-append" @click="sendmsg">
									<span class="input-group-text send_btn"
										><i class="fas fa-location-arrow"></i>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
// @ is an alias to /src
import PreviousGuideCard from '@/components/SingleMessage.vue';
import store from '@/store';
import { db } from '@/firebase';
import moment from 'moment';

export default {
	name: 'message_window',
	data: function() {
		return {
			messages: [],
			store,
			recieverimg: '',
			senderimg: '',
			recievername: '',
			sendername: '',
			msgtotal: '',
			msgToSend: '',
			recievermail: '',
		};
	},
	mounted() {
		if (store.isGuide == 'true') {
			this.getMessagesGuide();
		} else {
			this.getMessagesUser();
		}
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
						if (store.selectedUser == data.guidename) {
							this.senderimg = data.userimage;
							this.recieverimg = data.guideimage;
							this.recievername = data.guidename;
							this.sendername = data.username;
							this.recievermail = data.guide;
							let d = data.createdAt.toDate();

							this.msgtotal++;

							this.messages.push({
								id: data.id,
								time: moment(d).format('HH:mm:ss - DD.MM.YYYY.'),
								description: data.guidename,
								text: data.text,
								recieverimg: data.guideimage,
								senderimg: data.userimage,
								sendermail: data.sendermail,
							});
						}
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
						if (store.selectedUser == data.username) {
							let d = data.createdAt.toDate();
							this.senderimg = data.guideimage;
							this.recieverimg = data.userimage;
							this.recievername = data.username;
							this.sendername = data.guidename;
							this.recievermail = data.user;

							this.msgtotal++;

							this.messages.push({
								id: data.id,
								time: moment(d).format('HH:mm:ss - DD.MM.YYYY.'),
								description: data.guidename,
								text: data.text,
								senderimg: data.guideimage,
								recieverimg: data.userimage,
								sendermail: data.sendermail,
							});
						}
					});
				});
		},
		sendmsg() {
			if (store.isGuide == 'true') {
				db.collection('message')
					.doc(new Date() + ' ' + store.currentUser)
					.set({
						guide: store.currentUser,
						user: this.recievermail,
						username: this.recievername,
						guidename: this.sendername,
						sendermail: store.currentUser,
						createdAt: new Date(),
						guideimage: this.senderimg,
						userimage: this.recieverimg,
						text: this.msgToSend,
					})
					.then(() => {
						console.log('message sent');
						this.msgToSend = '';
						this.getMessagesGuide();
					})
					.catch((e) => {
						console.error(e);
					});
			} else {
				db.collection('message')
					.doc(new Date() + ' ' + store.currentUser)
					.set({
						guide: this.recievermail,
						user: store.currentUser,
						username: this.sendername,
						guidename: this.recievername,
						sendermail: store.currentUser,
						createdAt: new Date(),
						guideimage: this.recieverimg,
						userimage: this.senderimg,
						text: this.msgToSend,
					})
					.then(() => {
						console.log('message sent');
						this.msgToSend = '';
						this.getMessagesUser();
					})
					.catch((e) => {
						console.error(e);
					});
			}
		},
	},
	computed: {
		filteredCards() {
			return this.messages;
		},
	},
	components: {
		PreviousGuideCard,
	},
};

jQuery(document).ready(function($) {
	$(document).ready(function() {
		$('#action_menu_btn').click(function() {
			$('.action_menu').toggle();
		});
	});
});
</script>
