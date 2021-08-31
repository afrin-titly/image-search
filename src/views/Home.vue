<template>
<div class="container mx-auto">
  <div class="w-96 ml-96 py-4">
    <div class="flex border-b py-2">
      <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
             type="text" v-model="keyword">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="fetchSearchImages"> Search </button>
    </div>
  </div>
  <div class="grid grid-cols-3 gap-4">
    <ImageGrid :imageList="perPage" />
  </div>
  <ul class="space-x-4">
    <li v-for="i in 10" :key="i" class="inline">
      <a class="cursor-pointer hover:text-blue-500 hover:underline" @click="perPageData(i+1)">{{i}}</a>
      </li>
  </ul>
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
      perPage: [],
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
      var imgs
      for(var i=1;i<=10;i++){
        this.$axios.get("https://api.unsplash.com/photos/?page="+i+"&per_page=30",{
        headers: { 'Authorization': "Client-ID hBg14AILvY2jH_enddDGHpX6CTdf-u9MyxwHz8BlR5k"},
        }).then(response=>{
          imgs = response.data
        }).then(img=>{
          this.list.push(imgs)
          console.log(img)
        }).catch(error=>{
          console.log(error)
        })
      }
    },
    perPageData(i) {
      this.perPage = this.list[i]
    }
  }
}
</script>
