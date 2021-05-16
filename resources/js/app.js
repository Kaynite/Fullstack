require("./bootstrap");

import Vue from "vue";
import App from './components/App'
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
        App,
        ScrollTop,
    },
    router
});
