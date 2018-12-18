<template>
  <div class="shopinfo-box">
    <div class="mui-card">
        <!-- 放置swiper模块 -->
        <swiper :list="list"></swiper>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{infolist.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>市场价格：<span class="old">￥{{infolist.market_price}}</span>&nbsp;&nbsp;销售价格：<span class="now">￥{{infolist.sell_price}}</span></p>
          <div class="purchaseNum">
            <p>购买数量：</p>
          </div>
          <mt-button type="primary" size="small">立即购买</mt-button>
          &nbsp;
          <mt-button type="danger" size="small">加入购物车</mt-button>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{infolist.goods_no}}</p>
          <p>商品库存：{{infolist.stock_quantity}}</p>
          <p>上架时间：{{infolist.add_time | getDate}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>商品详情</mt-button>
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
//导入swiper模块
import swiper from "../common/swiper.vue"
export default {
  data(){
    return {
      id:this.$route.params.id,
      list:[],
      infolist:[]
    }
  },
  methods:{
    getImg(){
      this.$http.get("api/getthumimages/" + this.id).then(res=>{
        this.list = res.body.message
      })
    },
    getInfoList(){
      this.$http.get("api/goods/getinfo/" + this.id).then(res=>{
        this.infolist = res.body.message[0]
      })
    }
  },
  created(){
    this.getInfoList(),
    this.getImg()
  },
  components:{
    swiper:swiper
  }
};
</script>
<style lang="scss" scoped>
.shopinfo-box{
  .old{
      text-decoration:line-through;
  }
  .now{
    font-size:16px;
    font-weight: 600;
    color:red;
  }
.mui-card-footer{
  display: block;
  button{
    margin:8px 0;
  }
}
}
</style>
