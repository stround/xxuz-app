import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import Login from './components/login.vue'
import Register from './components/register.vue'
import Goodslist from './components/goodslist.vue'
import Goodsinfo from './components/goodsinfo.vue'
import Shoplist from './components/shoplist.vue'
import Notfound from './components/notfound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/home"},
    {path:'/home',component:Home},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'/goodslist',component:Goodslist},
    {path:'/goodsinfo/:id',component:Goodsinfo},
    {path:'/shoplist',component:Shoplist},
    {path:'/notfound',component:Notfound},
  ]
})
