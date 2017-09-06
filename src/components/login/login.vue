<template>
    <div>
        <div class="mar0">
            <el-row>
                <el-col :span="8">
                    <el-input id="name" v-model="name" placeholder="请输入帐号">
                        <template slot="prepend">帐号</template>
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-input id="password" v-model="password" type="password" placeholder="请输入密码">
                        <template slot="prepend">密码</template>
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-button id="login" @click="check" style="width:100%" type="primary">登录</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "18888888888",
            password: "",
            apiUrl: "http://10.0.11.175:6767/qkl_ico/api/user/login",
            userName:""
        }
    },
    methods: {
        check() {
            this.$http({
                url: this.apiUrl,
                method: 'POST',
                params: {
                    account: this.name,
                    password: this.password
                }
            }).then((res) => {
                res=res.body;
                console.log(res);
                if(res.errorCode===0){
                  this.$store.commit('increment');//存储登录状态 token值，
                  this.$router.push({ path: 'Hello' });//跳转到相应的页面
                  this.userName=res.data.User.user_name;
                  this.$emit("userSignIn",this.userName);//存储登录名
                  sessionStorage.setItem("token",true);//存储登录状态
                }
            })
        }
    }
}
</script>

<style scoped>

</style>