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
            name: "940529189@qq.com",
            password: "",
            apiUrl: BASEURL.test+BASEURL.user.login,//获取登陆的url
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
                  let redirect = decodeURIComponent(this.$route.query.redirect || '/');//接受路由传递的参数再准备跳转
                  this.$store.commit('increment');//存储登录状态 token值，
                  this.$router.push({ path: redirect });//跳转到相应的页面
                  this.userName=res.data.User.user_name;
                  this.$emit("userSignIn",this.userName);//存储登录名
                  sessionStorage.setItem("token",true);//存储登录状态
                }else{
                    alert(res.message);
                }
            },(error)=>{
                console.log(error);
            })
        }
    },
    mounted(){
        console.log(BASEURL);
    }
}
</script>

<style scoped>

</style>