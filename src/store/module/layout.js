
const recents = {
    namespaced: true,
    state: {
        max: 3,
        recentImages: []
    },
    mutations: {
        setRecentImages: (state, payload)=> {
            if(state.recentImages.length<state.max){
                state.recentImages.push(payload)
            } 
            else {
                state.recentImages.shift()
                state.recentImages.push(payload)
            }
        }
    },
    actions: {
        setRecentImages: ({commit, state}, payload)=> {
            if(state.recentImages.length > 0){
                let i = state.recentImages.filter(image=>{
                    return image.id == payload.id
                })
                if(i.length == 0){
                    commit('setRecentImages', payload)
                }
            }else {
                commit('setRecentImages', payload)
            }
        }
    },
    getters:  {
        getRecentImages:(state) => {
            return state.recentImages.reverse()
        }
    }
}

export default recents