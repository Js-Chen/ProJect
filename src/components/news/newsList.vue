<template>
  <div class="list-box">
    <h5 class="news-title">{{list.title}}</h5>
    <p class="timeBox">
      <span>时间：{{list.add_time | getDate}}</span>
      <span>次数：{{list.click}}次</span>
    </p>
    <div class="content-box" v-html="list.content"></div>
    <div class="line"></div>
    <comment :id="id"></comment>
  </div>
</template>
<script>
import comment from "../common/comment.vue"
export default {
  data() {
    return {
      id: this.$route.params.id,
      list: []
    };
  },
  methods: {
    getList() {
      this.$http.get("api/getnew/" + this.id).then(res => {
        this.list = res.body.message[0];
      });
    }
  },
  created() {
    this.getList();
  },
  components:{
      comment
  }
};
</script>
<style lang="scss">
.list-box {
  padding: 0 10px;
  padding-bottom: 50px;
  .timeBox {
    display: flex;
    font-size: 12px;
    justify-content: space-between;
  }
  .news-title {
    padding: 10px 0;
    font-size: 16px;
    text-align: center;
    color: red;
  }
  .content-box p{
      color:#333
  }
  .line {
      border-bottom:1px dashed #ccc;
      height:0;
  }
}
</style>
