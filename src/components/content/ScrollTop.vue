<template>
  <div class="scroll-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'ScrollTop',
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
  .scroll-top {
  position: fixed;
  right: -30px;
  bottom: 60px;
}
  .scroll-top img {
    width: 50%;
  }
</style>