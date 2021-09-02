<template>
    <div v-for="(item,key) in imageList" :key="key">
        <router-link :to="{path: '/detail/'+item.id, props: {
            type: object,
            default: () => ({obj: item})}}">
            click me</router-link>
        <img :src="item.urls['small']" alt="" >
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