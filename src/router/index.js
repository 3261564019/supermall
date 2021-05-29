import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from "@/views/category/Category";
import Home from "@/views/home/Home";
import Profile from "@/views/profile/Profile";
import Shopcart from "@/views/shopcart/Shopcart";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },{
    path:'/category',
    component: Category
  },{
    path:"/home",
    component: Home
  },{
    path:"/profile",
    component: Profile
  },{
    path:'/shopcart',
    component: Shopcart
  }

]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router