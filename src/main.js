//导入vue模块
import Vue from 'vue'
//导入根组件模块
import App from './App.vue'
//导入mint-ui包
import MintUi from "mint-ui"
//导入mint-ui样式表
import "mint-ui/lib/style.css"
import router from "./router"
//导入vue-resource处理XmlHttprequest
import resource from "vue-resource"
//导入bootstarp样式
import "./assets/mui/css/mui.min.css"
import "./assets/mui/css/mui.min.css"
import "./assets/mui/css/icons-extra.css"
//把mint-ui注册到vue实例上
Vue.use(MintUi)
Vue.use(resource)
//全局配置路由根目录
Vue.http.options.root = 'http://www.liulongbin.top:3005';
//配置全局过滤器
Vue.filter("getDate",function(datestr){
  const date = new Date(datestr),
  y = date.getFullYear(),
  m = date.getMonth(),
  d = date.getDate(),
  h = date.getHours(),
  mm = date.getMinutes(),
  s = date.getSeconds();
  return `${y}-${m}-${d} ${h}:${mm}:${s}`
})
new Vue({
  router,
  el: '#app',
  render: h => h(App),
})