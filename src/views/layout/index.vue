<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<template>
  <div>
    <router-view></router-view>
    <van-tabbar route v-model="active" active-color="orange" inactive-color="#000">
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped lang="less">

</style>
