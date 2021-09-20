import router from "./router/index.js"
import store from "./store/module/login.js"

router.beforeEach((to, from, next)=>{
    // if(to.name == "Auth"){
    //     next({name: "error"})
    // }
    // else {
    //     next()
    // }
    console.log(store.state.isLoggedIn)

    if (store.state.isLoggedIn) {
        if(to.name == "login"){
            next()
        } else {
            next()
        }
    } 
    else {
        if(to.name != "login" && !store.state.isLoggedIn){
            next({name: "login"})
        } else next()
    }
    
})
