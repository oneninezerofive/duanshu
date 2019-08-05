<template>
  <div id="knowledge">
    <Header></Header>
    <Know />
    <IntroMod />
    <div data-v-3332a792 class="s-4 intro-section">
      <div data-v-3332a792 class="center-wrap">
        <h4 data-v-3332a792>现在体验，还有新人专属优惠活动</h4>
        <div data-v-56f8e32a data-v-3332a792 class="wrapper form wrapper-style-intro">
          <div data-v-56f8e32a class="input-wrapper">
            <input data-v-56f8e32a type="text" placeholder="输入您的手机号" class="input-field" />
            <div data-v-56f8e32a class="submit submit--disable">
              <span data-v-56f8e32a class="btn-text">免费体验</span>
            </div>
          </div>
        </div>
      </div>
      <img
        data-v-3332a792
        data-src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/intro/s4_bg.jpg"
        src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/intro/s4_bg.jpg"
        lazy="loaded"
      />
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Know from "@/components/Know.vue";
import Footer from "@/components/Footer.vue";
import IntroMod from "@/components/IntroMod.vue";

export default {
  name: "knowledge",
  components: {
    Header,
    Know,
    Footer,
    IntroMod
  }
};
</script>
