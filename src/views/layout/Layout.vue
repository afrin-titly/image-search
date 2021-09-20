<template>
    <div>
        <Navbar />
        <div class="flex">
            <RecentImages />
            <router-view :key="$route.path"></router-view>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Navbar from "../../components/Navbar.vue"
    import RecentImages from "../../components/RecentImages.vue"
    import Footer from "../../components/Footer.vue"
    export default {
        name: "Layout",
        components: {
            Navbar,
            RecentImages,
            Footer,
        }
    }
</script>

<style scoped>

</style>