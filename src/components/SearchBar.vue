<template>
    <div class="w-96 ml-96 py-4">
      <div class="flex border-b py-2">
        <input
          class="
            appearance-none
            bg-transparent
            border-none
            w-full
            text-gray-700
            mr-3
            py-1
            px-2
            leading-tight
            focus:outline-none
          "
          type="text"
          v-model="keyword"
          @input="$emit('keyword', keyword)"
        />
        <button
          class="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
          "
          @click="$emit('keyword', keyword)"  
        > 
          Search
        </button>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                keyword: ""
            }
        }
    }
</script>

<style scoped>

</style>