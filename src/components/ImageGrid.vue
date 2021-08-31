<template>
    <div v-for="(item,key) in imageList" :key="key">
        <img :src="item.urls['small']" alt="">
    </div>
</template>

<script>
    export default {
        name: "ImageGrid",
        props: ["imageList"],
    }
</script>

<style scoped>

</style>