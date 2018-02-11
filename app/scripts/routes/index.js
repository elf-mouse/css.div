import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '../views/not-found';

Vue.use(VueRouter);

let routes = [
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
