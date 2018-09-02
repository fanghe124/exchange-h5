import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
// import store from './../store'

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    routes
})

// router.beforeEach((to, from, next) => {
//   // 设置标题
//   document.title = to.meta.title
//   store.commit('UPDATE_TITLE', to.meta.title)
//   // loading
//   store.commit('UPDATE_LOADING', true)
//   if (to.matched.some(r => r.meta.requireAuth)) {
//     if (localStorage.token) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     }
//   } else {
//     next()
//   }
// })
//
// router.afterEach(function(to) {
//   setTimeout(() => {
//     store.commit('UPDATE_LOADING', false)
//   }, 300)
// })

export default router
