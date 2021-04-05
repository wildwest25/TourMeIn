<template>
	<div class="card text-left">
		<div id="msgbtn" class="btn btn-primary" @click="selectMessage">
			<div class="row">
				<div class="col-md-auto">
					<div class="card-body p-0">
						<img
							v-if="store.isGuide === 'false'"
							id="guideIMG"
							class="card-img-top offset-1"
							style="width: 3rem;"
							:src="info.guideimage"
						/>
						<img
							v-else
							id="userIMG"
							class="card-img-top offset-1"
							style="width: 3rem;"
							:src="info.userimage"
						/>
					</div>
				</div>
				<div class="col-sm">
					<div id="UInfo" class="card-body p-0">{{ info.description }}:</div>
					<div id="Utext" class="card-body p-0">
						<div id="UPtext">{{ info.text }}</div>
					</div>
					<div id="Utime" class="card-body p-0">{{ info.time }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import router from '@/router';
import store from '@/store';

export default {
	props: ['info'],
	name: 'UserMessage',
	data: function() {
		return {
			store,
		};
	},

	methods: {
		selectMessage() {
			router.push({ name: 'Msg_preview' });
		},
	},
};
</script>

<style lang="scss">
.card {
	margin-bottom: 20px;
}

#msgbtn {
	background: rgba(0, 0, 0, 0);
	border-color: rgba(0, 0, 0, 0);
}
</style>
