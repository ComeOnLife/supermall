<template>
    <div id="profile">
      <nav-bar class="nav-bar">
        <div slot="center">我的档案</div>
      </nav-bar>
      <login/>
      <balance/>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import Login from './childcomps/Login'
import Balance from './childcomps/Balance'
    export default {
        name: 'Profile',
        data() {
            return {

            };
        },
        components: {
          NavBar,
          Login,
          Balance
        },
        mounted() {},
        methods: {}
    }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    border-bottom: 1px solid #ff8e96; 
  }
</style>