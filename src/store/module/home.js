
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
        fetchAllImages({commit}, keyword) {
           let images = []
           let url = ""
           console.log(keyword)
           return new Promise((resolve1)=>{  
            for(let i=1; i<=5; i++){
                if(keyword.length > 0){
                    url = "https://api.unsplash.com/search/photos/?page=" + i +"&query=" + keyword + "&per_page=30"
                }else {
                    url = "https://api.unsplash.com/photos/?page=" + i + "&per_page=30"
                }
                let imgs = new Promise((resolve, reject)=>{
                axios.get(url)
                .then((response)=>{
                    if(keyword.length > 0){
                        resolve(response.data.results)
                    }else{
                        resolve(response.data)
                    }
                })
                .catch((error)=>{
                    reject(error)
                })
                })
                images.push(imgs)
            }
            Promise.all(images).then(response=>{
                commit("setAllImages", response)
                console.log(response)
            })
            .then(response=>{
                resolve1(response)
            })
           })
        },
        findSingleImage({state}, id) {
            let image
            return new Promise((resolve, reject)=>{
                for(let i=0;i<state.allImages.length;i++){
                    image = state.allImages[i].filter(image=>{
                        if(image.id == id){
                            resolve(image)
                        }
                    })
                    .catch((error)=>{
                        reject(error)
                    })
                    if(image.length == 1){
                        break
                    }
                }
            })
        }
        
    }
}
export default images