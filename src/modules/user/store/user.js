const user = {
    state: {
        user: 'test'
    },
    getters: {
        user: state => state
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_USER: (state, user) => {
            state.user = user
        }
    },
    actions: {}
}

export default user
