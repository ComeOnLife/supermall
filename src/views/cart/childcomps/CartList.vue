<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item 
      v-for="(item,index) in cartList" 
      :key="index" 
      :itemInfo = 'item'
      ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/content/Scroll'

import CartListItem from './CartListItem'
export default {
  name: 'CartList',
  data () {
    return {
      cartList: []
    };
  },
  components: {
    Scroll,
    CartListItem,
  },
  mounted () {
    this.cartList = this.$store.state.cartList
  },
  activated() {
    this.$refs.scroll.scroll.refresh()
  },
  methods: {}
}
</script>

<style scoped>
  .cart-list {
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px - 54px);
    overflow: hidden;
  }
</style>