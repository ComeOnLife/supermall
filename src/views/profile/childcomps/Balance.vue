<template>
  <div id="balance">
    <div class="myone">
      <div>
        <span class="price">0.00</span>
        <span class="size">元</span>
        <div class="size">我的余额</div>
      </div>
      <div>
        <span class="price">0</span>
        <span class="size">个</span>
        <div class="size">我的优惠</div>
      </div>
      <div>
        <span class="price">0</span>
        <span class="size">分</span>
        <div class="size">我的积分</div>
      </div>
    </div>
    <div class="mytwo">
      <div>
        <span class = 'icon-home'>我的消息</span>
      </div>
      <div>
        <span class="icon-home1">积分商城</span>
      </div>
      <div>
        <span class="icon-home2">会员卡</span>
      </div>
    </div>
    <div class="mythree">
      <div>
        <span class="icon-home3">我的购物车</span>
      </div>
      <div>
        <span class="icon-home4">下载购物App</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Balance',
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
 .myone {
   display: flex;
   text-align: center;
   padding: 15px;
   border-bottom: 10px solid #eee;
 }
 .myone div {
   flex: 1;
 }
 .price {
   color: rgb(245, 107, 107);
 }
 .size {
   font-size: 12px;
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
.icon-home:before {
  content: "\e953";
  color: rgb(236, 170, 170);
  padding: 0 10px;
}
.icon-home1:before {
  content: "\e945";
  color: rgb(236, 170, 170);
  padding: 0 10px;
}
.icon-home2:before {
  content: "\e97f";
  color: rgb(236, 170, 170);
  padding: 0 10px;
}
.icon-home3:before {
  content: "\e940";
  color: rgb(236, 170, 170);
  padding: 0 10px;
}
.icon-home4:before {
  content: "\e9bd";
  color: rgb(236, 170, 170);
  padding: 0 10px;
}
.mytwo {
  border-bottom: 10px solid #eee;
}
.mytwo div {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  border-bottom: 1px solid #eee;
}
.mythree div {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
</style>