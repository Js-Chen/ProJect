<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list" :key="item.id">
        <!-- <img :src="item.img" alt> -->
        <img :src="item.img" alt="" class="home" v-if="item.img">
        <img :src="item.src" alt="" class="info" v-else-if="item.src">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    props:["list"] //父组件向子组件传值，子组件使用props:[]来接受传递过来的值
};
</script>
<style lang="scss" scoped>
// .mint-swipe {
//   height: 24vh;
//   img {
//     width: 100%;
//   }
// }
.mint-swipe {
  height: 24vh;
  text-align: center;
  .home {
    width: 100%;
  }
  .info {
    height: 100%;
  }
}
</style>

