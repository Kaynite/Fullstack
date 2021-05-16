<template>
    <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
            <Sidebar></Sidebar>
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                <AppHeader></AppHeader>
                <router-view></router-view>
                <AppFooter></AppFooter>
            </div>
        </div>
    </div>
</template>

<script>

import Sidebar from "../layout/Sidebar";
import AppFooter from "../layout/Footer";
import AppHeader from "../layout/Header";

export default {
    name: "App",
    components: {
        Sidebar,
        AppHeader,
        AppFooter
    }
};
</script>
