
import axios from "../../plugins/axios_plugin"
const images = {
    state: {
        allImages: [],
        searchedImages: []
    }, 
    getters: {
        getAllImages: (state) =>{
            return state.allImages
        },
        getSearchedImages: (state) => {
            return state.searchedImages
        }
    },
    mutations: {
        setAllImages: (state, payload) => {
            state.allImages = payload
        },
        setSearchedImages: (state, payload) => {
            state.searchedImages = payload
        }
    },
    actions: {
        fetchAllImages({commit},index) {
           return new Promise((resolve, reject)=>{
                let url = "https://api.unsplash.com/photos/?page=" + index + "&per_page=30"
                axios.get(url)
                .then((response)=>{
                        resolve(response.data)
                        commit('setAllImages', response.data)
                })
                .catch((error)=>{
                    reject(error)
                })
           })
        },
        fetchSearchImages({commit}, {keyword, index}) {
           return new Promise((resolve, reject)=>{
                let url = "https://api.unsplash.com/search/photos/?page=" + index +"&query=" + keyword + "&per_page=30"
                axios.get(url)
                .then((response)=>{
                    resolve(response.data.results)
                    commit('setSearchedImages', response.data.results)
                })
                .catch((error)=>{
                    reject(error)
                })
           })
        }
    }
}
export default images