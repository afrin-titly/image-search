<template>
    <div>
        <h1>Details</h1>
        <img :src="obj.urls['small']" >
        <p>{{obj.desc}}</p>
        <p>{{obj.likes}}</p>
        <p>{{obj.created_at}}</p>
        {{obj.id}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                obj: {}
            }
        },
        props: ["item"],
        mounted() {
            this.obj = JSON.parse(this.$route.params.item)
        }
    }
</script>

<style scoped>

</style>