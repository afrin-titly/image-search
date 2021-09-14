
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
        setRecentImages: ({commit}, payload)=> {
            commit('setRecentImages', payload)
        }
    },
    getters:  {
        getRecentImages:(state) => {
            return state.recentImages.reverse()
        }
    }
}

export default recents