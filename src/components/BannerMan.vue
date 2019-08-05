<template>
  <div class="spokesman">
    <el-carousel :interval="5000" arrow="always" indicator-position="outside" height="360px">
      <el-carousel-item v-for="item in 5" :key="item">
        <!-- <div data-v-2509c11a="" class="swiper-slide" data-swiper-slide-index="1" style="width: 1200px;"> -->
        <img
          data-v-2509c11a
          src="https://duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/intro/spokesman/tinrry.png"
          class="avatar"
        />
        <div data-v-2509c11a class="content-wrapper">
          <img
            data-v-2509c11a
            src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/intro/spokesman/quote.png"
            class="icon"
          />
          <div data-v-2509c11a class="brief">短书是国内非常优秀的SaaS系统，特别是针对烘焙行业进行了高度的定制，体验很棒，非常适合我们烘焙培训机构使用。</div>
          <div data-v-2509c11a class="name-wrapper">
            <span data-v-2509c11a class="name">—— 甜菜</span>
            <span data-v-2509c11a class="tag">Tinrry+烘焙联合创始人</span>
          </div>
        </div>
        <!-- </div> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
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

