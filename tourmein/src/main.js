import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/Global.css';
import Croppa from 'vue-croppa';
import 'vue-croppa/dist/vue-croppa.css';
import SimpleVueValidation from 'simple-vue-validator';
import VueCountryCode from 'vue-country-code-select';
import VuePaginate from 'vue-paginate';
import Raters from 'vue-rate-it';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(Croppa);
Vue.use(SimpleVueValidation);
Vue.use(VueCountryCode);
Vue.use(VuePaginate);
Vue.use(Raters)
Vue.component('star-rating', Raters.StarRating);

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
