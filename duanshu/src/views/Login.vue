<template>
  <div class="login-page">
    <img src="../assets/ds_logo.png" alt="logo" class="logo" />
    <div class="el-dialog__wrapper register-dialog" style="display: none;">
      <div class="el-dialog el-dialog--small" style="top: 15%;">
        <div class="el-dialog__header">
          <span class="el-dialog__title"></span>
          <button type="button" aria-label="Close" class="el-dialog__headerbtn">
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </button>
        </div>
        <!---->
        <!---->
      </div>
    </div>
    <div class="login-wraper">
      <div class="login-logo">
        <span class="login-tag login-logo--on" @click="cur=0" :class="{active:cur==0}">账号登录</span>
        <span class="login-line">|</span>
        <span class="login-tag" @click="cur=1" :class="{active:cur==1}">手机登录</span>
      </div>
      <form class="el-form login-form el-form--label-left" v-show="cur==0">
        <div class="account-login">
          <div class="el-form-item is-required">
            <!---->
            <div class="el-form-item__content" style="margin-left: 0px;">
              <div class="el-input">
                <!---->
                <!---->
                <input
                  autocomplete="off"
                  placeholder="账号"
                  type="text"
                  rows="2"
                  validateevent="true"
                  class="el-input__inner"
                  v-model="user"
                />
                <!---->
                <!---->
              </div>
              <!---->
            </div>
          </div>
          <div class="el-form-item is-required">
            <!---->
            <div class="el-form-item__content" style="margin-left: 0px;">
              <div class="el-input">
                <!---->
                <!---->
                <input
                  autocomplete="off"
                  placeholder="密码"
                  type="password"
                  rows="2"
                  validateevent="true"
                  class="el-input__inner"
                  v-model="pwd"
                />
                <!---->
                <!---->
              </div>
              <!---->
            </div>
          </div>
          <!---->
          <div class="el-form-item" style="width: 100%;">
            <!---->
            <div class="el-form-item__content" style="margin-left: 0px;">
              <button type="button" class="el-button btn-full el-button--primary" @click="loginTo">
                <!---->
                <!---->
                <span>登录</span>
              </button>
              <!---->
            </div>
          </div>
        </div>
      </form>
      <form class="el-form login-form el-form--label-left" v-show="cur==1">
        <div class="mobile-login">
          <div class="el-form-item is-required">
            <!---->
            <div class="el-form-item__content" style="margin-left: 0px;">
              <div class="el-input">
                <!---->
                <!---->
                <input
                  autocomplete="off"
                  placeholder="手机号码"
                  type="text"
                  rows="2"
                  validateevent="true"
                  class="el-input__inner"
                />
                <!---->
                <!---->
              </div>
              <!---->
            </div>
          </div>
          <div class="el-form-item captcha-wraper is-required">
            <!---->
            <div class="el-form-item__content" style="margin-left: 0px;">
              <div class="el-input">
                <!---->
                <!---->
                <input
                  autocomplete="off"
                  placeholder="图形码"
                  type="captcha"
                  rows="2"
                  validateevent="true"
                  class="el-input__inner"
                />
                <!---->
                <!---->
              </div>
              <img
                src="data:image/png;base64,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"
                class="captcha-img"
              />
              <!---->
            </div>
          </div>
          <div class="el-form-item code-wraper is-required">
            <!---->
            <div class="el-form-item__content" style="margin-left: 0px;">
              <div class="el-input">
                <!---->
                <!---->
                <input
                  autocomplete="off"
                  placeholder="手机验证码"
                  type="code"
                  rows="2"
                  validateevent="true"
                  class="el-input__inner"
                />
                <!---->
                <!---->
              </div>
              <span class="sendcode">获取验证码</span>
              <!---->
            </div>
          </div>
          <div class="el-form-item" style="width: 100%;">
            <!---->
            <div class="el-form-item__content" style="margin-left: 0px;">
              <button type="button" class="el-button btn-full el-button--primary">
                <!---->
                <!---->
                <span>登录</span>
              </button>
              <!---->
            </div>
          </div>
        </div>
      </form>
      <div class="forget-wraper">
        <span class="forget">忘记密码？</span>
        <p class="register-tip">
          还没有账号？
          <span class="register"><a href="#/register">立即注册</a></span>
        </p>
      </div>
    </div>
    <div class="copy-right">
      <p class="corporate culture">
        ©2015南京厚建云计算有限公司《厚建云计算隐私权政策》 ICP证：
        <a
          target="_blank"
          href="http://www.miitbeian.gov.cn"
        >苏ICP备16026135号</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cur: 0 ,//默认选中第一个tab
      user:"",
      pwd:""
    };
  },
  mounted() {},
  methods:{
    loginTo() {
      this.$axios({
        method: "post",
        //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
        url: "http://localhost:3008/login/login",
        data: this.$qs.stringify({
          username: this.user,
          password: this.pwd
        })
      }).then(res => {
        // console.log(res);
        if (res.data == "登录成功！") {
          alert('登录成功！')
         localStorage.setItem('isLogin',this.user);
          this.$router.go(-1);
        } else {
         alert('用户名或密码错误')
        }
      });
    }
  }
};
</script>
<style>
.login-page {
  height: 100%;
  padding-top: 50px;
  background-color: #fff;
  text-align: center;
}

