import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './plugins/axios_plugin';
import './styles/tailwind.css';
import store from './store/index'

const app = createApp(App)
// axios.defaults.headers.common['Authorization'] = "Client-ID hBg14AILvY2jH_enddDGHpX6CTdf-u9MyxwHz8BlR5k"
app.use(router)
app.use(store)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$router = router
app.config.globalProperties.$store = store
app.mount('#app')
