<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar"  @navBarClick = 'navBarClick' ref="navBar"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type = '3'>
      <detail-swiper :top-images = 'topImages'></detail-swiper>
      <detail-base-info :goods = 'goods'></detail-base-info>
      <detail-shop-info :shop = 'shop'></detail-shop-info>
      <detail-goods-info :detail-info = 'detailInfo' @imgLoad = 'imgLoad'></detail-goods-info>
      <detail-param-info :param-info = 'paramInfo' ref="parames"></detail-param-info>
      <detail-comment-info :comment-info = 'commentInfo' ref="comment"></detail-comment-info>
      <goods-list :goods = 'recommends' ref="list"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart = 'addToCar'></detail-bottom-bar>
    <scroll-top @click.native="topClick"
                v-show="isShowBackTop"></scroll-top>
    <toast :title="$store.state.title" v-show="isShow"/>
  </div>
</template>

<script>
import DetailNavBar from './detailchild/DetailNavBar'
import DetailSwiper from './detailchild/DetailSwiper'
import DetailBaseInfo from './detailchild/DetailBaseInfo'
import DetailShopInfo from './detailchild/DetailShopInfo'
import DetailGoodsInfo from './detailchild/DetailGoodsInfo'
import DetailParamInfo from './detailchild/DetailParamInfo'
import DetailCommentInfo from './detailchild/DetailCommentInfo' 
import DetailBottomBar from './detailchild/DetailBottomBar'

import Scroll from 'components/content/Scroll'
import GoodsList from 'components/content/GoodsList'
import ScrollTop from "components/content/ScrollTop";

import Toast from 'views/cart/childcomps/Toast'

import {getDetail, Goods, Shop, GoodsParam, recommend} from 'network/detail.js'
import {debouce} from '@/common/utils.js'
export default {
  name: 'Detail',
  data () {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      debouceImage: null,
      debouceLoad: null,
      isShowBackTop: false,
      isShow: false
    };
  },
  created () {
    this.id = this.$route.params.id
    //展示数据的获取
    getDetail(this.id).then(res => {
      // console.log(res);
      this.topImages = res.result.itemInfo.topImages
      this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
      this.shop = new Shop(res.result.shopInfo)
      this.detailInfo = res.result.detailInfo
      this.paramInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule)
      if(res.result.rate.cRate !== 0) {
        this.commentInfo = res.result.rate.list[0]
      }
    }),
    //推荐数据的获取
    recommend().then(res => {
      // console.log(res);
      this.recommends = res.data.list
    })
    // 页面跳转的防抖操作
    this.debouceLoad = debouce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.parames.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.list.$el.offsetTop)
      // console.log(this.themeTopYs);
      },200)
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Scroll,
    GoodsList,
    DetailBottomBar,
    ScrollTop,
    Toast
  },
  mounted () {
   
  },
  activated() {
     if(this.$refs.scroll) {
      this.$bus.$on('detailItemLoad', () => {
      this.$refs.scroll.scroll.refresh()
    })
    }
  },
  methods: {
    imgLoad() {
      if(this.$refs.scroll) {
        this.$refs.scroll.scroll.refresh()
      }
      this.debouceLoad()
    },
    navBarClick(index) {
      // console.log('111');
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    //导航栏随着拖动自动改变
    contentScroll(position) {
      const positionY = -position.y
      const length = this.themeTopYs.length
      for(let i = 0; i < length; i++) {
        if((i< length -1 && positionY > this.themeTopYs[i] && positionY <= this.themeTopYs[i+1]) || (i === length - 1 && positionY >= this.themeTopYs[i])) {
          this.$refs.navBar.currentIndex = i
        }

      }
      this.isShowBackTop = -position.y > 1000;
    },
    topClick () {
      this.$refs.scroll.scrollTo(0,0);
    },
    addToCar() {
      //获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.id = this.id
      //将商品添加到购物车里
      this.$store.commit('addCart', product)
      console.log(this.$store.state.cartList);
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, 1000);
    }
  }, 
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 11;
    background-color: #fff;
    height: 100vh;
  }

  .content {
    height: calc(100% - 44px);
  }
  .nav-bar {
    position: relative;
    z-index: 12;
    background-color: #fff;
  }
</style>