import { createRouter, createWebHistory } from 'vue-router';

// Importa tus componentes
import Home from '../docs/home.vue';
import Introduction from '../docs/introduction.vue';
import Crud from '../pages/crud.vue';
// ... importa los demás

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/introduction', name: 'Introduction', component: Introduction },
  { path: '/crud', name: 'Crud', component: Crud },
  // ... agrega los demás aquí
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
