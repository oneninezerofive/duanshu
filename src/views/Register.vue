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
              <input type="text" placeholder="手机号" value class="form-control" />
            </div>
            <div class="form-item code flex-center">
              <input type="text" placeholder="手机验证码" value class="form-control phoneCode" />
              <button type="button" class="el-button code-btn el-button--default">
                <!---->
                <!---->
                <span>获取验证码</span>
              </button>
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
                <span>立即开启</span>
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
