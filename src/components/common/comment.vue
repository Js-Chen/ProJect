<template>
  <div>
    <h4 class="pl-title">评论内容</h4>
    <textarea placeholder="请输入评论内容"></textarea>
    <mt-button type="primary" size="large">添加评论</mt-button>
    <div>
      <div class="username">第1条</div>
      <div class="content"></div>
    </div>

    <mt-button type="danger" plain size="large">加载更多</mt-button>
  </div>
</template>
<script>
export default {};
</script>
<style>
.pl-title::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 20px;
  margin-right: 10px;
  vertical-align: text-top;
  background-color:tomato;
}
</style>
