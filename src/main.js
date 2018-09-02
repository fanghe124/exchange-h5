// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import store from './store'
import i18n from './lang'
import App from './App'

// import { AlertPlugin, ToastPlugin } from 'vux'
/* eslint-disable import/first */

import '@/assets/css/style.scss'
import '@/assets/css/vux/vux.less'
//
// Vue.use(AlertPlugin)
// Vue.use(ToastPlugin)

Vue.use({
    i18n: (key, value) => i18n.t(key, value)
})

FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
