<template>
  <div id="home">
    <Header></Header>
    <div class="center">
      <PageBanner/>
      <HomeP2/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HomeP2 from '@/components/HomeP2.vue'
import Footer from '@/components/Footer.vue'
import PageBanner from '@/components/PageBanner.vue'

export default {
  name: 'home',
  components: {
    Header,
    PageBanner,
    HomeP2,
    Footer
  }
}
</script>
