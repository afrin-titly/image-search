import router from "./router/index.js"

router.beforeEach((to, from, next)=>{
    if(to.name == "Auth"){
        next({name: "error"})
    }
    else {
        next()
    }
})