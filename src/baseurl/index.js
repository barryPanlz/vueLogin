// @barryPan
// vue 里面添加全局变量使用global。
export default global.BASEURL = {
    test: "http://10.0.11.175:8002",
    user: {
        getCsrfToken: "/api/code/getCsrfToken", //获取请求头数据
        login: "/api/user/login", //登录
        register: "/api/user/register", //注册
        updatePassword: "/api/user/updatePassword", //修改密码
        updatePhone: "/api/user/updatePhone", //修改邮箱号
        forgetpwd: "/api/user/forgetpwd", //忘记密码
        sendVcode: "/api/user/sendVcode/" //发送短信验证码
        // @martin-chen
        // ---end---
    },
    coin: {
        rechargeCoin: "",

    },
    account: {
        wallet: "",

    }
};