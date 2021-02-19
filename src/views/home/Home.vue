<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
                   class= "tab-control"
                   @tabClick="tabClick" 
                   ref="tabControl2"
                   v-show="isTabFixed"/>
    <scroll class="scroll"
            ref="scroll"
            :probe-type="3"
            @scroll="scroll"
            @pullingUp="pullingUp">
      <home-swiper :banners="banners" @homeSwiperLoad = 'homeSwiperLoad'/>
      <recommend-view :recommends="recommends" />
      <feature />
      <tab-control :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick" 
                   ref="tabControl"/>
      <goods-list :goods="goods[currentIndex].list" />
    </scroll>
    <scroll-top @click.native="topClick"
                v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/TabControl";
import GoodsList from "components/content/GoodsList";
import Scroll from "components/content/Scroll";
import ScrollTop from "components/content/ScrollTop";

import HomeSwiper from "./childcomps/HomeSwiper";
import RecommendView from "./childcomps/RecommendView";
import Feature from "./childcomps/Feature";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data () {
    return {
      banners: [],
      recommends: [],
      currentIndex: "pop",
      isShowBackTop: null,
      tabControlTop: null,
      isTabFixed: false,
      saveY: 0,
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
    };
  },
  created () {
    //请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    
  },
  computed: {
    
  },
  //活跃前活跃后防跳转刷新
  // activated() {
  //   this.$refs.scroll.scrollTo(0, this.saveY,0)
  //   this.$refs.scroll.scroll.refresh()
  //   },
  // deactivated() {
  //   this.saveY = this.$refs.scroll.getScrollY()
  //   },
  methods: {
    /**
     * 防抖函数
     */
    debounce(func, delay) {
      let timer = null
      return function(...args) {
        if(timer)clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay);
      }
    },

    /**
     * 事件相关
     */
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentIndex = "pop";
          break;
        case 1:
          this.currentIndex = "new";
          break;
        case 2:
          this.currentIndex = "sell";
          break;
      }
      this.$refs.tabControl.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    topClick () {
      this.$refs.scroll.scrollTo(0,0);
    },
    scroll (position) {
      // console.log(position);
      this.isShowBackTop = -position.y > 1000;
      this.isTabFixed = -position.y > this.tabControlTop
    },
    pullingUp () {
      // console.log('上拉加载更多');
      this.getHomeGoods(this.currentIndex);
    },
    homeSwiperLoad() {
      this.tabControlTop = this.$refs.tabControl.$el.offsetTop
    },
    /**
     * 请求相关
     */
    getHomeMultidata () {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    ScrollTop,
  },
  mounted () { 
    this.$bus.$on('itemImageLoad', () => {
      // console.log('--1--');
      this.$refs.scroll.scroll.refresh()
    })
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  position: relative;
  height: 100vh;
}

.home-nav {
  color: #fff;
  background-color: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
}

.tab-control {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.scroll {
  /* height: calc(100% - 93px); */
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>