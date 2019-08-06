<template>
  <div data-v-62d33ad4 class="logo-wall">
    <div data-v-62d33ad4 class="item" v-for="(item,index) in logowall" :key="index">
      <div data-v-62d33ad4 class="info">
        <img
          data-v-62d33ad4
          :src="item.img"
        />
        <p data-v-62d33ad4 v-text="item.name"></p>
      </div>
      <div data-v-62d33ad4 class="qrcode">
        <p data-v-62d33ad4 class="qrcode-title" v-text="item.name"></p>
        <div data-v-62d33ad4 class="qrcode-wrap">
          <div
            data-v-62d33ad4
            value="https://ujamm.duanshu.com"
            level="H"
            background="#fff"
            foreground="#000"
            class
          >
            <canvas height="100" width="100" style="width: 100px; height: 100px;"></canvas>
          </div>
          <img
            data-v-62d33ad4
            src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/intro/logo_project/logo1.png"
            class="duanshu-logo"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      logowall:[]
    }
  },
  async created () {
    const logowall=await this.$axios('https://www.easy-mock.com/mock/5d403bde447df940a974ad06/duanshu');
    this.logowall =logowall.data.data.kingkongList;
    // console.log(logowall.data.data.kingkongList);
  }
}
</script>

