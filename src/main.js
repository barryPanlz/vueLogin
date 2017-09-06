import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import vueResouse from "vue-resource"
import router from './router'
import store from './store'
Vue.use(vueResouse)
Vue.use(ElementUI)

let essionId

new Vue({
  el: '#app',
  router: router,
  store:store,
  render: h => h(App),
  data(){
    return {
      apiUrl:"http://10.0.11.175:6767/qkl_ico/api/code/getCsrfToken"
    }
  },
  mounted:function(){
    //获取请求头id
    this.$http.get(this.apiUrl).then((response) => {
      response=response.body;
      console.log(response)
     essionId=response.data.sessionId;
     console.log(essionId)
     
    }, (response) => {

    });
    //发送请求头
    Vue.http.interceptors.push((request, next) => {
      request.headers.set('x-auth-token', essionId); //setting request.headers
      next((response) => {
          return response
   })
})
  }
})
// vue-router 提供的钩子函数 beforeEach() 对路由进行判断。
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { 
    console.log(store.state.token) // 判断该路由是否需要登录权限
      if (store.state.token) {  // 通过vuex state获取当前的token是否存在
          next();
      }
      else {
          next({
              path: '/login',
              query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
  }
  else {
      next();
  }
})
//vuex
