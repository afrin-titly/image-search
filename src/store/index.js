import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    state: {
      currentItem: {}
    },
    getters: {
        getCurrentItem(state){
            return state.currentItem
        }
    },
    mutations: {
      setCurrentObject(state, payload){
        state.currentItem = payload
      }
    },
    plugins: [createPersistedState()]
})

export default store
