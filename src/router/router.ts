import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/home/Home.vue";
import Contact from "@/views/contact/Contact.vue";

const PATHNAME_HOME = "home";
const PATHNAME_CONTACT = "contact";

const routes: RouteConfig[] = [
  { path: "/", name: PATHNAME_HOME, component: Home },
  { path: `/${PATHNAME_CONTACT}`, name: PATHNAME_CONTACT, component: Contact },
  { path: "*", component: Home },
];

export const router: VueRouter = new VueRouter({
  routes,
  mode: "history",
});
