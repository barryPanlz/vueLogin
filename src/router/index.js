import Vue from 'vue'
import Router from 'vue-router' // 安装router
import index from '../components/index.vue'
import Hello from '../components/Hello.vue'
import List from '../components/list/list.vue'
import login from '../components/login/login.vue'
import regist from '../components/regist/regist.vue'
Vue.use(Router)

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [{
    path: '/',
    name: '/',
    component: index
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Hello,
    meta: {
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
    }
  },
  {
    path: '/List',
    name: 'List',
    component: List,
    meta: {
      requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
    }
  }, {
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/regist',
    name: 'regist',
    component: regist
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export default new Router({
  routes: routes, // （缩写）相当于 routes: routes
  linkActiveClass: 'active'
})
