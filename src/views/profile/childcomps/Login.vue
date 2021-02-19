<template>
  <div class="login">
    <div class="coderwhy">
      <img src="~assets/img/common/placeholder.png" alt="">
    </div>

    <div class="registered">
      <div class="loginer">登录/注册</div>
      <div class="phone">
        <span class="icon-home9">暂无绑定手机号</span>
      </div>
    </div>

    <div class="right">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      
    };
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
.login {
  height: 60px;
  background-color: #f78699;
  display: flex;
}
.coderwhy img{
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 4px 10px;
}
.registered {
  margin: 10px;
}
.registered img {
  width: 20px;
  vertical-align: middle;
}

.coderwhy .registered {
  flex: 1;
}
.loginer {
  color: #fff;
  font-size: 14px;
  height: 16px;
  margin-bottom: 5px;
}
.phone {
  height: 16px;
  font-size: 12px;
  color: #fff;
}

.right {
  transform: rotate(180deg);
  margin-left: 80px;
  margin-bottom: 20px;
}
 @font-face {
  font-family: 'icomoon';
  src:  url('../fonts/icomoon.eot?s5nj43');
  src:  url('../fonts/icomoon.eot?s5nj43#iefix') format('embedded-opentype'),
    url('../fonts/icomoon.ttf?s5nj43') format('truetype'),
    url('../fonts/icomoon.woff?s5nj43') format('woff'),
    url('../fonts/icomoon.svg?s5nj43#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
}
.icon-home9:before {
  content: "\e958";
}
</style>