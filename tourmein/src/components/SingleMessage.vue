<template>
	<div>
		<div class="d-flex justify-content-end mb-4" v-if="info.sendermail === store.currentUser">
			<div class="msg_cotainer_send">
				{{ info.text }}
				<span class="msg_time_send">{{ info.time }}</span>
			</div>
			<div class="img_cont_msg">
				<img :src="info.senderimg" class="rounded-circle user_img_msg" />
			</div>
		</div>
		<div class="d-flex justify-content-start mb-4" v-else>
			<div class="img_cont_msg">
				<img :src="info.recieverimg" class="rounded-circle user_img_msg" />
			</div>
			<div class="msg_cotainer">
				{{ info.text }}
				<span class="msg_time">{{ info.time }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import store from '@/store';

export default {
	props: ['info'],
	name: 'single_message',
	data: function() {
		return {
			store,
		};
	},

	methods: {},
};
</script>
