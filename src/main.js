import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './styles/tailwind.css';


const app = createApp(App)
// axios.defaults.headers.common['Authorization'] = "Client-ID hBg14AILvY2jH_enddDGHpX6CTdf-u9MyxwHz8BlR5k"
app.config.globalProperties.$axios = axios
app.config.globalProperties.$router = router
app.use(router)
app.mount('#app')
