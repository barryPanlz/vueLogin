<template>
    <div class="header">
        <div class="tab">
            <div class="tab_item">
                <router-link to="/">首页</router-link>
            </div>
            <div class="tab_item">
                <router-link to="/hello">hello</router-link>
            </div>

        </div>
        <div class="right" v-show="!this.token">
            <div class="right_span">
                <router-link to="/login">登录</router-link>
            </div>
            <div class="right_span">
                <router-link to="/regist">注册</router-link>
            </div>
        </div>
        <div class="right" v-show="this.token">
            <div class="right_span">
                <span>{{userName}}</span>
            </div>
            <div class="right_span">
                <button @click="logout">退出</button>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        userName: {
            type: String
        }
    },
    data() {
        return {
            logOutUrl: "http://10.0.11.175:6767/qkl_ico/api/user/logout"
        }
    },
    methods: {
        logout() {
            this.$http({
                url: this.logOutUrl,
                method: 'GET',
                params: {

                }
            }).then((res) => {
                res = res.body;
                console.log(res);
                if (res.errorCode === 0) {
                    this.$store.commit('unIncrement');//存储登录状态 token值，
                    this.$router.push({ path: 'login' });//跳转到相应的页面
                    sessionStorage.removeItem("token");//删除登录状态
                }
            })
        }
    },
    computed: mapGetters({
        token: 'loginToken'
    })
}
</script>

<style lang="less">
.header {
    display: flex;
    .tab {
        flex: 1;
        display: flex;
        .tab_item {
            flex: 1
        }
    }
    .right {
        flex: 0 0 100px;
        .right_span {
            float: left;
            margin-left: 10px;
        }
    }
}

.right {
    float: right;
    .right_span {}
}
</style>