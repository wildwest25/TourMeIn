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
									<p>8 Messages</p>
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
							<div class="d-flex justify-content-start mb-4">
								<div id="msgcard">
									<previous-guide-card
										id="msgucard"
										v-for="card in filteredCards"
										:key="card.url"
										:info="card"
									/>
								</div>
							</div>
							<div class="d-flex justify-content-end mb-4">
								<div class="msg_cotainer_send">
									Hi Khalid i am good tnx how about you?
									<span class="msg_time_send">8:55 AM, Today</span>
								</div>
								<div class="img_cont_msg">
									<img src="@/assets/Rectangle_2.png" class="rounded-circle user_img_msg" />
								</div>
							</div>
							<div class="d-flex justify-content-start mb-4">
								<div class="img_cont_msg">
									<img
										src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
										class="rounded-circle user_img_msg"
									/>
								</div>
								<div class="msg_cotainer">
									I am good too, thank you for your chat template
									<span class="msg_time">9:00 AM, Today</span>
								</div>
							</div>
							<div class="d-flex justify-content-end mb-4">
								<div class="msg_cotainer_send">
									You are welcome
									<span class="msg_time_send">9:05 AM, Today</span>
								</div>
								<div class="img_cont_msg">
									<img src="@/assets/Rectangle_2.png" class="rounded-circle user_img_msg" />
								</div>
							</div>
							<div class="d-flex justify-content-start mb-4">
								<div class="img_cont_msg">
									<img
										src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
										class="rounded-circle user_img_msg"
									/>
								</div>
								<div class="msg_cotainer">
									I am looking for your next templates
									<span class="msg_time">9:07 AM, Today</span>
								</div>
							</div>
							<div class="d-flex justify-content-end mb-4">
								<div class="msg_cotainer_send">
									Ok, thank you have a good day
									<span class="msg_time_send">9:10 AM, Today</span>
								</div>
								<div class="img_cont_msg">
									<img src="@/assets/Rectangle_2.png" class="rounded-circle user_img_msg" />
								</div>
							</div>
							<div class="d-flex justify-content-start mb-4">
								<div class="img_cont_msg">
									<img
										src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
										class="rounded-circle user_img_msg"
									/>
								</div>
								<div class="msg_cotainer">
									Bye, see you
									<span class="msg_time">9:12 AM, Today</span>
								</div>
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
								></textarea>
								<div class="input-group-append">
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
							let d = data.createdAt.toDate();

							this.messages.push({
								id: data.id,
								time: moment(d).format('HH:mm:ss - DD.MM.YYYY.'),
								description: data.guidename,
								text: data.text,
								recieverimg: data.guideimage,
								senderimg: data.userimage,
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

							this.messages.push({
								id: data.id,
								time: moment(d).format('HH:mm:ss - DD.MM.YYYY.'),
								description: data.guidename,
								text: data.text,
								senderimg: data.guideimage,
								recieverimg: data.userimage,
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

			return this.messages.filter((card) => card.description.includes(termin));
		},
	},
	components: {
		PreviousGuideCard,
	},
};
</script>
