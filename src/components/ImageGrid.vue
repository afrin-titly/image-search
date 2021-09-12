<template>
    <div v-for="(item,key) in imageList" :key="key" >
        <router-link v-if="item" :to="{name: 'DetailView', 
                           params:{ id: item.id,}  }">
            <img :src="item.urls['small']" alt="" >
        </router-link>
        
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
