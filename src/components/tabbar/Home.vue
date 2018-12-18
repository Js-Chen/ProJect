<template>
  <div class="home-box">
    <!-- swiper模块放置区 -->
    <swiper :list="list"></swiper> <!--父组件向子组件传值用属性绑定方式传递  v-bind-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="home/newsinfo">
          <img src="../../assets/images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
       </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/storewide">
           <img src="../../assets/images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/listcom">
           <img src="../../assets/images/menu3.png" alt="">
          <div class="mui-media-body">商品列表</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="">
          <img src="../../assets/images/menu4.png" alt="">
          <div class="mui-media-body">location</div>
         </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="">
          <img src="../../assets/images/menu5.png" alt="">
          <div class="mui-media-body">Search</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="">
          <img src="../../assets/images/menu6.png" alt="">
          <div class="mui-media-body">Phone</div>
       </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
// 导入swiper模块
import swiper from "../common/swiper"
export default {
  data(){
    return {
      list:[]
    }
  },
  methods:{
    getData(){
      this.$http.get("api/getlunbo").then(res =>{
        if(res.body.status === 0){
          this.list = res.body.message
        }
      })
    }
  },
  created() {
    this.getData()
  },
  components:{
    swiper
  }
};
</script>
<style lang="scss" scoped>
.home-box {
 .mui-grid-view.mui-grid-9 .mui-table-view-cell{
     border:none;
 }
 .mui-grid-view.mui-grid-9{
     background: transparent;
 }
 .mui-table-view.mui-grid-view .mui-table-view-cell img {
     width:60px;
 }
}

</style>
