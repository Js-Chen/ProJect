<template>
  <div class="news-box">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
        <a href="javascript:;" class>
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h3 class="newsTitle">{{item.title}}</h3>
            <p class="mui-ellipsis">
              <span>时间:{{item.add_time}}</span>
              <span>点击:{{item.click}}次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newlist: []
    };
  },
  methods: {
    getlist() {
      this.$http.get("api/getnewslist").then(res => {
        this.newlist = res.body.message;
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
  .newsTitle {
    font-size:14px;
    color:#f40
  }
}
</style>


