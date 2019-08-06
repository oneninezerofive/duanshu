<template>
  <div class="header">
    <div class="fixed-inner">
      <div class="content">
        <h1 class="dsh1">
          更好的
          <a @click="navto('knowledge')" title="知识付费平台">知识付费</a>解决方案
        </h1>
        <a href="//www.duanshu.com/" title="短书">
          <img
            src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/ds_logo.png"
            title="短书"
            class="dslogo"
          />
        </a>
        <ul class="menus">
          <li class="menu-item active" key="1">
            <a @click="navto('home')" title="首页" class="link">首页</a>
            <!---->
            <!---->
            <!---->
            <!---->
          </li>
          <li class="menu-item">
            <a href="javascript:void(0);" title="解决方案" class="link">解决方案</a>
            <span class="arrow"></span>
            <img
              src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/new_icon.png"
              class="menu-icon"
            />
            <div class="dropdown-board">
              <div class="board-group">
                <div class="group-title">行业解决方案</div>
                <div class="plan-wrapper">
                  <a @click="navto('knowledge')" title="知识付费平台" class="plan-item link">
                    <img
                      src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/header/knowledge.png"
                      alt
                      class="plan-icon"
                    />
                    <span class="plan-content">
                      <span class="plan-title">
                        知识付费
                        <!---->
                      </span>
                      <span class="plan-brief">重视每一个内容创作者的价值</span>
                    </span>
                  </a>
                  <a href="https://education.duanshu.com/edu" title="在线网络课堂" class="plan-item link">
                    <img
                      src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/header/education.png"
                      alt
                      class="plan-icon"
                    />
                    <span class="plan-content">
                      <span class="plan-title">
                        教育培训
                        <!---->
                      </span>
                      <span class="plan-brief">更懂移动互联网的线上教育解决方案</span>
                    </span>
                  </a>
                  <a href="//www.duanshu.com/enterprise" title="企业内训系统" class="plan-item link">
                    <img
                      src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/header/company.png"
                      alt
                      class="plan-icon"
                    />
                    <span class="plan-content">
                      <span class="plan-title">
                        企业内训
                        <!---->
                      </span>
                      <span class="plan-brief">每个企业都能拥有自己的企业电视台</span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="board-group">
                <div class="group-title">业务解决方案</div>
                <div class="plan-wrapper">
                  <a href="//www.duanshu.com/storeshop" title="内容电商平台" class="plan-item link">
                    <img
                      src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/header/store.png"
                      alt
                      class="plan-icon"
                    />
                    <span class="plan-content">
                      <span class="plan-title">
                        内容电商
                        <!---->
                      </span>
                      <span class="plan-brief">内容创作者自己的内容电商小店</span>
                    </span>
                  </a>
                  <a href="//www.duanshu.com/video" title="课堂直播系统" class="plan-item link">
                    <img
                      src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/header/live.png"
                      alt
                      class="plan-icon"
                    />
                    <span class="plan-content">
                      <span class="plan-title">
                        直播系统
                        <!---->
                      </span>
                      <span class="plan-brief">专注知识传播和教育培训的直播技术服务</span>
                    </span>
                  </a>
                  <a href="//www.duanshu.com/applet" title="小程序生成平台" class="plan-item link">
                    <img
                      src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/header/applet.png"
                      alt
                      class="plan-icon"
                    />
                    <span class="plan-content">
                      <span class="plan-title">
                        小程序
                        <!---->
                      </span>
                      <span class="plan-brief">打造微信移动教育生态闭环</span>
                    </span>
                  </a>
                  <a href="//www.duanshu.com/weike" title="A.I.互动课堂" class="plan-item link">
                    <img
                      src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/header/weike.png"
                      alt
                      class="plan-icon"
                    />
                    <span class="plan-content">
                      <span class="plan-title">
                        A.I.微课
                        <img
                          src="//duanshu-web.oss-cn-beijing.aliyuncs.com/static/image/global/new_icon.png"
                          class="menu-icon"
                        />
                      </span>
                      <span class="plan-brief">边练边学的A.I.互动课堂</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <!---->
          </li>
          <li class="menu-item">
            <a href="//www.duanshu.com/price" title="资费说明" class="link">资费说明</a>
            <!---->
            <!---->
            <!---->
            <!---->
          </li>
          <li class="menu-item rel">
            <a href="javascript:void(0);" title="短书学院" class="link">短书学院</a>
            <span class="arrow"></span>
            <!---->
            <!---->
            <div class="dropdown-board-s">
              <a
                href="//www.duanshu.com/news_edu"
                title="在线教育资讯"
                target="_blank"
                class="item"
              >在线教育资讯</a>
              <a
                href="//www.duanshu.com/news_know"
                title="知识付费资讯"
                target="_blank"
                class="item"
              >知识付费资讯</a>
              <a href="https://school.duanshu.com" title="短书学院" target="_blank" class="item">短书学院</a>
            </div>
          </li>
          <li class="menu-item">
            <a href="##" @click="navto('aboutme')" title="关于我们" class="link">关于我们</a>
            <!---->
            <!---->
            <!---->
            <!---->
          </li>
          <li class="menu-item">
            <a href="##" @click="navto('agency')" title="渠道代理" class="link">渠道代理</a>
            <!---->
            <!---->
            <!---->
            <!---->
          </li>
        </ul>
        <div class="controls">
          <a href="##" @click="navto('login')" class="control-btn login">登录</a>
          <a target="_blank" href="##" @click="navto('register')" class="control-btn register">注册</a>
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    navto(name){
      this.$router.push({
        name
    }
  );
}}}
</script>

