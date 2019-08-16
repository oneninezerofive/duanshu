<template>
  <el-carousel :interval="5000" arrow="always" indicator-position="none" height="360px">
    <el-carousel-item v-for="item in 3" :key="item">
      <div class="box" >
        <a
          data-v-4aaf68c4
          href="https://school.duanshu.com/hotspot/article_533"
          title="知识付费已经凉凉？你看不到的冰山才是真相"
          target="_blank"
          class="item"
           v-for="(n,index1) in yanshen.data1" :key="index1"
        >
          <p data-v-4aaf68c4 class="m" v-text="n.title"></p>
          <p data-v-4aaf68c4 class="s" v-text="n.state"></p>
          <div data-v-4aaf68c4 class="extend-bar">
            <div data-v-4aaf68c4 class="link">查看详情</div>
            <img data-v-4aaf68c4 :src="n.imgurl" />
          </div>
        </a>
        <!-- <a  data-v-4aaf68c4
          href="https://school.duanshu.com/hotspot/article_533"
          title="知识付费已经凉凉？你看不到的冰山才是真相"
          target="_blank"
          class="item" >
          <p data-v-4aaf68c4 class="m">知识付费已经凉凉？你看不到的冰山才是真相</p>
          <p  data-v-4aaf68c4
            class="s" >以我们熟知的《简七理财笔记》、《精英日课》理财、职场相关的课程，在过去两年很多后关注，明星示范效应使得同类课程在每个平台大量涌现，知识付费平台及内容的主流评价开始由盛转衰，媒体关于“知识付费”相关报道</p>
          <div data-v-4aaf68c4 class="extend-bar">
            <div data-v-4aaf68c4 class="link">查看详情</div>
            <img data-v-4aaf68c4
              src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/intro/s5/logo_duanshu.png" />
          </div>
        </a>
        <a  data-v-4aaf68c4
          href="https://school.duanshu.com/hotspot/article_533"
          title="知识付费已经凉凉？你看不到的冰山才是真相"
          target="_blank"
          class="item" >
          <p data-v-4aaf68c4 class="m">知识付费已经凉凉？你看不到的冰山才是真相</p>
          <p  data-v-4aaf68c4
            class="s" >以我们熟知的《简七理财笔记》、《精英日课》理财、职场相关的课程，在过去两年很多后关注，明星示范效应使得同类课程在每个平台大量涌现，知识付费平台及内容的主流评价开始由盛转衰，媒体关于“知识付费”相关报道</p>
          <div data-v-4aaf68c4 class="extend-bar">
            <div data-v-4aaf68c4 class="link">查看详情</div>
            <img data-v-4aaf68c4
              src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/intro/s5/logo_duanshu.png" />
          </div>
        </a>-->
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data() {
    return {
      yanshen: []
    };
  },
  async created() {
    const yanshen = await this.$axios(
      "https://www.easy-mock.com/mock/5d47cf0bb94f1f053cf8cfcb/yanshen/"
    );
    this.yanshen = yanshen.data.data;
    // console.log(yanshen.data.data);
  }
};
</script>

<style>
.box {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.box > a {
  width: 28%;
}
</style>
