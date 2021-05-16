require("./bootstrap");

import Vue from "vue";
import Sidebar from "./layout/Sidebar";
import AppFooter from "./layout/Footer";
import AppHeader from "./layout/Header";
import ScrollTop from "./layout/ScrollTop";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

let router = new VueRouter({
    routes: routes,
    mode: "history"
});

new Vue({
    el: "#app",
    components: {
        ScrollTop,
        AppHeader,
        Sidebar,
        AppFooter
    },
    router
});
