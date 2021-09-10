<template>
    <div class="my-4 mx-72 justify-center" v-if="obj" >
        <img :src="obj.urls.regular">
        <p><b>Description:</b> {{obj.alt_description}}</p>
        <p><b>Likes:</b> {{obj.likes}}</p>
        <p><b>Created At:</b> {{obj.created_at}}</p>
        <h5>User Info</h5>
        <p><b>Full Name: </b> {{obj.user.name}} </p>
        <p><b>User Name: </b> {{obj.user.username}} </p>
        <p><b>User Bio: </b> {{obj.user.bio}} </p>
        <p><b>User Name: </b> <a :href="obj.user.portfolio_url" class="hover:underline text-blue-600"> {{obj.user.portfolio_url}}</a> </p>
    </div>
    <!-- {{getCurrentItem.alt_description}} -->
</template>

<script>
    export default {
        data() {
            return {
                obj:null,
            }
        },
        props: ["item"],
        mounted() {
            this.obj = this.$store.getters.getCurrentItem
        },
    }
</script>

<style scoped>

</style>