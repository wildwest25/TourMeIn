import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: { hideNavigation: true },
		component: () => import('../views/Home.vue'),
	},
	{
		path: '/register',
		name: 'Register',
		meta: { hideNavigation: true },
		component: () => import('../views/Register.vue'),
	},

	{
		path: '/registracija_uspjesna',
		name: 'Registracija_uspjesna',
		meta: { hideNavigation: true },
		component: () => import('../views/Registracija_uspjesna.vue'),
	},

	{
		path: '/guide_profile',
		name: 'Guide_profile',
		meta: {},
		component: () => import('../views/Guide_profile.vue'),
		meta: {
			needsUser: true,
		},
	},
	{
		path: '/my_previous_tours_guide',
		name: 'My_previous_tours_guide',
		meta: {
			needsUser: true,
		},
		component: () => import('../views/My_pervious_tours-guide.vue'),
	},
	{
		path: '/notifications',
		name: 'Notifications',
		meta: {
			needsUser: true,
		},
		component: () => import('../views/Notifications.vue'),
	},
	{
		path: '/messages',
		name: 'Messages',
		meta: {
			needsUser: true,
		},
		component: () => import('../views/Messages.vue'),
	},
	{
		path: '/msg_preview',
		name: 'Msg_preview',
		meta: {
			needsUser: true,
		},
		component: () => import('../views/Msg_preview.vue'),
	},
	{
		path: '/user_profile',
		name: 'User_profile',
		meta: {
			needsUser: true,
		},
		component: () => import('../views/User_profile.vue'),
	},
	{
		path: '/user_page',
		name: 'User_page',
		meta: {
			needsUser: true,
		},
		component: () => import('../views/User_page.vue'),
	},
	{
		path: '/my_guides',
		name: 'My_Guides',
		meta: {
			needsUser: true,
		},
		component: () => import('../views/My_guides.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	const noUser = store.currentUser === null;

	if (noUser && to.meta.needsUser) {
		next('');
	} else {
		next();
	}
});

export default router;
