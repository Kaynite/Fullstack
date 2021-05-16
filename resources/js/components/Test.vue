<template>
    <div>
        sss
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "Kareem",
            number: 0,
            posts: [],
            status: true,
            text: ""
        };
    },
    methods: {
        increment() {
            this.number++;
        }
    },
    created() {
        this.posts = [
            { title: "Title 1", body: "Body of Title 1" },
            { title: "Title 2", body: "Body of Title 2" },
            { title: "Title 3", body: "Body of Title 3" },
            { title: "Title 4", body: "Body of Title 4" }
        ];
    }
};
</script>

<style></style>
