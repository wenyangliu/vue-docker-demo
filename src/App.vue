<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      导航：
      <router-link to="/">首页</router-link> |
      <router-link to="/wen">Hi页面</router-link>

      <router-link to="/params/9526/周星星">params</router-link>
      <router-link to="/goback">返回首页</router-link>
      <!--<router-link to="/hi">Hi页面</router-link> |-->
      <!--<router-link :to="{name: 'hi1', params:{username: 'wenyang'}}">-Hi页面1</router-link> |-->
      <!--<router-link to="/hi/hi2">-Hi页面2</router-link>-->
    </p>
    <button @click="goback">后退</button>
    <button @click="gohome">回到首页</button>
    <p>{{ $route.name }}</p>

    <transition name="fade">
      <router-view/>
    </transition>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goback() {
      this.$router.go(-1)
    },
    gohome() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
