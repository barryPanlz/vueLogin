<template>
  <div id="app">
    <v-header :userName="userName"></v-header>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view @userSignIn="userSignIn"></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import header from './components/header/header.vue';

export default {
  data() {
    return {
      userName: sessionStorage.userName
    }
  },
  components: {
    "v-header": header
  },
  methods: {
    userSignIn(userName) {
      sessionStorage.userName = userName;
      this.userName = sessionStorage.userName;
    }
  }

}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
