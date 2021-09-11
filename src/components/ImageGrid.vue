<template>
    <div v-for="(item,key) in imageList" :key="key" >
        <!-- <router-link @click="setItem(item)" v-if="item" :to="{name: 'DetailView', 
                           params:{ id: item.id,}  }">  -->
            <img :src="item.urls['small']" alt="" >
        <!-- </router-link> -->
        
    </div>
</template>

<script>
export default {
  name: "ImageGrid",
  props: ["imageList"],
  methods: {
      setItem(item) {
          this.$store.commit('setCurrentObject', item)
      }
  }
};
</script>

<style scoped>
</style>
