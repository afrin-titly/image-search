import { createStore } from 'vuex'
import images from '../store/module/home.js'
import layout from '../store/module/layout.js'
import login from '../store/module/login.js'

// const store = createStore({
//     state: {
//       currentItem: {}
//     },
//     getters: {
//         getCurrentItem(state){
//             return state.currentItem
//         }
//     },
//     mutations: {
//       setCurrentObject(state, payload){
//         state.currentItem = payload
//       }
//     },
//     plugins: [createPersistedState()]
// })

const store = createStore({
  modules: {
    images,
    layout,
    login,
  }
})

export default store
