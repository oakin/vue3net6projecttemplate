import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import HelloWorldVue from '../components/HelloWorld.vue';

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/weather", component: HelloWorldVue },
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
});