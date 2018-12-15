<template>
  <div class="home-box">
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.id">
          <img :src="item.img" alt="">
        </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="home/newsinfo">
          <img src="../../assets/images/menu1.png" alt="">
          <div class="mui-media-body">Home</div>
       </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="">
           <img src="../../assets/images/menu2.png" alt="">
          <div class="mui-media-body">Email</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="">
           <img src="../../assets/images/menu3.png" alt="">
          <div class="mui-media-body">Chat</div>
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
};
</script>
<style lang="scss" scoped>
.home-box {
 .mint-swipe{
     height:24vh;
     img {
    width: 100%;
  }
 }
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
