<template>
    <div class="container mx-auto mr-4">
      <SearchBar @keyword="setKeyword" />
      <div class="grid grid-cols-3 gap-4">
        <ImageGrid :imageList="keyword.length > 0 ? getSearchedImages : getAllImages" v-if="getAllImages || getSearchedImages" />
      </div>
      <ul class="space-x-4 ml-96">
        <li v-for="i in pageCount" :key="i" class="inline">
          <a
            class="
              cursor-pointer
              hover:text-red-500
              hover:underline
              text-blue-600
              visited:text-purple-600
            "
            @click="perPageData(i-1)"
            >{{ i }}</a
          >
        </li>
      </ul>
    </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "../../components/SearchBar.vue"
import ImageGrid from "../../components/ImageGrid.vue";
import {mapActions, mapGetters} from "vuex"
export default {
  name: "Home",
  components: {
    ImageGrid,
    SearchBar,
  },
  data() {
    return {
      keyword: "",
      pageCount: 10,
      currentPage: 0
    };
  },
  mounted() {
    this.perPageData(1)
  },
  computed: {
    ...mapGetters(["getAllImages", "getSearchedImages"])
  },
  methods: {
    ...mapActions(["fetchAllImages", "fetchSearchImages"]),

    perPageData(i) {
      this.currentPage = i ;
      this.fetchAllImages(i).then(()=>{
        // add loader code here
      })
    },
    setKeyword(keyword) {
      this.keyword = keyword
      this.fetchSearchImages({keyword: keyword,index: this.currentPage})
    }
  },
};
</script>
