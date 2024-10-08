import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
import FamilyMemberSingup from '../views/FamilyMemberSingup.vue';
import GuardianSignup from '../views/GuardianSignup.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
    {
      path: '/signup/family-member',
      name: 'family-member',
      component: FamilyMemberSingup,
    },
    {
      path: '/signup/guardian',
      name: 'guardian',
      component: GuardianSignup,
    },
  ],
});

export default router;
