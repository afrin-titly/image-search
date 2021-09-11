import axios from "../../plugins/axios_plugin"
const images = {
    state: {
        allImages: {}
    }, 
    getters: {
        getAllImages: (state) =>{
            return state.allImages
        }
    },
    mutations: {
        setAllImages: (state, payload) => {
            state.allImages = payload
        }
    },
    actions: {
        fetchAllImages({commit}) {
           let images = []
           return new Promise((resolve1)=>{  
            for(let i=1; i<=5; i++){
                let imgs = new Promise((resolve, reject)=>{
                axios.get("https://api.unsplash.com/photos/?page=" + i + "&per_page=30",)
                .then((response)=>{
                 resolve(response.data)
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
        }
    }
}
export default images