import Vue from "vue"
//路由模块入口
import VueRouter from "vue-router";
//导入组件
import home from "./components/tabbar/Home.vue"
import message from"./components/tabbar/Info.vue"
import settings from"./components/tabbar/Settings.vue"
import shopcar from"./components/tabbar/Shopcar.vue"
import newsinfo from"./components/news/newsInfo.vue"
import newslist from "./components/news/newsList.vue"
//把导入的vue-router注册到vue实例上
Vue.use(VueRouter)
var Router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/message',component:message},
        {path:'/settings',component:settings},
        {path:'/shopcar',component:shopcar},
        {path:'/home/newsinfo',component:newsinfo},
        {path:'/home/newslist/:id',component:newslist},
    ],
    linkActiveClass:'mui-active'
})
export default Router
