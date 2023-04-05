// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"
import CountriesList from "../components/CountriesList.vue"
import CountryDetails from "../components/CountryDetails.vue"



const routes = [
  {
    path: "/",
    name: "list",
    component: CountriesList,
    children: [
      {
        path: "/:alpha3Code",
        name: "list",
        component: CountryDetails,
      },
    ],
  },
  {
    path: "/HomeView",
    component: HomeView,
  }
];

export default createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});
