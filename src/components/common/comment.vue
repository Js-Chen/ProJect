<template>
  <div>
    <h4 class="pl-title">评论内容</h4>
    <textarea placeholder="请输入评论内容" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="add">添加评论</mt-button>
    <div v-for="(item,index) in list" :key="index">
      <div class="username">第{{index + 1}}楼 &nbsp;&nbsp;&nbsp;&nbsp; {{item.user_name}}</div>
      <div class="content">{{item.content}}</div>
    </div>

    <mt-button type="danger" plain size="large" @click="addmore">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      index: 1, //显示第一页评论
      msg: "", //获取评论数据
      list: []
    };
  },
  props: ["id"],
  methods: {
    add() {
      if (this.msg === "") {
        Toast({
          message: "请输入要BB的内容！",
          position: "middle",
          duration: 3000
        });
        return false;
      }
      this.$http.post("api/postcomment/" + this.id,{content:this.msg}).then(result=>{
        this.list.unshift({
         add_time:new Date(),
         content:this.msg,
         user_name:'小黑'
        })
         this.msg = "",
        Toast({
          message: "评论成功",
          position: "middle",
          duration: 3000
        });
      })
    },
    addmore() {
      (this.index += 1), this.getList();
    },
    getList() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.index)
        .then(result => {
          this.list = this.list.concat(result.body.message);
        });
    }
  },
  created() {
    this.getList();
  }
};
</script>
<style lang="scss" scoped>
.pl-title::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 20px;
  margin-right: 10px;
  vertical-align: text-top;
  background-color: tomato;
}
.username {
  height: 24px;
  background-color: #eee;
  border-bottom: 1px dashed #ccc;
  font-size: 14px;
  line-height: 24px;
}
.content {
  padding: 10px;
}
</style>
