<template>
  <div class="listcom-box">
    <div class="goods-list" v-for="item in shoplist" :key="item.id" @click="goInfo(item.id)">
      <img :src="item.img_url" alt>
      <!--犯错两次，src地址没有花括号，src属性v-bind-->
      <h2>{{item.title}}</h2>
      <div class="goods-text">
        <p class="Price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">
            <del>￥{{item.market_price}}</del>
          </span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余：{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" plain size="large" @click="getmore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 1,
      shoplist: []
    };
  },
  methods: {
    getshoplist() {
      this.$http.get("api/getgoods?pageindex=" + this.index).then(res => {
        this.shoplist = this.shoplist.concat(res.body.message);
      });
    },
    getmore() {
      (this.index += 1), this.getshoplist();
    },
    goInfo(id) {
      this.$router.push({name:'shopinfo',params:{id:id}})
    }
  },
  created() {
    this.getshoplist();
  }
};
</script>
<style lang="scss" scoped>
.listcom-box {
  padding: 0 7px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .goods-list {
    width: 49%;
    border: 1px solid #ccc;
    padding: 2px;
    margin: 5px 0;
    box-shadow: 0 0 5px #ccc;
    justify-content: space-between; //元素对齐
    min-height: 293px;
    display: flex;
    flex-direction: column; //纵向排列
    h2 {
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }
    img {
      width: 100%;
    }
  }
  .goods-text {
    p {
      padding: 5px;
      margin-bottom: 0;
    }
    .sell {
      font-size: 13px;
      display: flex;
      justify-content: space-between;
    }
    background-color: #eee;
    .now {
      font-size: 16px;
      color: #f40;
      font-weight: 600;
    }
    .old {
      font-size: 14px;
      color: #999;
      padding-left: 20px;
      padding-top: 10px;
    }
  }
}
</style>

