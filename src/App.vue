<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <tab-bar>
        
    </tab-bar>
  </div>
</template>

<script>
    import TabBar from 'components/content/TabBar.vue'
    export default {
        name: 'App',
        data() {
            return {

            };
        },
        components: {
            TabBar
        },
        mounted() {
          /**
         * 解决 css 引入图片在 github pages 无法获取的问题
        */
          const { NODE_ENV } = process.env;
          document.documentElement.className = NODE_ENV;

        },
        methods: {}
    }
</script>

<style scoped>
    @import '~@/assets/css/base.css'
</style>