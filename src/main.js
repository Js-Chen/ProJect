import Vue from 'vue'
import App from './App.vue'
import MintUi from "mint-ui"
import "mint-ui/lib/style.css"
import "./assets/mui/css/mui.min.css"
import "bootstrap/dist/css/bootstrap.css"

Vue.use(MintUi)

new Vue({
  el:'#app',
  render: h => h(App),
})
