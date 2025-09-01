import { createApp } from 'vue'
import './css/style.css'
import 'basecoat-css/all'
import router from './router'
import App from './App.vue'
createApp(App).use(router).mount('#app')
