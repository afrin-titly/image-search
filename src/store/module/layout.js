
const recents = {
    namespaced: true,
    state: {
        max: 5,
        recentImages: []
    },
    mutations: {
        setRecentImages: (state, {payload, pos})=> {
            if(pos == true) {
                state.recentImages.splice(state.recentImages.findIndex(a => a.id === payload.id) , 1)
                state.recentImages.push(payload)
            }else {
                if(state.recentImages.length<state.max){
                    state.recentImages.push(payload)
                } 
                else {
                    state.recentImages.shift()
                    state.recentImages.push(payload)
                }
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
                    commit('setRecentImages', {payload: payload, pos: false})
                } else {
                    commit('setRecentImages', {payload: payload, pos: true})
                }
            }else {
                commit('setRecentImages', {payload: payload, pos: false})
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