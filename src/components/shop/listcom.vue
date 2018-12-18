<template>
  <div class="listcom-box">
    <div class="goods-list">
      <img src="https://i8.mifile.cn/b2c-mimall-media/62d3f3e0dc091041ee44c5f29e31c19b.png" alt>
      <h2>小米（Mi）小米Note 16G双网通版</h2>
      <div class="goods-text">
        <p class="Price">
          <span class="now">￥899</span>
          <span class="old">
            <del>￥999</del>
          </span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余：60件</span>
        </p>
      </div>
    </div>
    <div class="goods-list">
      <img src="https://i8.mifile.cn/b2c-mimall-media/62d3f3e0dc091041ee44c5f29e31c19b.png" alt>
      <h2>小米（Mi）小米Note 16G双网通版</h2>
      <div class="goods-text">
        <p class="Price">
          <span class="now">￥899</span>
          <span class="old">
            <del>￥999</del>
          </span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余：60件</span>
        </p>
      </div>
    </div>
    <div class="goods-list">
      <img src="https://i8.mifile.cn/b2c-mimall-media/62d3f3e0dc091041ee44c5f29e31c19b.png" alt>
      <h2>小米（Mi）小米Note 16G双网通版</h2>
      <div class="goods-text">
        <p class="Price">
          <span class="now">￥899</span>
          <span class="old">
            <del>￥999</del>
          </span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余：60件</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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

