import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Auth from "./pages/Auth.vue";
import ListingDetails from "./pages/ListingDetails.vue";
import CreateEditListing from "./pages/CreateEditListing.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/auth", name: "Auth", component: Auth },
    { path: "/listing/:id", name: "ListingDetails", component: ListingDetails },
    { path: "/edit/:id?", name: "CreateEditListing", component: CreateEditListing },
  ],
});
