import router from "./router/index.js"
import store from "./store/module/login.js"

router.beforeEach((to, from, next)=>{

    if (store.state.isLoggedIn) {
        if(to.name == "login"){
            next()
        } 
        else if(to.name == "auth" && store.state.userType == "normal"){
            next({name: "error"})
        }
        else {
            next()
        }
    } 
    else {
        if(to.name != "login" && !store.state.isLoggedIn){
            next({name: "login"})
        } else next()
    }
    
})
