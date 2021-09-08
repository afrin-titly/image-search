<template>
    <div v-for="(item,key) in imageList" :key="key" >
        <!-- <router-link :to="{name: 'DetailView', 
            params: {
                id: item.id, 
                desc: item.alt_description,
                created_at: item.created_at,
                likes: item.likes,
                img: item.urls['small'],
            },
            }" >
            {{typeof(item)}}
            click me</router-link> -->
        <router-link v-if="item" :to="{name: 'DetailView', 
                           params:{
                               id: item.id,
                               item: JSON.stringify(item),
                           }  }"> click me
        </router-link>
        <img :src="item.urls['small']" alt="" >
    </div>
</template>

<script>
export default {
  name: "ImageGrid",
  props: ["imageList"],
};
</script>

<style scoped>
</style>
