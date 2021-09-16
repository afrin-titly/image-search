
import axios from "../../plugins/axios_plugin"
const images = {
    state: {
        allImages: []
    }, 
    getters: {
        getAllImages: (state) =>{
            return state.allImages
        },
    },
    mutations: {
        setAllImages: (state, payload) => {
            state.allImages = payload
        }
    },
    actions: {
        fetchAllImages({commit},{keyword, index}) {
           let url = ""
           console.log(keyword)
           return new Promise((resolve, reject)=>{
                if(keyword.length > 0){
                    url = "https://api.unsplash.com/search/photos/?page=" + index +"&query=" + keyword + "&per_page=30"
                }else {
                    url = "https://api.unsplash.com/photos/?page=" + index + "&per_page=30"
                }
                axios.get(url)
                .then((response)=>{
                    if(keyword.length > 0){
                        resolve(response.data.results)
                        commit('setAllImages', response.data.results)
                    }else{
                        resolve(response.data)
                        commit('setAllImages', response.data)
                    }
                })
                .catch((error)=>{
                    reject(error)
                })
           })
        },
    }
}
export default images