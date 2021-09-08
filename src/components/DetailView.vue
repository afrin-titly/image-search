<template>
    <div v-if="obj">
        <h1>Details</h1>
        <img :src="obj.urls.small">
        <p>{{obj.desc}}</p>
        <p>{{obj.likes}}</p>
        <p>{{obj.created_at}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                obj:null,
                imgpath:null,
            }
        },
        props: ["item"],
        computed: {
            // imagePath: {
            //     // return this.obj.urls['small']
            //     get() {
            //         return this.obj.urls['small']
            //     },
            //     set(value) {
            //         this.obj.urls['small'] = value
            //         return value
            //     }
            // }
        },
        mounted() {
            this.obj = JSON.parse(this.$route.params.item)
            
            // if(this.obj){
            //     let img=this.$refs.image;
            //     img.src=this.obj.urls.small;
            //     console.log(this.obj.urls,img)
            // }
            // console.log(this.obj.urls.small)
            //this.imagePath = this.obj.urls.small
        }
    }
</script>

<style scoped>

</style>