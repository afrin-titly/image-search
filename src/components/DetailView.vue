<template>
    <div class="my-4 mx-72 w-3/4" v-if="obj" >
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
</template>

<script>
    import {mapActions, mapGetters} from "vuex"
    export default {
        data() {
            return {
                obj: null
            }
        },
        mounted() {
            let id = this.$route.params.id
            if(id) {
                let img = this.getAllImages.find(image=> image.id == id )
                let search = this.getSearchedImages.find(image=>image.id == id)
                
                if(img) {
                    this.obj = img
                } else if (search) {
                    this.obj = search
                } else {
                    this.obj = this.getRecentImages.find(image=> image.id == id)
                }
                console.log("mounted= "+this.obj)
                this.setRecentImages(this.obj)
            }
        },
        computed: {
            ...mapGetters({
                getAllImages: "getAllImages",
                getSearchedImages: "getSearchedImages",
                getRecentImages: "layout/getRecentImages"
            })
        },
        methods: {
            ...mapActions({
                setRecentImages: "layout/setRecentImages"
            }),
        },
    }
</script>

<style scoped>

</style>