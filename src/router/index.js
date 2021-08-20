import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  },
  {
    path: '/goods/:id',
    name: 'Goods',
    component: () => import(/* webpackChunkName: "about" */ '../views/goods/index'),
    props: true,
    children: [{
      //子路由只需要写子路由即可, 不要在前面加上父路由, 而且不能加/, 如果加上/会被识别为父路由
      path: 'detail',
      name: 'detail',
      component: () => import(/* webpackChunkName: "about" */ '../views/goods/detail'),
    },{
      path: 'spec',
      name: 'spec',
      component: () => import(/* webpackChunkName: "about" */ '../views/goods/spec'),
    },{
      path: 'service',
      name: 'service',
      component: () => import(/* webpackChunkName: "about" */ '../views/goods/service'),
    },{
      path: 'comments',
      name: 'comments',
      component: () => import(/* webpackChunkName: "about" */ '../views/goods/comments'),
    }]
  },




]

const router = new VueRouter({
  routes
})

export default router
