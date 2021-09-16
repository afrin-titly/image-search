<template>
    <div class="container mx-auto mr-4">
      <SearchBar @keyword="fetchAllImages({keyword: $event,index: currentPage})" />
      <div class="grid grid-cols-3 gap-4">
        <ImageGrid :imageList="getAllImages" v-if="getAllImages" />
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
    ...mapGetters(["getAllImages"])
  },
  methods: {
    ...mapActions(["fetchAllImages"]),

    perPageData(i) {
      this.currentPage = i ;
      this.fetchAllImages({keyword:this.keyword, index:i}).then(()=>{
        // add loader code here
      })
    },
  },
};
</script>
