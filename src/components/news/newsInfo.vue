<template>
  <div class="news-box">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
        <router-link :to="'/home/newslist/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h3 class="newsTitle">{{item.title}}</h3>
            <p class="mui-ellipsis">
              <span>时间:{{item.add_time |getDate}}</span>
              <span>点击:{{item.click}}次</span>
            </p>
          </div>
      </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import {Toast} from "mint-ui";
export default {
  data() {
    return {
      newlist: []
    };
  },
  methods: {
    getlist() {
      this.$http.get("api/getnewslist").then(res => {
        if(res.body.status === 0){
          this.newlist = res.body.message;
        }else{
          Toast("请求数据失败");
        }
      });
    }
  },
  created() {
    this.getlist();
  }
};
</script>
<style lang="scss" scoped>
.news-box {
  .mui-ellipsis{
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
  .newsTitle {
    font-size:14px;
    color:#333
  }
}
</style>


