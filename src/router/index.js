import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
import SheepsList from '@/components/SheepsList';
// import Vuetify from 'vuetify/lib';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Bem-vindo!',
      component: Welcome,
    },
    {
      path: '/list',
      name: 'Listar Ovelhas',
      component: SheepsList,
    },
  ],
});
