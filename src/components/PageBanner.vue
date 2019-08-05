<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item height="556px" v-for="item in 4" :key="item">
      <div class="page-banner-item">
        <img
          src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/index/p1/p1-11.png"
          class="page-banner-image"
        />
        <div class="page-banner-wraper">
          <h2 class="page-banner-title">店铺装修玩出新花样</h2>
          <h3 class="page-banner-sub-title">
            多种功能组件任意搭配
            九大功能助你塑造“高级感”店铺形象
          </h3>
          <span class="page-banner-btn-wrapper">
            <a
              target="_blank"
              href="https://www.duanshu.com/article/1232"
              class="button page-banner-btn"
              style="color: rgb(2, 212, 163); background: white;"
            >查看详情</a>
          </span>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
.el-carousel__container {
  position: relative;
  height: 556px;
}
.page-banner-item {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
      height: 100%;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
}
.page-banner-image {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
         object-fit: cover;
}
.page-banner-wraper {
      width: 1100px;
      top: 370px;
      z-index: 20;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      margin-top: 20px;
}
.page-banner-title {
        font-size: 44px;
        color: white;
        font-weight: bold;
        margin-bottom: 16px;
        white-space: pre-line;
}
.page-banner-sub-title {
        font-size: 24px;
        color: #eeeeee;
        margin-bottom: 54px;
        white-space: pre;
        line-height: 1.7;
        white-space: pre-line;
}
.page-banner-btn {
        font-weight: 500;
        font-size: 16px;
        padding: 12px 48px;
        background: #0095ff;
        color: white;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 10px;
}

</style>
