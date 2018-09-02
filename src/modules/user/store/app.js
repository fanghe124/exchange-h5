import Cookies from 'js-cookie'

const app = {
    state: {
        language: Cookies.get('language') || 'en',
        token: ''
    },
    getters: {
        language: state => state.language
    },
    mutations: {
        SET_LANGUAGE: (state, language) => {
            state.language = language
            Cookies.set('language', language)
        }
    },
    actions: {
        setLanguage ({commit}, language) {
            commit('SET_LANGUAGE', language)
        }
    }
}

export default app
