import Vue from 'vue'
import VueRouter from 'vue-router'
// 二级路由
import Layout from '@/views/layout'
import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'

// 登陆权证
import store from '@/store'

// 一级路由
const Login = () => import('@/views/login')
const Search = () => import('@/views/search')
const SearchList = () => import('@/views/search/list')
const ProDetail = () => import('@/views/prodetail')
const Pay = () => import('@/views/pay')
const MyOrder = () => import('@/views/myorder')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: '/home', component: Home },
        { path: '/category', component: Category },
        { path: '/cart', component: Cart },
        { path: '/user', component: User }
      ]
    },
    { path: '/login', component: Login },
    { path: '/search', component: Search },
    { path: '/searchlist', component: SearchList },

    { path: '/prodetail/:id', component: ProDetail },
    { path: '/pay', component: Pay }, // 动态路由传参，路由参数中携带 id
    { path: '/myorder', component: MyOrder }
  ]
})
// 全局前置导航守卫
const authUrls = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  // 不需要登陆权证
  if (!authUrls.includes(to.path)) {
    next() // 所有的页面都直接放行
    return
  }
  // 需要登陆权证
  const token = store.getters.token
  if (token) {
    next() // token正确， 放行
  } else {
    next('/login') // token不正确， 让用户登录
  }
})

export default router
