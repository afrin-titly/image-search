<template>
<div class="container mx-auto">
  <div class="w-96 ml-96 py-4">
    <div class="flex border-b py-2">
      <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
             type="text" v-model="keyword">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="fetchSearchImages"> Search </button>
    </div>
    <!-- <ul>
      <li v-for="(item,key) in list" :key="key" >
        <img :src="item.urls['small']" alt="">
      </li>
    </ul> -->
  </div>
  <div class="grid grid-cols-3 gap-4">
    <ImageGrid :imageList="list" />
  </div>
</div>
  
  
</template>

<script>
// @ is an alias to /src
import ImageGrid from '../components/ImageGrid.vue'
export default {
  name: 'Home',
  components: {
    ImageGrid,
  },
  data() {
    return {
      keyword: '',
      list: [],
    }
  },
  mounted() {
    this.fetchAllImages()
  },
  methods: {
    fetchSearchImages() {
      this.$axios.get("https://api.unsplash.com/search/photos/?query="+this.keyword+"&per_page=30",{
        headers: { 'Authorization': "Client-ID hBg14AILvY2jH_enddDGHpX6CTdf-u9MyxwHz8BlR5k"},
      },
      ).then(response=>{
        console.log(response.data)
        this.list = response.data.results
      }).catch(error=>{
        console.log(error)
      })
    },
    fetchAllImages() {
        this.$axios.get("https://api.unsplash.com/photos/?page=1&per_page=30",{
        headers: { 'Authorization': "Client-ID hBg14AILvY2jH_enddDGHpX6CTdf-u9MyxwHz8BlR5k"},
        }).then(response=>{
          this.list = response.data
        }).catch(error=>{
          console.log(error)
        })
    }
  }
}
</script>
