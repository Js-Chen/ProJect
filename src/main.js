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
//导入mui样式表
//导入bootstarp样式
import "./assets/mui/css/mui.min.css"
import "./assets/mui/css/mui.min.css"
import "./assets/mui/css/icons-extra.css"
//把mint-ui注册到vue实例上
Vue.use(MintUi)
Vue.use(resource)
new Vue({
  router,
  el: '#app',
  render: h => h(App),
})