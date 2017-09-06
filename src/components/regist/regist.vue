<template>
    <div>
        <div class="mar0">
            <el-row>
                <el-col :span="8">
                    <el-input id="phone" v-model="phone" placeholder="请手机号">
                        <template slot="prepend">手机号</template>
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-input id="username" v-model="username" placeholder="请输入用户名">
                        <template slot="prepend">用户名</template>
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-input id="password1" v-model="password1" type="password" placeholder="请输入密码">
                        <template slot="prepend">密码</template>
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-input id="password" v-model="confirmPassword" type="password" placeholder="请再次输入密码">
                        <template slot="prepend">密码</template>
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-button id="login" @click="regist" style="width:100%" type="primary">注册</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            phone: "",
            username: "",
            phone: "",
            password1: "",
            confirmPassword: "",
            registURL: "http://10.0.11.175:6767/qkl_ico/api/user/register"
        }
    },
    methods: {
        regist() {
            this.$http({
                url: this.registURL,
                method: 'POST',
                params: {
                    account: this.phone,
                    user_name: this.username,
                    password: this.password1
                }
            }).then((res) => {
                console.log(res);
                alert(1)
            })
        }
    },
}
</script>

<style scoped>

</style>