<template>
    <div id="cart">
      <nav-bar class="nav-bar">
        <div slot="center">购物车({{cartList}})</div>
      </nav-bar>
      <cart-list></cart-list>     
      <bottom-bar></bottom-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

import CartList from './childcomps/CartList'
import BottomBar from './childcomps/BottomBar'
    export default {
        name: 'Cart',
        data() {
            return {

            };
        },
        components: {
          NavBar,
          CartList,
          BottomBar
        },
        computed: {
          cartList() {
            return this.$store.state.cartList.length
          }
        },
        mounted() {},
        methods: {}
    }
</script>

<style scoped>
  .nav-bar {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>