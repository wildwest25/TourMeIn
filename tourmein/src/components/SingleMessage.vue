<template
	><div class="d-flex justify-content-start mb-4">
		<div id="msgcard"></div>
		<div class="img_cont_msg">
			<img :src="info.recieverimg" class="rounded-circle user_img_msg" />
		</div>
		<div class="msg_cotainer">
			{{ info.text }}
			<span class="msg_time">{{ info.time }}</span>
		</div>
	</div>
</template>

<script>
import router from '@/router';
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
