<template>
  <div class="spokesman">
    <el-carousel :interval="3000" arrow="always" indicator-position="outside" height="360px">
      <el-carousel-item v-for="(item,index) in spokesman" :key="index">
        <!-- <div data-v-2509c11a="" class="swiper-slide" data-swiper-slide-index="1" style="width: 1200px;"> -->
        <img
          data-v-2509c11a
          :src="item.imgurl"
          class="avatar"
        />
        <div data-v-2509c11a class="content-wrapper">
          <img
            data-v-2509c11a
            src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/intro/spokesman/quote.png"
            class="icon"
          />
          <div data-v-2509c11a class="brief" v-text="item.title"></div>
          <div data-v-2509c11a class="name-wrapper">
            <span data-v-2509c11a class="name" v-text="item.name"> </span>
            <span data-v-2509c11a class="tag" v-text="item.tag"></span>
          </div>
        </div>
        <!-- </div> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      spokesman:[]
    }
  },
  async created () {
    const spokesman= await this.$axios('https://www.easy-mock.com/mock/5d478aca378f4607c6ba0f54/');
    this.spokesman= spokesman.data.data
    
  }
}
</script>

<style>
.avatar{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}
.el-carousel__button{
 width: 10px;
 height: 10px;
 border-radius: 5px;
}
.el-carousel__indicators--outside button{
  background: #007AFF;
}
</style>

