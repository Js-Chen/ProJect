import Vue from "vue"
//路由模块入口
import VueRouter from "vue-router";
//导入组件
import home from "./components/Home.vue"
import message from"./components/Info.vue"
import settings from"./components/Settings.vue"
import shopcar from"./components/Shopcar.vue"
//把导入的vue-router注册到vue实例上
Vue.use(VueRouter)
var Router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/message',component:message},
        {path:'/settings',component:settings},
        {path:'/shopcar',component:shopcar},
    ],
    linkActiveClass:'mui-active'
})
export default Router
