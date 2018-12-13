//导入vue模块
import Vue from 'vue'
//导入根组件模块
import App from './App.vue'
//导入mint-ui包
import MintUi from "mint-ui"
//导入mint-ui样式表
import "mint-ui/lib/style.css"
//导入mui样式表
//导入bootstarp样式
import "./assets/mui/css/mui.min.css"
//按需导入需要的模块组件
import { Header } from 'mint-ui';
Vue.use(MintUi)
Vue.component(Header);
new Vue({
  el:'#app',
  render: h => h(App),
})
