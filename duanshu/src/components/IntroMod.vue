<template>
  <div class="intro-mod">
    <div data-v-9d3b7d64 class="s-1 intro-section">
      <h4 data-v-9d3b7d64>更好的服务，铸就更好的信任</h4>
      <div data-v-9d3b7d64 class="num-group">
        <div data-v-9d3b7d64 class="num-item">
          <p data-v-9d3b7d64 class="num">
            <span data-v-9d3b7d64 data-start="0" data-end="10">10</span>万
            <small data-v-9d3b7d64>+</small>
          </p>
          <p data-v-9d3b7d64>优质商户</p>
        </div>
        <div data-v-9d3b7d64 class="num-item">
          <p data-v-9d3b7d64 class="num">
            <span data-v-9d3b7d64 data-start="0" data-end="1300">1,300</span>万
            <small data-v-9d3b7d64>+</small>
          </p>
          <p data-v-9d3b7d64>覆盖用户</p>
        </div>
        <div data-v-9d3b7d64 class="num-item">
          <p data-v-9d3b7d64 class="num">
            <span data-v-9d3b7d64 data-start="0" data-end="3000">3,000</span>万
            <small data-v-9d3b7d64>+</small>
          </p>
          <p data-v-9d3b7d64>安全流水</p>
        </div>
        <div data-v-9d3b7d64 class="num-item">
          <p data-v-9d3b7d64 class="num">
            <span data-v-9d3b7d64 data-start="0" data-end="5500">5,500</span>万
            <small data-v-9d3b7d64>+</small>
          </p>
          <p data-v-9d3b7d64>内容产出</p>
        </div>
      </div>
    </div>
    <div data-v-62d33ad4 class="s-2 intro-section">
      <h4 data-v-62d33ad4>他们都在用短书</h4>
      <LogoWall />
      <!-- 第二个轮播图 -->
    </div>
    <div data-v-2509c11a class="intro-section spokesman intro-section">
      <BannerMan />
    </div>
    <div data-v-4aaf68c4 class="s-5 intro-section">
      <h4 data-v-4aaf68c4>延伸资讯</h4>
      <div data-v-4aaf68c4 class="item-list">
        <BannerYanshen />
      </div>
    </div>
    <div data-v-3101c1d8 class="s-3 intro-section">
      <h4 data-v-3101c1d8>战略合作</h4>
      <p
        data-v-3101c1d8
      >有赞支付是国内电商SaaS服务商中唯一取得合法牌照的一清交易结算渠道。短书与有赞支付合作，实现风险控制、超大额提现、超快速提现，为用户交易便捷和商户流水安全保驾护航。</p>
      <div data-v-3101c1d8 class="logo-links">
        <a data-v-3101c1d8>
          <img
            data-v-3101c1d8
            src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/intro/logo_links/youzan_hover.png"
          />
        </a>
        <a data-v-3101c1d8>
          <img
            data-v-3101c1d8
            src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/intro/logo_links/aliyun.png"
          />
        </a>
        <a data-v-3101c1d8>
          <img
            data-v-3101c1d8
            src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/intro/logo_links/tengxunyun.png"
          />
        </a>
        <a data-v-3101c1d8>
          <img
            data-v-3101c1d8
            src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/intro/logo_links/hoge.png"
          />
        </a>
        <a data-v-3101c1d8>
          <img
            data-v-3101c1d8
            src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/intro/logo_links/dayang.png"
          />
        </a>
        <a data-v-3101c1d8>
          <img
            data-v-3101c1d8
            src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/intro/logo_links/youxuanyun.png"
          />
        </a>
        <a data-v-3101c1d8>
          <img
            data-v-3101c1d8
            src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/intro/logo_links/yitu.png"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import LogoWall from "./LogoWall";
import BannerMan from "./BannerMan";
import BannerYanshen from "./BannerYanshen";

export default {
  components: {
    LogoWall,
    BannerMan,
    BannerYanshen
  }
};
</script>
<style>
.spokesman .el-carousel__container {
  width: 1200px;
  margin: 0 auto;
}
</style>


