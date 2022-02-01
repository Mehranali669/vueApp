require('./bootstrap');
// require('alpinejs');

import Alpine from 'alpinejs';

import { createApp } from 'vue';
import router from './router';
import CompaniesIndex from './components/companies/CompaniesIndex';

window.Alpine = Alpine;
Alpine.start(); 
// const el = document.getElementById('app');

// console.log(el);

createApp({

	components:{
		CompaniesIndex
	}

}).use(router).mount('#app')

