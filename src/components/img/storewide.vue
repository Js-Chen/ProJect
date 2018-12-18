<template>
  <div class="store-box">
    <div
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <a class="mui-control-item mui-active">全部</a>
        <a class="mui-control-item" v-for="item in list" :key="item.id" @click="getImgList(item.id)">{{item.title}}</a>
      </div>
    </div>
    <ul class="photoList">
      <router-link :to="'/home/imginfo/' + item.id" tag="li" v-for="(item,index) in ImgList" :key="index">
       <div class="imglist">
          <img v-lazy="item.img_url">
       </div>
        <div class="photoText">
          <h3>{{item.title}}</h3>
          <div class="content-text" v-html="item.content"></div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import mui from "../../../node_modules/mui/js/mui";
import { Lazyload } from "mint-ui";
export default {
  data() {
    return {
      list: [],
      ImgList: []
    };
  },
  methods: {
    getAllnav() {
      this.$http.get("api/getimgcategory").then(result => {
        this.list = result.body.message;
      });
    },
    getImgList(id) {
      this.$http.get("api/getimages/" + id).then(result => {
        this.ImgList = result.body.message;
      });
    }
  },
  created() {
    this.getAllnav();
    this.getImgList(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
<style lang="scss">
* {
  touch-action: none;
}
.store-box {
  padding-bottom: 50px;
  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
    margin-bottom: 10px;
    .photoText {
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      position: absolute;
      bottom: 0;
      overflow: hidden;
      line-height: 18px;
      padding: 0 6px;
      h3 {
        font-size: 13px;
      }
      .content-text {
        font-size: 12px;
        color: #fff;
        max-height: 70px;
        padding-bottom: 10px;
        p {
          font-size: 12px;
          color: #fff;
        }
      }
    }
  }
  .photoList {
    .imglist{
      text-align: center;
      img {
      width: 100%;
      vertical-align: top;
    }
    }
    li{
       background-color:#ccc;
    }
    img[lazy="loading"] {  //官网显示错误image 替换成img
      width: 40px;
      height: 300px;
      margin: auto;
    }
   margin:0 15px;
  }
}
</style>
