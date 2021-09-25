<template>
    <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-blue-400 shadow sm:items-baseline w-full">
        <router-link to="/"><img src="/assets/logo.png" alt="" width="45" height="45"></router-link>
        <div class="mb-2 sm:mb-0 m-auto">
            <router-link to="/" class="text-2xl no-underline text-purple-700 hover:text-white mr-4">Home</router-link> 
            <router-link to="/about" class="text-2xl no-underline text-purple-700 hover:text-white mr-4" >About</router-link>
            <router-link v-if="getUserType == 'admin'" to="/testauth" class="text-2xl no-underline text-purple-700 hover:text-white mr-4" >Auth</router-link>
            <router-link to="/logout" class="text-2xl no-underline text-purple-700 hover:text-white mr-4" @click="logoutBtn">Logout</router-link>
        </div>
        <p class="text-white">Hello {{getUserType}} user!!</p>
    </nav>
</template>

<script>
    import {mapGetters, mapActions} from "vuex"
    export default {
        computed: {
            ...mapGetters(["getUserType"]),
            ...mapActions(["logout"])
        },
        methods: {
            logoutBtn() {
                this.logout()
            }
        }
    }
</script>

<style scoped>

</style>