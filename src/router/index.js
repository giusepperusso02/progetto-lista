import { createWebHistory, createRouter } from "vue-router";

import Home from "../components/Home.vue";
import dettagliApp from "../components/dettagliApp.vue";
import AlessandroManzoni from "../components/AlessandroManzoni.vue"
import GiovanniPascoli from "../components/GiovanniPascoli.vue"
import GiovanniVerga from "../components/GiovanniVerga"

const routes = [
  
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dettagliApp",
    name: "dettagliApp",
    component: dettagliApp,
  },
  {
    path: "/AlessandroManzoni",
    name: "AlessandroManzoni",
    component: AlessandroManzoni,
  },
  {
   path: "/GiovanniPascoli",
    name: "GiovanniPascoli",
    component: GiovanniPascoli,
  },
  {
    path: "/GiovanniVerga",
     name: "GiovanniVerga",
     component: GiovanniVerga,
   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;