import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Login.vue';
import User from '../views/User_page.vue';
import Guide from '../views/My_pervious_tours-guide.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: { hideNavigation: true } /* za skrivanje menia */,
		component: Home,
	},
	{
		path: '/login',
		name: 'Login',
		meta: { hideNavigation: true },
		component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
	},
	{
		path: '/register',
		name: 'Register',
		meta: { hideNavigation: true },
		component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
	},
	{
		path: '/guide_profile',
		name: 'Guide_profile',
		meta: {
			Guide: true /* promjeniti logiku kao sta je needsUser */,
			needsUser: true,
		},
		component: () => import(/* webpackChunkName: "about" */ '../views/Guide_profile.vue'),
	},
	{
		path: '/my_previous_tours_guide',
		name: 'My_previous_tours_guide',
		meta: {
			Guide: true,
			needsUser: true,
		},
		component: () => import(/* webpackChunkName: "about" */ '../views/My_pervious_tours-guide.vue'),
	},
	{
		path: '/notifications',
		name: 'Notifications',
		meta: {
			Guide: true,
			needsUser: true,
		},
		component: () => import(/* webpackChunkName: "about" */ '../views/Notifications.vue'),
	},
	{
		path: '/messages',
		name: 'Messages',
		meta: {
			Guide: true,
			needsUser: true,
		},
		component: () => import(/* webpackChunkName: "about" */ '../views/Messages.vue'),
	},
	{
		path: '/user_profile',
		name: 'User_profile',
		meta: {
			User: true,
			needsUser: true,
		},
		component: () => import(/* webpackChunkName: "about" */ '../views/User_profile.vue'),
	},
	{
		path: '/user_page',
		name: 'User_page',
		meta: {
			User: true,
			needsUser: true,
		},
		component: () => import(/* webpackChunkName: "about" */ '../views/User_page.vue'),
	},
	{
		path: '/my_guides',
		name: 'My_Guides',
		meta: {
			User: true,
			needsUser: true,
		},
		component: () => import(/* webpackChunkName: "about" */ '../views/My_guides.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	console.log();

	const noUser = store.currentUser === null;

	if (noUser && to.meta.needsUser) {
		next('login');
	} else {
		next();
	}
});

export default router;
