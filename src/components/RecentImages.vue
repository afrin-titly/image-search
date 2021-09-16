<template>
    <div class="border border-black w-1/4 h-1/2 sm:mx-2 mx-0 mt-20 border-gray-400" v-if="getRecentImages">
        <h3 class="justify-center"> Recently viewed </h3>
        <ul >
            <li v-for="image in getRecentImages" :key="image.id" class="pb-2">
                <router-link :to="{name: 'DetailView', 
                           params:{ id: image.id,}  }">
                        <img :src="image.urls.thumb" alt="" >
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    
    export default {
        computed: {
            ...mapGetters({
                getRecentImages: "layout/getRecentImages"
            })
        }
    }
</script>

<style scoped>

</style>