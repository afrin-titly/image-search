<template>
    <div class="container mx-auto mr-4">
      <SearchBar @keyword="fetchAllImages($event)" />
      <div class="grid grid-cols-3 gap-4">
        <ImageGrid :imageList="getAllImages[currentPage]" v-if="getAllImages" />
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
            @click="perPageData(i)"
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
      pageCount: 0,
      currentPage: 0
    };
  },
  mounted() {
    this.fetchAllImages(this.keyword).then(response=>{
      this.pageCount = this.getAllImages.length
      console.log(response)
    })
  },
  computed: {
    ...mapGetters(["getAllImages"])
  },
  methods: {
    ...mapActions(["fetchAllImages"]),

    perPageData(i) {
      this.currentPage = i - 1;
    },
  },
};
</script>
