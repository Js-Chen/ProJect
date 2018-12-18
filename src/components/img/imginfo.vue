<template>
  <div class="list-box">
    <h5 class="news-title">{{list.title}}</h5>
    <p class="timeBox">
      <span>时间：{{list.add_time | getDate }}</span>
      <span>次数:{{list.click}}</span>
    </p>
    <div class="line"></div>
    <div class="list-img">
      <vue-preview :slides="imgList"></vue-preview>
    </div>
    <div v-html="list.content" class="content-text"></div>
    <common :id="id"></common>
  </div>
</template>
<script>
import common from "../common/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      slide1: [
        {
          src: "",
          msrc: "",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },
        {
          src: "",
          msrc: "",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        }
      ],
      list: [],
      imgList: []
    };
  },
  methods: {
    getInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.list = result.body.message[0];
        }
      });
    },
    getImgList() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        result.body.message.forEach(item => {
          item.msrc = item.src;
          item.w = 900;
          item.h = 900;
        });
        this.imgList = result.body.message;
      });
    }
  },
  created() {
    this.getInfo();
    this.getImgList();
  },
  components: {
    common: common
  }
};
</script>
<style lang="scss">
.content-box {
  ul,
  li {
    padding: 0;
    margin: 0;
    img {
      width: 100%;
    }
  }
  .clearfix:after {
    content: "";
    display: block;
    visibility: hidden;
    clear: both;
  }
  .proImg {
    margin-bottom: 10px;
  }
  .proImg li {
    float: left;
    flex: 2;
    margin-right: 10px;
    flex-wrap: wrap;
    margin-top: 10px;
    width: 77px;
    height: 77px;
  }
}
.content-text {
  font-size: 13px;
}
</style>
