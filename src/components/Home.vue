<template>
  <div class="home-box">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../assets/images/muwu.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/shuijiao.jpg" alt>
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../assets/images/menu1.png" alt="">
          <div class="mui-media-body">Home</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
           <img src="../assets/images/menu2.png" alt="">
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
           <img src="../assets/images/menu3.png" alt="">
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../assets/images/menu4.png" alt="">
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../assets/images/menu5.png" alt="">
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../assets/images/menu6.png" alt="">
          <div class="mui-media-body">Phone</div>
        </a>
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
      this.$http.get("http://www.lovegf.cn:8899/api/getlunbo").then(res =>{
        console.log(res.body);
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
     height:30vh;
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