.login-page .logo {
  position: fixed;
  top: 24px;
  left: 40px;
  cursor: pointer;
}

.login-page .login-wraper {
  height: 90%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
}

.login-page .login-form {
  width: 500px;
  margin: 0 auto;
  padding: 0 70px;
  text-align: -webkit-center;
  background: #fff;
}

.login-page .experience.login-logo {
  margin-bottom: 25px;
}

.login-page .tip {
  line-height: 37px;
  text-align: left;
  color: #999;
  font-size: 14px;
}

.login-page .el-form-item {
  margin-bottom: 24px;
}

.login-page .el-form-item:last-child .el-form-item__content {
  line-height: 14px;
  color: #999;
}

.login-page .el-row {
  margin-bottom: 42px;
}

.login-page .login-logo {
  margin-top: 100px;
  margin-bottom: 48px;
  font-size: 20px;
  color: #666;
}

.login-page .login-logo .login-tag {
  cursor: pointer;
}

.login-page .login-logo .login-line {
  margin: 0 20px;
  color: #e6e6e6;
}

.login-page .login-logo .active {
  color: #00a2ff;
}

.login-page .login-logo .el-icon-close {
  float: right;
  line-height: 30px;
  font-size: 14px;
  cursor: pointer;
}

.login-page .el-form-item:before, .login-page .el-form-item:after, .login-page .el-form-item__content:before, .login-page .el-form-item__content::after {
  display: flex;
}

.login-page .code-wraper {
  display: flex;
}

.login-page .code-wraper .el-form-item__content {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.login-page .code-wraper .sendcode {
  width: 100%;
  height: 44px;
  margin-left: 12px;
  line-height: 44px;
  color: #0095ff;
  background: #fafafa;
  border: solid 1px #f0f0f0;
  cursor: pointer;
}

.login-page .code-wraper .sendcode--disable {
  cursor: not-allowed;
  color: #999;
}

.login-page .captcha-wraper {
  position: relative;
}

.login-page .captcha-img {
  position: absolute;
  top: 0;
  right: 5px;
  display: inline-block;
  background: red;
  height: 34px;
  margin: 5px 0;
  object-fit: cover;
}

.login-page input {
  height: 36px;
  font-size: 16px;
}

.login-page .el-input__inner {
  height: 44px;
  font-size: 14px;
}

.login-page input::-webkit-input-placeholder {
  font-size: 14px !important;
  color: #999;
}

.login-page input:-moz-input-placeholder {
  font-size: 14px !important;
  color: #999 !important;
}

.login-page input::-moz-input-placeholder {
  font-size: 14px !important;
  color: #999 !important;
}

.login-page input:-ms-input-placeholder {
  font-size: 14px !important;
  color: #999 !important;
}

.login-page .register-tip {
  text-align: right;
  cursor: pointer;
}

.login-page .login-qrcode {
  display: block;
  width: 192px;
  height: 192px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ccc;
}

.login-page .qrcode-tip {
  text-align: center;
  margin-top: 20px;
}

.login-page .btn-full {
  width: 360px;
  height: 44px;
  font-size: 16px;
  font-weight: 600;
}

.login-page .forget-wraper {
  width: 360px;
  margin: 0 auto;
  color: #999;
}

.login-page .forget {
  float: left;
  cursor: pointer;
}

.login-page .register {
  color: #0095ff;
}

.login-page .register:hover {
  color: #64B5F6;
}

.login-page .register:active {
  color: #1e88e5;
}

.login-page .register-dialog {
  width: 720px;
  margin: 0 auto;
}

.login-page .register-dialog .register-wraper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-page .register-dialog .register-title {
  color: #333;
  font-size: 16px;
  margin-top: 20px;
  font-weight: bold;
}

.login-page .register-dialog .register-content {
  color: #999;
  font-size: 14px;
  margin-top: 16px;
}

.login-page .register-dialog .register-btn {
  margin-top: 60px;
  width: 80%;
  height: 44px;
  font-size: 14px;
}

</style>


