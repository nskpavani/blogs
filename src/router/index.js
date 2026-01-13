import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import SignupPage from "../pages/SignupPage.vue";
import ReadinessPage from "../pages/ReadinessPage.vue";
import ConfirmationPage from "../pages/ConfirmationPage.vue";
import DashboardPage from "../pages/DashboardPage.vue";

const routes = [
  { path: "/", name: "landing", component: LandingPage },
  { path: "/signup", name: "signup", component: SignupPage },
  { path: "/readiness", name: "readiness", component: ReadinessPage },
  { path: "/confirmation", name: "confirmation", component: ConfirmationPage },
  { path: "/dashboard", name: "dashboard", component: DashboardPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
