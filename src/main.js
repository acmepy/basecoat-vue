import { createApp } from 'vue';
import './css/style.css';
import 'basecoat-css/all';
import App from './App.vue';
import router from './js/router';
import './components/ui/js/preloader.js';
//import preloader from "./js/preloader.js";

createApp(App)
  .use(router)
  //.use(preloader)
  .mount('#app');
