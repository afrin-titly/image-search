<template>
    <div>
        <h1>Details</h1>
        {{this.$router.props}}
    </div>
</template>

<script>
    export default {
        props: ["obj"]
    }
</script>

<style scoped>

</style>