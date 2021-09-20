const login = {
    state: {
        userType: "",
        isLoggedIn: false
    },
    mutations: {
        changeLoginStatus: (state, payload) => {
            if(payload == "normal") {
                state.userType = "normal"
                state.isLoggedIn = true
            } else {
                state.userType = "admin"
                state.isLoggedIn = true
            }
        }
    },
    actions: {
        submitLoginForm({commit}, {username, password}) {
            if(username == 'user' && password == 'secret') {
                commit('changeLoginStatus', 'normal')
            } else if (username == 'admin' && password == 'secret123') {
                commit('changeLoginStatus', 'admin')
            } else {
                commit('changeLoginStatus', 'undefined')
            }
        }
    }, 
    getters: {
        getIsLoggedIn: (state) => {
            return state.isLoggedIn
        },
        getUserType: (state) => {
            return state.userType
        }
    }
}

export default login