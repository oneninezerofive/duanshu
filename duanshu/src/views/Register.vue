<template>
  <div>
    <div class="register-page">
      <div class="register-header">
        <div class="register-header-content">
          <div class="register-header-wrapper">
            <a href="javascript:void(0);">
              <img src="../assets/ds_logo.png" class="dslogo" />
            </a>
            <span class="page-title">免费注册</span>
          </div>
        </div>
      </div>
      <div>
        <form class="login-form">
          <div class="login-logo">
            <span>完成验证开始免费体验</span>
          </div>
          <div class="register-form tel-register">
            <div class="form-item">
              <input type="text" placeholder="请输入用户名" v-model="user" @blur.prevent="methion" class="form-control" />
            </div>
            <div class="form-item code flex-center">
              <input
                type="text"
                placeholder="请输入密码"
                style="width:362px"
                v-model="pwd"
                @blur.prevent="methion2"
                class="form-control phoneCode"
              />
            </div>
            <div class="form-item code flex-center">
              <input
                type="text"
                placeholder="再次确认密码"
                style="width:362px"
                 v-model="pwd2"
                 @blur.prevent="methion3"
                class="form-control phoneCode"
              />
            </div>
            <div class="form-item check-item">
              <label role="checkbox" aria-checked="true" class="el-checkbox is-checked">
                <span aria-checked="mixed" class="el-checkbox__input is-checked">
                  <span class="el-checkbox__inner"></span>
                  <input type="checkbox" checked="checked" class="el-checkbox__original" value />
                </span>
                <!---->
              </label>
              <p>
                <span>阅读并接受</span>
                <a target="_blank" href="//www.duanshu.com/agreement">《短书用户协议》</a>
              </p>
            </div>
            <div class="form-item">
              <button type="button" class="el-button register-btn el-button--default">
                <!---->
                <!---->
                <span @click="onClickButtonSubmit">立即开启</span>
              </button>
            </div>
            <div class="form-item register-login">
              <p>
                已有账号?
                <span class="login">直接登录</span>
              </p>
            </div>
          </div>
        </form>
        <div class="el-dialog__wrapper" style="display:none;">
          <div class="el-dialog el-dialog--center" style="width:380px;margin-top:15vh;">
            <div class="el-dialog__header">
              <span class="el-dialog__title"></span>
              <!---->
            </div>
            <!---->
            <!---->
          </div>
        </div>
      </div>
      <div class="register-footer">
        <span>
          ©2015南京厚建云计算有限公司《厚建云计算隐私权政策》 ICP证：
          <a
            href="http://www.miitbeian.gov.cn"
            target="_blank"
          >苏ICP备13020699号-10</a>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user:'',
      pwd:'',
      pwd2:''
    }
  },
  methods: {
     methion() {
       let patter = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
       let result1 =patter.test(this.user);
      if (this.user.trim() == "") {
        alert("用户名不能为空");
      } else if(!result1){
        alert('用户名不符合规范');
      }else{
        this.$axios({
        method: "post",
        //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
        url: "http://localhost:3008/login/test",
        data: this.$qs.stringify({
          user: this.user,
        })
      }).then(res => {
        // console.log(res);
        if(res.data=='可以注册'){
          console.log('可以注册');
          this.test ='1';
        }else{
         alert('用户已存在');
        }
      });
      }
    },
    methion2() {
     let patter2 = /^[a-zA-Z]\w{5,17}$/;
       let result2 =patter2.test(this.pwd);

      if (this.pwd.trim() == "") {
       console.log("密码不能为空");
        
      }else if(!result2){
        console.log('密码不符合规范');
      }else{
        this.test1 ='1';
      }
    },
    methion3() {
      if (this.pwd2.trim() == "") {
        console.log("密码不能为空");
      }else if(this.pwd!=this.pwd2){
         console.log('两次密码不一致');
      }else{
        this.test2 ='1';
      }
    },
     onClickButtonSubmit() {
    if(this.test=='1'&&this.test2=='1'&&this.test1=='1'){
      this.$axios({
        method: "post",
        //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
        url: "http://localhost:3008/login/reg",
        data: this.$qs.stringify({
          username: this.user,
          password: this.pwd
        })
      }).then(res => {
        alert('注册成功');
        this.$router.go(-1);
     
      });
    
    }
    },
  }
}
</script>
