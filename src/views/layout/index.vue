<template>
  <div class="layout-container">
    <router-view />
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/demo1" icon="search">第一个</van-tabbar-item>
      <van-tabbar-item to="/demo2" icon="friends-o">第二个</van-tabbar-item>
      <van-tabbar-item to="/demo3" icon="setting-o">第三个</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  props: {},
  components: {},
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {},
  mounted () {}
}
</script>
<style lang='less' scoped>
</style>
