<template>
  <div class="container mx-auto">
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
          @input="keyword.length > 0 ? fetchSearchImages() : fetchAllImages()"
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
          @click="keyword.length > 0 ? fetchSearchImages() : fetchAllImages()"
        >
          Search
        </button>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <ImageGrid :imageList="perPage" v-if="perPage" />
    </div>
    <ul class="space-x-4 ml-96">
      <li v-for="i in pageCnt" :key="i" class="inline">
        <a
          class="
            cursor-pointer
            hover:text-red-500
            hover:underline
            text-blue-600
            visited:text-purple-600
          "
          @click="perPageData(i)"
          >{{ i }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageGrid from "../components/ImageGrid.vue";
import { reactive } from "vue";
export default {
  name: "Home",
  components: {
    ImageGrid,
  },
  data() {
    return {
      keyword: "",
      list: reactive([]),
      perPage: [],
      test: [],
      pageCnt:10,
    };
  },
  mounted() {
    this.fetchAllImages().then((r) => {
      this.perPage = r[0];
      this.list=r;
      this.pageCnt=r.length;
    }).catch(err=>{
      console.log(err)
    });
  },
  methods: {
    fetchSearchImages() {
      let searchedResult = []
      var searchImgs;
      for (var i = 1; i <= 10; i++) {
        let searched = new Promise((resolve, reject)=>{
          this.$axios
          .get(
            "https://api.unsplash.com/search/photos/?page=" +
              i +
              "&query=" +
              this.keyword +
              "&per_page=30",
            {
              headers: {
                Authorization:
                  "Client-ID hBg14AILvY2jH_enddDGHpX6CTdf-u9MyxwHz8BlR5k",
              },
            }
          )
          .then((response) => {
            searchImgs = response.data.results;
            resolve(searchImgs)
          })
          .catch((error) => {
            console.log(error);
            reject(error)
          });
        })
        searchedResult.push(searched)
        Promise.all(searchedResult).then(response=>{
          this.list = response
          this.perPage = response[0]
        })
        .catch(error=>{
          console.log(error)
        })
      }
    },
    fetchAllImages() {
      return new Promise((resolve1, reject1) => {
        this.list = [];
        //let lst=[];
        let proms = [];
        for (var i = 1; i <= 5; i++) {
          let prom = new Promise((resolve, reject) => {
            this.$axios
              .get(
                "https://api.unsplash.com/photos/?page=" + i + "&per_page=30",
                {
                  headers: {
                    Authorization:
                      "Client-ID hBg14AILvY2jH_enddDGHpX6CTdf-u9MyxwHz8BlR5k",
                  },
                }
              )
              .then((response) => {
                let data = response.data;
                resolve(data);
              })
              .catch((error) => {
                console.log(error);
                reject(error);
              });
          });
          proms.push(prom);
        }
        Promise.all(proms).then((r) => {
          resolve1(r);
        }).catch(error =>{
          reject1(error)
        });
      });
    },
    perPageData(i) {
      this.perPage = this.list[i - 1];
    },
  },
};
</script>
