import Vue from 'vue'
import Vuex from 'vuex'

import app from '@/modules/user/store/app'
import user from '@/modules/user/store/user'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        user
    }
})

export default store
